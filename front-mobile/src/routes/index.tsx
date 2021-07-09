import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { colors } from "../custom";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";

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
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;