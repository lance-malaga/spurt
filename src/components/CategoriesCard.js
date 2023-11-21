import React from "react";
import {
  View,
  StyleSheet,
  Text,
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
        <TouchableOpacity onPress={() => navigateToCategory("Vegetable")}>
          <Image source={require("../../assets/images/vegetable-card.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory("Fruit")}>
          <Image source={require("../../assets/images/fruit-card.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigateToCategory("Herbs")}>
          <Image source={require("../../assets/images/herbs-card.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToCategory("Legumes")}>
          <Image source={require("../../assets/images/legumes-card.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigateToCategory("Flowers")}>
          <Image source={require("../../assets/images/flowers-card.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "flex-start",
    width: 375,
  },
  row: {
    flexDirection: "row",
  },
  categoryCardImg: {
    marginLeft: 35,
    marginTop: -30,
  },
  legumesCardImg: {
    marginLeft: 15,
    marginTop: -30,
  },
  herbsCardImg: {
    marginLeft: 15,
    marginTop: -18,
  },
  vegetableCardImg: {
    marginLeft: 24,
    marginTop: -14,
  },
  flowersCardImg: {
    marginTop: -35,
    marginLeft: -20,
  },
  vegetableCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#A2D8D2",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fruitCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFCDE1",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  herbsCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFDF8E",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  legumesCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#A1CFFF",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flowersCard: {
    flex: 2,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#D6EDB9",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    marginTop: 5,
  },
});
