import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { colors } from "../custom";

const Stack = createStackNavigator();

const Routes: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          header: () => <NavBar />,
          cardStyle: { backgroundColor: colors.background }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;