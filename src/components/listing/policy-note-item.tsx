import { View } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function PolicyNoteItem({ item }: { item: React.ReactNode }) {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    }}>
      <MaterialCommunityIcon
        name="minus"
        size={12}
      />
      {item}
    </View>
  );
}