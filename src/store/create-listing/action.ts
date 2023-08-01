import { CreatePropertyFormData } from "@components/form/create-property/create-property";
import { PropertyEntity } from "@models/property.entity";
import { createAction } from "@reduxjs/toolkit";
import { CreateListingFormData } from "@screens/listing-app/manage-listings/add-listing/create-listing-details/listing-details.screen";

export const saveSelectedProperty = createAction('createListing/saveSelectedProperty', (property: PropertyEntity) => ({payload: property}));
export const saveDraftProperty = createAction('createListing/saveDraftProperty', (property: CreatePropertyFormData) => ({payload: property}));
export const saveDraftListing = createAction('createListing/saveDraftListing', (listing: CreateListingFormData) => ({payload: listing}));