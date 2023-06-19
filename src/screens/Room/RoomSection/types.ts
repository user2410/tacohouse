import { StackScreenProps } from "@react-navigation/stack";
import { AppStackParamList } from "@navigation/AppNavigator";

export interface RoomItemProps {
    id: number,
    image?: string,
    roomName: string,
    address: string,
    price: number, // per month
    area: number, // sqft
    liked: boolean,
    owner: string,
    tenant?: string,
    stackProps?: StackScreenProps<AppStackParamList, "MainNav">
}

export interface RoomSectionProps {
    data: Array<RoomItemProps>,
    stackProps?: StackScreenProps<AppStackParamList, "MainNav">
}