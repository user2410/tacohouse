import {StyleSheet, View} from 'react-native';
import ListingCard from './ListingCard';

export default function ListingList({
  data,
}: {
  data: ListingEntity[];
}): React.ReactElement {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <ListingCard item={item} key={`listing-${item.id.toString()}`} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: '100%',
  },
});
