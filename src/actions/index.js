import { UPDATE_FAVORITE_ANIME, REMOVE_FAVORITE_ANIME, RESET_FAVORITE_ANIME } from "./actionTypes";

export const updateFavoriteAnime = anime => ({
    type: UPDATE_FAVORITE_ANIME,
    favorites: anime
});

export const removeFavoriteAnime = animeId => {
    return {
        type: REMOVE_FAVORITE_ANIME,
        id: animeId
    };
};

export const resetFavoriteAnime = () => {
    return {
        type: RESET_FAVORITE_ANIME,
    };
}
