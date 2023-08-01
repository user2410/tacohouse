import { MediaEntity } from "./media.entity";

export type UnitEntity = {
  id: string;
  // propertyId: string;
  name: string;
  area: number;
  floor: number;

  hasBalcony?: boolean;
  nLivingRooms?: number;
  nBedrooms?: number;
  nBathrooms?: number;
  nKitchens?: number;

  media: MediaEntity[];

  type: 'room' | 'house';

  createdAt: Date;
  updatedAt: Date;
}