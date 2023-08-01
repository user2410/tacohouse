import { PropertyEntity, PropertyType } from "@models/property.entity";
import { properties, units, users } from "./repository";
import { timeout } from "./settings";
import { CreatePropertyFormData } from "@components/form/create-property/create-property";
import { UnitEntity } from "@models/unit.entity";

export class PropertyService {
  static getProperties() {
    return new Promise<PropertyEntity[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(properties);
      }, timeout);
    })
  }

  static getPropertyById(id: string) {
    return new Promise<PropertyEntity | undefined>((resolve, reject) => {
      setTimeout(() => {
        resolve(properties.find((property) => property.id === id));
      }, timeout);
    });
  }

  static getRooms() : Promise<PropertyEntity[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(properties.filter((property) => property.type === 'room'));
      }, timeout);
    });
  }

  static createProperty(property: CreatePropertyFormData, propertyName?: string) : Promise<PropertyEntity> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newUnit: UnitEntity = {
          id: properties.length.toString(),
          name: propertyName ? propertyName : `Unit ${units.length}`,
          area: property.area,
          floor: 1,
          media: [],
          type: property.type === 'room' ? 'room' : 'house',
          nBathrooms: property.nBathRooms,
          nBedrooms: property.nBedRooms,
          nKitchens: property.nKitchens,
          createdAt: new Date(),
          updatedAt: new Date(),
        }

        const newProperty: PropertyEntity = {
          ...property,
          id: properties.length.toString(),
          name: propertyName ? propertyName : `Property ${properties.length}`,
          location: {
            lat: property.coordinate.latitude,
            lng: property.coordinate.longitude
          },
          type: property.type as PropertyType,
          media: [
            ...property.photos,
            ...property.videos,
          ],
          owner: users[1],
          units: [newUnit],
        }
        properties.push(newProperty);
        resolve(newProperty);
      }, timeout);
    });
  }
}