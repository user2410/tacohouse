import { ListingNavigatorParams } from '@navigation/listing-app/listing-app.navigator';
import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import ListingService from '@services/listing.service';
import React from 'react';
import { Animated, Image, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import styles from './single-listing.style';
import { Border, Padding } from '@assets/styles/global-styles';
import MapView, { Marker } from 'react-native-maps';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { gallery } from './static';
import styles, { ICON_SIZE } from './single-listing.style';

export default function SingleListing(): React.ReactElement {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ListingNavigatorParams, 'SingleListing'>>();
  const id = route.params?.id
  if (!id) {
    navigation.goBack();
  }

  const [listing, setListing] = React.useState<ListingEntity | undefined>(undefined);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<any>(undefined);

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const scrollViewRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    (async () => {
      try {
        setIsLoading(true);
        const listing = await ListingService.getSingleListing(id);
        // console.log('listing', listing);
        setListing(listing);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })()
  }, [isFocused])

  const forwardOpacityAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    }),
    zIndex: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 10],
      extrapolate: 'clamp',
    })
  }

  const backwardOpacityAnimation = {
    opacity: animatedValue.interpolate<number>({
      inputRange: [0, 200],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    zIndex: animatedValue.interpolate({
      inputRange: [0, 200],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    })
  }

  return isLoading ? (
    <SafeAreaView>
      <Text>Loading ... </Text>
    </SafeAreaView>
  ) : error ? (
    <SafeAreaView>
      <Text>{JSON.stringify(error)}</Text>
    </SafeAreaView>
  ) : (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <ImageBackground source={{ uri: listing?.thumbnailImg }} style={{ position: 'relative' }}>

          <Animated.View style={[styles.upperHeaderTransparent, backwardOpacityAnimation]}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <FeatherIcon name="arrow-left"
                size={ICON_SIZE}
                color="white"
              />
            </TouchableWithoutFeedback>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              gap: 15,
            }}>
              <TouchableWithoutFeedback><FeatherIcon name="share" color="white" size={ICON_SIZE} onPress={() => console.log('share icon')} /></TouchableWithoutFeedback>
              <TouchableWithoutFeedback><FeatherIcon name="flag" color="white" size={ICON_SIZE} onPress={() => console.log('flag icon')} /></TouchableWithoutFeedback>
              <TouchableWithoutFeedback><FeatherIcon name="star" color="white" size={ICON_SIZE} onPress={() => console.log('star icon')} /></TouchableWithoutFeedback>
              <TouchableWithoutFeedback><FeatherIcon name="user" color="white" size={ICON_SIZE} onPress={() => console.log('user icon')} /></TouchableWithoutFeedback>
            </View>
          </Animated.View>

          <Animated.View style={[styles.upperHeaderLight, forwardOpacityAnimation]}>
            <FeatherIcon name="arrow-left" size={ICON_SIZE} color="black" />
            <Animated.Text style={[
              {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'bold',
                fontSize: 18,
                opacity: animatedValue.interpolate({
                  inputRange: [200, 240],
                  outputRange: [0, 1],
                  extrapolate: 'clamp',
                })
              }
            ]}
              numberOfLines={1}>
              {listing?.title}
            </Animated.Text>
            <EntypoIcon name="dots-three-vertical" size={ICON_SIZE} onPress={() => console.log('menu icon')} />
          </Animated.View>

          <View style={styles.lowerHeader} />
        </ImageBackground>
      </SafeAreaView>

      <ScrollView
        ref={scrollViewRef}
        onScroll={e => {
          const offsetY = e.nativeEvent.contentOffset.y;
          animatedValue.setValue(offsetY);
        }}
        scrollEventThrottle={1}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          <View style={styles.section}>
            <Animated.Text style={[
              styles.title,
              {
                opacity: animatedValue.interpolate({
                  inputRange: [200, 240],
                  outputRange: [1, 0],
                  extrapolate: 'clamp'
                })
              }
            ]}>
              {listing?.title}
            </Animated.Text>
            <Text style={styles.price}>${listing?.price} / month</Text>
            <Text style={styles.address}>{listing?.address}</Text>
            <Text style={styles.address}>Apartment</Text>
            <View style={{
              flexDirection: 'row',
              gap: 15,
            }}>
              {[
                {
                  icon: <MaterialCommunityIcon name="sofa-outline" size={ICON_SIZE} />,
                  quantity: 1,
                },
                {
                  icon: <MaterialCommunityIcon name="bed" size={ICON_SIZE} />,
                  quantity: 3,
                },
                {
                  icon: <MaterialCommunityIcon name="bathtub" size={ICON_SIZE} />,
                  quantity: 2,
                },
                {
                  icon: <MaterialCommunityIcon name="crop-square" size={ICON_SIZE} />,
                  quantity: listing?.area,
                },
              ].map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    gap: 5
                  }}>
                  {item.icon}
                  <Text style={{ fontWeight: 'bold' }}>{item.quantity}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Property Features</Text>
            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
              {
                ['Balcony', 'Air conditioning', 'Dish washer', 'Internal laundry', 'Broadband Internet Access', 'Washing Machine'].map((item, index) => (
                  <View
                    key={index}
                    style={{
                      minWidth: '48%',
                      flexDirection: 'row',
                      gap: 5,
                      flexWrap: 'wrap',
                    }}>
                    <FeatherIcon name="check" size={ICON_SIZE} color="green" />
                    <Text numberOfLines={1}>{item}</Text>
                  </View>
                ))
              }
            </View>
            {/* <FlatList
              data={['Balcony', 'Air conditioning', 'Dish washer', 'Internal Laundry', 'Broadband Internet Access']}
              renderItem={({ item }) => (
                <View style={{
                  flexDirection: 'row',
                  gap: 5,
                  flexWrap: 'wrap',
                }}>
                  <FeatherIcon name="check" size={ICON_SIZE} color="green" />
                  <Text>{item}</Text>
                </View>
              )}
              keyExtractor={item => item}
              numColumns={2}
            /> */}
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Property Overview</Text>
            <Text style={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, unde eveniet! Repudiandae aut, dolor repellat temporibus, doloremque obcaecati quam quis eveniet eum impedit dolore repellendus, suscipit consequuntur voluptate deleniti possimus.
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Gallery</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              gap: 20,
            }}>
              {gallery.slice(0, 5).map((item, index) => (
                <View key={index}>
                  <Image
                    style={{
                      borderRadius: Border.br_8xs,
                      width: 97,
                      height: 97,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.imageSource }}
                  />
                </View>
              ))}
              {gallery.length > 5 ?
                <View style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: Border.br_8xs,
                  width: 97,
                  height: 97,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                    +{gallery.length - 5}
                  </Text>
                </View>
                : null}
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Location</Text>
            <MapView
              style={{
                width: '100%',
                height: 200,
              }}
              initialRegion={{
                latitude: 21.007076103786403,
                longitude: 105.84310564167778,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
            >
              <Marker
                description="This is a description"
                coordinate={{
                  latitude: 21.00667543819238,
                  longitude: 105.84834190302948,
                }} />
            </MapView>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Policies</Text>
            {/* {
              [
                {
                  title: 'Pets Policy',
                  iconLeft: <MaterialCommunityIcon name="dog" size={ICON_SIZE} />,
                  iconRight: <FeatherIcon name="chevron-down" size={ICON_SIZE} />,
                  allow: ['Cats', 'Dogs'],
                  note: 'Vaccinated, Trained, Friendly',
                },
                {
                  title: 'Rental Payment',
                  iconLeft: <MaterialCommunityIcon name="cash" size={ICON_SIZE} />,
                  iconRight: <FeatherIcon name="chevron-down" size={ICON_SIZE} />,
                  note: 'Monthly',
                }
              ].map((item, index) => (
                <View key={index}>
                  <Text>{item.title}</Text>

                </View>
              ))
            } */}
            <View>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
              }}>Pets Policy</Text>
              <View style={{
                flexDirection: 'column',
                gap: 5,
                paddingLeft: Padding.p_3xs,
              }}>
                {['Cat', 'Dog'].map((item, index) => (
                  <View
                    key={index}
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      gap: 5,
                      flexWrap: 'wrap',
                    }}>
                    <FeatherIcon name="check" size={ICON_SIZE} color="green" />
                    <Text numberOfLines={1}>{item}</Text>
                  </View>
                ))}
                <Text>Vaccinated, Trained, Friendly</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <View>
              <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
              }}>Rental Payment</Text>
              <View style={{
                paddingLeft: Padding.p_3xs,
              }}>
                <Text>Monthly</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}