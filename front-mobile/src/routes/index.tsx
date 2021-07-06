import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Movies from "../pages/Movies";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import Login from "../pages/Login";

const stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode='none'>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Movies" component={Movies} />
        <stack.Screen name="MovieDetails" component={MovieDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;