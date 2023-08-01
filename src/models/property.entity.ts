import { AmenityEntity } from "./amenity.entity";
import { FeatureEntity } from "./feature.entity";
import { MediaEntity } from "./media.entity";
import { UnitEntity } from "./unit.entity";

export type PropertyType = 'room' | 'apartment' | 'single_residence' | 'block';

export type PropertyEntity = {
  id: string;
  name: string;
  yearBuilt?: number;
  nFloors?: number;
  area: number;
  orientation?: string;
  address: string;
  district: string;
  city: string;
  location: {
    lat: number;
    lng: number;
  }
  type: PropertyType;
  hasBasement?: boolean;
  hasTerrace?: boolean;
  hasParking?: boolean;
  overview?: string;
  features?: FeatureEntity[];
  amenities?: AmenityEntity[];
  media: MediaEntity[];
  units: UnitEntity[];
  owner: UserEntity;
}

export function propertyTypeToText(type?: PropertyType) {
  switch (type) {
    case 'apartment':
      return 'Apartment';
    case 'block':
      return 'Block';
    case 'room':
      return 'Room';
    case 'single_residence':
      return 'Single Residence';
  }
}