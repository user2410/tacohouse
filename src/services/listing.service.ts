import { timeout } from "./settings";
import { listings, users } from "./repository";
import { ListingEntity } from "@models/listing.entity";
import { CreateListingFormData } from "@screens/listing-app/manage-listings/add-listing/create-listing-details/listing-details.screen";
import { PropertyEntity } from "@models/property.entity";

export default class ListingService {
  static getNewListings(limit: number = 10, offset: number = 0): Promise<ListingEntity[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (limit < 0 || offset < 0) {
          reject({ message: 'invalid parameters' });
        } else {
          listings.sort((a: ListingEntity, b: ListingEntity) => {
            const cmp = a.createdAt.getTime() - b.createdAt.getTime();
            if (cmp < 0) return -1;
            if (cmp > 0) return 1;
            return 0;
          })
          resolve(listings.slice(offset, offset + limit));
        }
      }, timeout);
    })
  }

  static getSingleListing(id: string): Promise<ListingEntity | undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listings.find(item => item.id === id))
      }, timeout)
    })
  }

  static createListing(property: PropertyEntity, listing: CreateListingFormData): Promise<ListingEntity> {
    console.log(property);
    console.log(property.units);

    const newListing: ListingEntity = {
      ...listing,
      id: (listings.length + 1).toString(),
      creatorId: '1',
      propertyId: property.id,
      price: listing.price,
      priority: 1,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      property,
      creator: users[0],
      units: property.units[0],
    }
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        listings.push(newListing);
        resolve(newListing);
      }, timeout);
    })
  }
}