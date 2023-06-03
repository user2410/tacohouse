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
}

export interface RoomSectionProps {
    data: Array<RoomItemProps>,
}