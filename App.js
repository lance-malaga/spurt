import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Link } from 'expo-router';

import Onboard from "./src/screens/Onboard";
import Search from "./src/screens/Search";
import Dashboard from "./src/screens/Dashboard";
import Community from "./src/screens/Community";
import YourGarden from "./src/screens/YourGarden";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">
        <Stack.Screen
          name="Onboard"
          component={Onboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Look for a plant"
          component={Search}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "transparent",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Community"
          component={Community}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "transparent",
            }
          }}
        />
        <Stack.Screen 
        name="YourGarden"
        component={YourGarden}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
