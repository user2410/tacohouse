import React from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const ICON_SIZE = 20;

export type AmenityEntity = {
  amenity: string;
  description?: string;
}

export interface DisplayAmenity {
  fullName: string;
  icon: React.ReactNode;
}

const styles = {
  iconStyle: { marginHorizontal: 8, color:"blue" }
}

const amenityMap: Record<string, DisplayAmenity> = {
  'elevator': {
    fullName: 'Elevator',
    icon: (<MaterialCommunityIcon name="elevator-passenger" size={ICON_SIZE} color={styles.iconStyle.color} style={styles.iconStyle} />),
  },
  'security_camera': {
    fullName: 'Security Camera',
    icon: (<MaterialCommunityIcon name="security" size={ICON_SIZE} color={styles.iconStyle.color}  style={styles.iconStyle} />),
  },
};

export function amenityToDisplay(code: string): DisplayAmenity {
  return amenityMap[code] || { fullName: code };
}