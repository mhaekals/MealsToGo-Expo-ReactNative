import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const FavoutiteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavoutiteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavoutiteButton>
  );
};
