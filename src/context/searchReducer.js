import { SEARCH_PHOTOS, SET_LOADING } from "./types";

export const searchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_PHOTOS:
      return {
        ...state,
        images: action.images,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
