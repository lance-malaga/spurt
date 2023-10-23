import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import SearchResults from "../../data/SearchResults.json";

const CategoryResults = () => {
  const { vegetables } = SearchResults;

  const handleViewPress = (vegetable) => {
    console.log(`View: ${vegetable.name}`);
  };

  const handleAddPress = (vegetable) => {
    console.log(`Add: ${vegetable.name}`);
  };

  const imageMapping = {
    "Lettuce": require("../../assets/images/big-lettuce-png.png"),
    "Spinach": require("../../assets/images/big-spinach-img.png"),
    "Summer Squash": require("../../assets/images/big-squash-img.png"),
  };

  return (
    <View>
      <Image source={require('../../assets/images/background-blur-cool-1.png')} style={styles.bgImg} />
      <ScrollView>
        <Text style={styles.resultHeader}>Results (3)</Text>
        <View style={styles.container}>
        {vegetables.map((vegetable, index) => (
          <View key={index} style={styles.card}>
          <Image
            source={imageMapping[vegetable.name]}
            style={styles.image}
          />
            <View style={styles.cardDetails}>
              <Text style={styles.cardName}>{vegetable.name}</Text>
              <Text style={styles.cardScientific}>{vegetable.scientificName}</Text>
              <Text style={styles.cardLevel}>{vegetable.difficultyLevel}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleViewPress(vegetable)}
              >
                <Text style={styles.buttonView}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleAddPress(vegetable)}
              >
                <Text style={styles.buttonAdd}>Add</Text>
              </TouchableOpacity>
            </View>
      </View>
))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignItems: "center",
  },
  bgImg: {
    position: "absolute",
    width: "100%",
  },
  resultHeader:{
    fontSize: 16,
    fontWeight:"500",
    marginLeft: 20,
    marginTop:20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 160,
    width: 380,
    elevation:3,
    marginTop: 26,
  },
  image: {
    width: 120,
    height: 150,
    zIndex: 1,
    position:"absolute",
  },
  cardDetails: {
    flex: 1,
    paddingLeft: 120,
    marginBottom: 50, 
  },
  cardName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardScientific:{
    fontSize: 12,
    fontWeight: "500",
    color:"#7C7C7C"
  },
  cardLevel: {
    fontSize: 10,
  },
  cardText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginTop: 95
  },
  buttonAdd: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
    color:"#fff"
  },
  buttonView:{
    backgroundColor: "transparent",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#000",
    borderWidth: 2
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default CategoryResults;