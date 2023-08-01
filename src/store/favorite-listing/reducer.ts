import { createReducer } from "@reduxjs/toolkit";
import { FavoriteListingsState } from "./state";
import { addFavListing, isListingFav, removeFavListing } from "./action";

const favListingIntialState : FavoriteListingsState = {
  favs: []
}

export const favListingReducer = createReducer(favListingIntialState, builder => {
  builder
    .addCase(addFavListing, (state, action) => {favs: state.favs.concat(action.payload)})
    .addCase(removeFavListing, (state, action) => { favs: state.favs.filter(item => item.id !== action.payload)})
    .addCase(isListingFav, (state, action) => { favs: state.favs.find(item => item.id !== action.payload)})
})