import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";

import Loginscreen from "./screens/LoginScreen";
import Loadingzscreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import * as firebase from "firebase";
import { firebaseConfig} from "./config";

if(!firebase.apps.length) {
  firebase.initialiazeApp(firebaseConfig);
}else{
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

// I don't know hot to install the react-navigation dependency.