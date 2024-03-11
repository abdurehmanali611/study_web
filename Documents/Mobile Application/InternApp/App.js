import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Front_Page/Login";
import Home from "./Front_Page/Home";

const navigation = createStackNavigator()

const App = () => {

  return <NavigationContainer>
    <navigation.Navigator initialRouteName="Login">
      <navigation.Screen name="Login" component={Login} options={{title: "Vehicles"}}/>
      <navigation.Screen name="Home" component={Home} options={{title: "Vehicles"}}/>
    </navigation.Navigator>
  </NavigationContainer>
}

export default App