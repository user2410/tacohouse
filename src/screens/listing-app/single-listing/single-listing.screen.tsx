import { ListingNavigatorParams } from '@navigation/listing-app/listing-app.navigator';
import { RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import ListingService from '@services/listing.service';
import React from 'react';
import { Animated, ImageBackground, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import styles from './single-listing.style';
import { Padding } from '@assets/styles/global-styles';
import ErrorComponent from '@components/error/error';
import LoadingComponent from '@components/loading/loading';
import { ListingEntity } from '@models/listing.entity';
import MapView, { Marker } from 'react-native-maps';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { ICON_SIZE } from './single-listing.style';
import GalleryComponent from '@components/gallery/gallery';
import PolicyNoteItem from '@components/listing/policy-note-item';
import { Text as RNPText } from 'react-native-paper';
import Section from '@components/section/section';

export default function SingleListing(): React.ReactElement {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ListingNavigatorParams, 'SingleListing'>>();
  const id = route.params?.id
  if (!id) {
    navigation.goBack();
  }

  const [listing, setListing] = React.useState<ListingEntity>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<any>(undefined);

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const scrollViewRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    (async () => {
      try {
        setIsLoading(true);
        const res = await ListingService.getSingleListing(id);
        if (!res) {
          throw new Error('Listing not found');
        }
        console.log(`listing ${id}:`, res);
        setListing(res);
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
    <LoadingComponent />
  ) : error ? (
    <ErrorComponent error={error} />
  ) : listing ? (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <ImageBackground source={{ uri: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg' }} style={{ position: 'relative' }}>

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
            <FeatherIcon name="arrow-left" size={ICON_SIZE} color="black" onPress={() => navigation.goBack()} />
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
            <Text style={styles.address}>{listing?.property.address}</Text>
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
                  quantity: listing?.property.area,
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
                listing?.property?.features?.map(f => f.feature).map((item, index) => (
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
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Property Amenities</Text>
            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
              {
                listing?.property?.amenities?.map(a => a.amenity).map((item, index) => (
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
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Property Overview</Text>
            <Text style={styles.paragraph}>
              {listing?.description}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Gallery</Text>
            <GalleryComponent items={listing?.property.media!} tileSize={97} />
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
                latitude: listing?.property.location.lat!,
                longitude: listing?.property.location.lng!,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
            >
              <Marker
                description="This is a description"
                coordinate={{
                  latitude: listing?.property.location.lat!,
                  longitude: listing?.property.location.lng!,
                }} />
            </MapView>
          </View>
          <View style={styles.divider} />
          <View style={styles.section}>
            <Text style={styles.title}>Policies</Text>
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
                {listing.policies.map((policy, index) => (
                  <Section key={index} title={policy.title} titleVariant="titleSmall">
                    {policy.notes.map((note, index) => (
                      <PolicyNoteItem key={index} item={
                        (<RNPText variant="bodyMedium">{note}</RNPText>)
                      } />
                    ))}
                  </Section>
                ))
                }
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  ) : <View></View>;
}