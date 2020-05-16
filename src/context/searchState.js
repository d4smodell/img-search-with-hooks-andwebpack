import React, { useReducer } from "react";
import { SearchContext } from "./searchContext";
import { searchReducer } from "./searchReducer";
import Axios from "axios";
import { SEARCH_PHOTOS, SET_LOADING } from "./types";

export const SearchState = ({ children }) => {
  const initialState = {
    images: [],
  };
  const [state = initialState, dispatch] = useReducer(searchReducer);

  const setLoading = () => ({type: SET_LOADING})

  const searchImages = async (value) => {
    setLoading()
    const API_KEY = "16443821-925dcbf9aabe6b8adf2f55117";
    const response = await Axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo`
    );
    dispatch({ type: SEARCH_PHOTOS, images: response.data.hits });
  };

  return (
    <SearchContext.Provider
      value={{
        searchImages,
        images: state.images,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
