import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      headerMode="screen"
      screenOptions={{
        CardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ header: () => null }}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingStack.Screen name="Camera" component={CameraScreen} />
    </SettingStack.Navigator>
  );
};
