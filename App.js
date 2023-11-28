import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Onboard from "./src/screens/Onboard";
import Search from "./src/screens/Search";
import Dashboard from "./src/screens/Dashboard";
import FindCommunity from "./src/screens/FindCommunity";
import JoinedCommunity from "./src/screens/JoinedCommunity";
import YourGarden from "./src/screens/YourGarden";
import Card from "./src/components/Card";
import CategoriesCard from "./src/components/CategoriesCard";
import CategoryResults from "./src/components/CategoryResults";
import PlantAid from "./src/screens/PlantAid";
import PlantAidOnboarding from "./src/screens/PlantAidOnboarding";
import TakePic from "./src/components/TakePic"
import SearchPlantDetail from "./src/components/SearchPlantDetail";
import PlantDetail from "./src/screens/PlantDetail";

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
          name="Search"
          component={Search}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Card"
          component={Card}
          options={{
            title: "Card",
          }}
        />
        <Stack.Screen
          name="SearchPlantDetail"
          component={SearchPlantDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CategoriesCard"
          component={CategoriesCard}
          options={{
            title: "Categories",
          }}
        />
        <Stack.Screen
          name="CategoryResults"
          component={CategoryResults}
          options={({ route }) => ({
            title: route.params.category || "Category Results",
          })}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FindCommunity"
          component={FindCommunity}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
        <Stack.Screen
          name="JoinedCommunity"
          component={JoinedCommunity}
          options={{
            headerShown: false,
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "transparent",
            },
          }}
        />
        <Stack.Screen
          name="YourGarden"
          component={YourGarden}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlantDetail"
          component={PlantDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlantAidOnboarding"
          component={PlantAidOnboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TakePic"
          component={TakePic}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PlantAid"
          component={PlantAid}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
