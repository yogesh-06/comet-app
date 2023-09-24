import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import { Reducers } from "./src/redux/reducer/Reducers";
import BottomNavigation from "./src/components/BottomNavigation";

import Cart from "./src/screens/Cart";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Profile from "./src/screens/Profile";
import Details from "./src/screens/Details";
import Splash from "./src/screens/Splash";
// import store from "./src/redux/store";

const store = createStore(Reducers);
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();
export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavigationStateChange = (state) => {
    const currentRouteName = state.routes[state.index].name;
    setIsVisible(currentRouteName === "Login" ? false : true);
  };
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={theme}
        onStateChange={handleNavigationStateChange}
      >
        <StatusBar hidden />

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Splash" component={Splash} />
        </Stack.Navigator>
        {isVisible && <BottomNavigation />}
      </NavigationContainer>
    </Provider>
  );
}
