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
          <Text style={styles.header}>Vegetable</Text>
          <Image
              source={require("../../assets/images/veggieCategoryIcon.png")}
              style={styles.vegetableCardImg}
            />
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreVegetableText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelectVegetable}
            />
          </View>
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
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelectFruit}
            />
          </View>
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
              style={styles.categoryCardImg}
            />
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelectHerb}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.legumesCard}
          onPress={() => navigateToCategory("Legumes")}
        >
          <Text style={styles.header}>Legumes</Text>
          <Image
              source={require("../../assets/images/legumeCategoryIcon.png")}
              style={styles.categoryCardImg}
            />
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreLegumeText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelect}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.flowersCard}
          onPress={() => navigateToCategory("Flowers")}
        >
          <Text style={styles.header}>Flowers</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreFlowersText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelectFlower}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    width: 375,
  },
  row: {
    flexDirection: "row",
  },
  categoryCardImg:{
    marginLeft: 45,
    marginTop:-30,
  },
  vegetableCardImg: {
    marginLeft: 74,
    marginTop: -10,
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
  exploreText: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "300",
    marginTop: -145,
  },
  exploreVegetableText: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "300",
    marginTop: -85,
  },
  exploreLegumeText: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "300",
    marginTop: -130,
  },
  exploreFlowersText: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "300",
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  arrowSelect: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginTop: -130
  },
  arrowSelectHerb: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginTop: -142
  },
  arrowSelectFruit: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginTop: -145
  },
  arrowSelectVegetable: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginTop: -85
  },
  arrowSelectFlower: {
    width: 12,
    height: 12,
    marginLeft: 5,
  },
});
