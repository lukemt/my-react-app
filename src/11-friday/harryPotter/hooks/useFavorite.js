import { useState } from "react";
export default function useFavorite() {
  // Favorite
  const [favorites, setFavorite] = useState(() => {
    // Set default value
    if (localStorage.getItem("favoritesLocalStorage")) {
      return JSON.parse(localStorage.getItem("favoritesLocalStorage"));
    } else {
      return [];
    }
  });
  function handleFavoriteButtonClick(characterName) {
    const isFavorite = favorites.includes(characterName);

    // Option 1
    let newFavorites;
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter((item) => {
        if (item === characterName) {
          return false;
        } else {
          return true;
        }
      });
    } else {
      // Add to favorites
      newFavorites = favorites.concat(characterName);
    }

    // Option 2
    // const newFavorites = isFavorite
    //   ? favorites.filter((item) => {
    //       if (item === characterName) {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     })
    //   : favorites.concat(characterName);

    // Option X: Other solutions are possible

    setFavorite(newFavorites);
    localStorage.setItem("favoritesLocalStorage", JSON.stringify(newFavorites));
  }
  return { favorites, handleFavoriteButtonClick };
}
