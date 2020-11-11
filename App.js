import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./src/screens/Home.component";
// import CategoryScreen from "./src/screens/categories/Category.component";
// import RecipeList from "./src/screens/recipeList/RecipeList.component";
// import RecipeScreen from "./src/screens/recipe/Recipe.component";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/*Initial route (main route that gets loaded first)*/}
      <Drawer.Navigator initialRouteName="Home" headerMode="none">
        {/* Routes for react-native (open navigator to change routes)*/}
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/*<Drawer.Screen name="Categories" component={CategoryScreen} />
        <Drawer.Screen name="Recipe List" component={RecipeList} />
  <Drawer.Screen name="Recipe Screen" component={RecipeScreen} />*/}
      </Drawer.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js ltso start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
