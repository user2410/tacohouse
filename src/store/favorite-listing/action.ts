import { ListingEntity } from "@models/listing.entity";
import { createAction } from "@reduxjs/toolkit";

export const addFavListing = createAction('addFavListing', (listing: ListingEntity) => ({payload: listing}));
export const removeFavListing = createAction('removeFavListing', (id: string) => ({payload: id}));
export const isListingFav = createAction('isListingFav', (id: string) => ({payload: id}));