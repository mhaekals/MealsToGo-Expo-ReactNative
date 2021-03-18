import React, { useCallback, useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Divider } from "react-native-paper";

const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  padding-top: ${(props) => props.theme.space[4]};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };
  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="face" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer size="large" position="top">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingItem
          title="Favourites"
          description="view your favourites"
          onPress={() => navigation.navigate("Favourites")}
          left={(props) => (
            <List.Icon {...props} color="black" icon="heart-outline" />
          )}
        />
        <Divider />
        <SettingItem
          title="Logout"
          onPress={onLogout}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
        />
        <Divider />
      </List.Section>
    </SafeArea>
  );
};
