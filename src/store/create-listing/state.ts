import { CreatePropertyFormData } from "@components/form/create-property/create-property";
import { PropertyEntity } from "@models/property.entity";
import { CreateListingFormData } from "@screens/listing-app/manage-listings/add-listing/create-listing-details/listing-details.screen";

export interface CreateListingState {
  selectedProperty: PropertyEntity;
  draftProperty: CreatePropertyFormData;
  draftListing: CreateListingFormData;
}