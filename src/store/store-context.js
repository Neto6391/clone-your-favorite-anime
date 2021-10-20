import { createContext, useEffect, useState } from 'react';

//create a new componet
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteanime) => {},
    removeFavorite: (animeId) => {},
    itemIsFavorite: (animeId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteanime) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteanime);
        });
    }

    

    function removeFavoriteHandler(animeId) {
        
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(anime => anime.id !== animeId);
        });
    }

    function itemIsFavoriteHandler(animeId) {
        return userFavorites.some(anime => anime.id === animeId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;