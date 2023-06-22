import { timeout } from "./settings";

let rooms = [
  {
    id: '1',
    roomName: 'The Hamiton',
    roomNumber: 'P102',
    address: '1815 14th st NW, Washington, US',
    price: 1200000,
    area: 12.2,
    image: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/01/27/z4064025740041-0c32a1d0197c20b63c64a57df8c64959_1674785592.jpg',
    liked: true,
    owner: 'Nguyen Van Ky',
    tenant: 'Lang Thang',
  },
  {
    id: '2',
    roomName: 'The Hamiton',
    roomNumber: 'P103',
    address: '1815 14th st NW, Washington, US',
    price: 1200000,
    area: 12.2,
    image: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2021/10/27/17f127e466893fd370b536e3d9cd0b15-2742471474502885792_1635303858.jpg',
    liked: false,
    owner: 'Nguyen Van Ky',
    tenant: 'Lang Thang',
  },
  {
    id: '3',
    roomName: 'The Hamiton',
    roomNumber: 'P104',
    address: '1815 14th st NW, Washington, US',
    price: 1200000,
    area: 12.2,
    image: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/04/26/0_1682481455.png',
    liked: true,
    owner: 'Nguyen Van Ky',
    tenant: 'Lang Thang',
  },
  {
    id: '4',
    roomName: 'The Hamiton',
    roomNumber: 'P105',
    address: '1815 14th st NW, Washington, US',
    price: 1200000,
    area: 12.2,
    image: 'https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2023/05/26/z4205185254463-f63ac42391725d4cfc6a5a391668ee56_1685109765.jpg',
    liked: false,
    owner: 'Nguyen Van Ky',
    tenant: 'Lang Thang',
  },
];

export class RoomService {
  static async getRooms() : Promise<RoomEntity[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(rooms);
      }, timeout);
    })
  }

  static async getRoom(id: string) : Promise<RoomEntity | undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(rooms.find(room => room.id === id));
      }, timeout);
    });
  }
}