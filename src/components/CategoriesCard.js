import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

export default function CategoriesCard() {
  const navigation = useNavigation(); 
  const navigateToCategory = (categoryName) => {
    navigation.navigate("CategoryResults", { category: categoryName });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.vegetableCard}
          onPress={() => navigateToCategory("Vegetable")}
        >
          <Text style={styles.header}>Veggies</Text>
          <Image
              source={require("../../assets/images/veggieCategoryIcon.png")}
              style={styles.vegetableCardImg}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.fruitCard}
          onPress={() => navigateToCategory("Fruit")}
        >
          <Text style={styles.header}>Fruit</Text>
          <Image
              source={require("../../assets/images/fruitCategoryIcon.png")}
              style={styles.categoryCardImg}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.herbsCard}
          onPress={() => navigateToCategory("Herbs")}
        >
          <Text style={styles.header}>Herbs</Text>
          <Image
              source={require("../../assets/images/herbsCategoryIcon.png")}
              style={styles.herbsCardImg}
            />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.legumesCard}
          onPress={() => navigateToCategory("Legumes")}
        >
          <Text style={styles.header}>Legumes</Text>
          <Image
              source={require("../../assets/images/legumeCategoryIcon.png")}
              style={styles.legumesCardImg}
            />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.flowersCard}
          onPress={() => navigateToCategory("Flowers")}
        >
          <Text style={styles.header}>Flowers</Text>
          <Image
              source={require("../../assets/images/flowerCardImg.png")}
              style={styles.flowersCardImg}
            />
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
  categoryCardImg:{
    marginLeft: 35,
    marginTop:-30,
  },
  legumesCardImg:{
    marginLeft: 15,
    marginTop:-30,
  },
  herbsCardImg:{
    marginLeft: 15,
    marginTop:-18,
  },
  vegetableCardImg: {
    marginLeft: 24,
    marginTop: -14,
  },
  flowersCardImg:{
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
