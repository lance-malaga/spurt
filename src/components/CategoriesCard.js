import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesCard() {
  const navigation = useNavigation();
  const navigateToCategory = (categoryName) => {
    navigation.navigate("CategoryResults", { category: categoryName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigateToCategory("Vegetable")} >
          <Image 
            source={require("../../assets/images/categories/vegetables-card.png")} 
            style={styles.categories_card} 
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory("Fruit")}  >
          <Image 
            source={require("../../assets/images/categories/fruits-card.png")} 
            style={styles.categories_card}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigateToCategory("Herbs")}>
          <Image 
            source={require("../../assets/images/categories/herbs-card.png")} 
            style={styles.categories_card}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory("Legumes")}>
          <Image 
            source={require("../../assets/images/categories/legumes-card.png")} 
            style={styles.categories_card}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigateToCategory("Flowers")}>
          <Image 
            source={require("../../assets/images/categories/flowers-card.png")} 
            style={styles.categories_card__flower}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingBottom: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: 'center',
    gap: 20
  },
  categories_card: {
    height: 120,
    width: 160,
    objectFit: 'fill',
  },
  categories_card__flower: {
    height: 140,
    width: 340,
    objectFit: 'fill',
  }
});
