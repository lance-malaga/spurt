import React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import CategoriesCard from "../components/CategoriesCard";

export default function Search() {
  const navigation = useNavigation();

  const handleGalleryPress = () => {
  };

  const handleSearch = (query) => {
    if (query.toLowerCase() === "vegetables") {
      navigation.navigate("CategoryResults", { category: "Vegetables" });
    } else {
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <Pressable style={styles.button} onPress={() => navigation.navigate("TakePic")}>
            <Image source={require("../../assets/icons/camera-icon.png")} />
            <Text style={styles.buttonText}>Camera</Text>
          </Pressable>
        </View>
        <View style={styles.buttonGroup}>
          <Pressable style={styles.button2} onPress={handleGalleryPress}>
            <Image source={require("../../assets/icons/gallery.png")} />
            <Text style={styles.buttonText2}>Gallery</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.picksContainer}>
        <Text style={styles.picksHeader}>TOP PICKS FOR SUMMER</Text>
        <Text style={styles.picksDesc}>
          Check out the plants ready this summer
        </Text>
      </View>
      <View style={styles.cardContainer}>
        <Card />
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesHeader}>CATEGORIES</Text>
        <Text style={styles.categoriesDesc}>
          Care guides and tips for every plant
        </Text>
      </View>
      <View style={styles.categoriesCardContainer}>
        <CategoriesCard />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  cardContainer: {
    paddingLeft: 20,
  },
  searchContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  categoriesCardContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 16,
    paddingBottom: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonGroup: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  button2: {
    backgroundColor: "#fff",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    marginLeft: 10,
  },
  buttonText2: {
    color: "#000",
    textAlign: "center",
    marginLeft: 10,
  },
  picksContainer: {
    alignItems: "flex-start",
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
  picksHeader: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  picksDesc: {
    fontSize: 12,
    color: "#000",
    marginTop: -5,
  },
  categoriesHeader: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    paddingBottom: 5,
  },
  categoriesDesc: {
    fontSize: 12,
    color: "#000",
    marginTop: -5,
  },
  categoriesContainer: {
    paddingLeft: 30,
    marginTop: 10,
  },
});