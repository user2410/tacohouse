import { CreatePropertyFormData } from "@components/form/create-property/create-property";
import { PropertyEntity } from "@models/property.entity";
import { createReducer } from "@reduxjs/toolkit";
import { CreateListingFormData } from "@screens/listing-app/manage-listings/add-listing/create-listing-details/listing-details.screen";
import { saveDraftListing, saveDraftProperty, saveSelectedProperty } from "./action";
import { CreateListingState } from "./state";

const createListingInitialState: CreateListingState = {
  selectedProperty: {} as PropertyEntity,
  draftProperty: {} as CreatePropertyFormData,
  draftListing: {} as CreateListingFormData,
}

export const createListingReducer = createReducer(createListingInitialState, builder => {
  builder
    .addCase(saveSelectedProperty, (state, action) => ({
      ...state,
      selectedProperty: action.payload
    }))
    .addCase(saveDraftProperty, (state, action) => ({
      ...state,
      draftProperty: action.payload
    }))
    .addCase(saveDraftListing, (state, action) => ({
      ...state,
      draftListing: action.payload
    }));
});