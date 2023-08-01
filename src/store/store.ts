import { configureStore } from "@reduxjs/toolkit";
import { favListingReducer } from "./favorite-listing/reducer";
import { createListingReducer } from "./create-listing/reducer";
import { FavoriteListingsState } from "./favorite-listing/state";
import { CreateListingState } from "./create-listing/state";

export interface AppState {
  favListing: FavoriteListingsState;
  createListing: CreateListingState;
}
export const reducers = {
  favListing: favListingReducer,
  createListing: createListingReducer,
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [
        'createListing/saveSelectedProperty', 
        'createListing/saveDraftProperty'
      ],
    },
  }),
  reducer: reducers
})