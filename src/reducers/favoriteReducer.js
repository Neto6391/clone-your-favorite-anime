import { UPDATE_FAVORITE_ANIME, REMOVE_FAVORITE_ANIME } from "../actions/actionTypes";

const initialState = {
  favorites: [],
  totalFavorites: 0
};
  
export const favoriteReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_FAVORITE_ANIME: {
      return {
        ...state,
        favorites: [...state.favorites, action.favorites],
        totalFavorites: state.favorites.length,
      };
    }
      
    case REMOVE_FAVORITE_ANIME: {
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.id !== action.id),
        totalFavorites: state.favorites.length,
      };
    }
    default:
      return state;
  }
};