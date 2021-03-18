import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import styled from "styled-components/native";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const FavContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <FavContainer>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </FavContainer>
  ) : (
    <NoFavouritesArea>
      <Text>No Favourites</Text>
    </NoFavouritesArea>
  );
};
