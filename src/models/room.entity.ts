type RoomEntity = {
  id: string,
  image?: string,
  roomName: string,
  roomNumber: string,
  address: string,
  price: number, // per month
  area: number, // sqft
  liked: boolean,
  owner: string,
  tenant?: string,
}