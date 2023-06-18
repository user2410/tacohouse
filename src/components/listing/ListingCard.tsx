import BigText from '@components/text/BigText';
import RegularText from '@components/text/RegularText';
import SmallText from '@components/text/SmallText';
import {Image, StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ListingCarditem = {
  // onPress: () => void;
  item: ListingEntity;
};

const ListingCard: React.FC<ListingCarditem> = ({
  item,
}: // onPress,
ListingCarditem) => {
  return (
    <View style={styles.container}>
      <View style={{position: 'relative'}}>
        <Image style={styles.image} source={{uri: item.thumbnailImg}} />
        {/* <Ionicons size={20} color={'red'} style={styles.heart} name={item.liked ? "heart" : 'heart-outline'} /> */}
      </View>
      <View>
        <BigText textStyles={{marginBottom: 2}}>{item.title}</BigText>
        <RegularText>{item.address}</RegularText>
      </View>
      <View style={styles.containerInlineGroup}>
        <View style={styles.containerInlineGroup}>
          <SmallText textStyles={{fontSize: 24}}>
            {item.price.toLocaleString()} VND
          </SmallText>
          <RegularText> /Month</RegularText>
        </View>
        <View>
          <RegularText>{item.area} sqft</RegularText>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {},
  image: {
    height: 160,
    width: '100%',
    borderRadius: 16,
  },
  heart: {
    position: 'absolute',
    top: 7,
    right: 7,
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  containerInlineGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInlineGroup: {},
});

export default ListingCard;
