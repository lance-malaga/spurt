import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SearchCard ({image, name, scientificName, difficulty}) {
  const handleViewPress = (item) => {
    console.log('View ', item);
  };

  const handleAddPress = (item) => {
    console.log('Add ', item);
  };

  return (
    <View style={styles.container}>
        <View style={styles.card}>
            {/* <Image
                source={imageMapping[vegetable.name]}
                style={styles.image}
            /> */}
            <View style={styles.cardDetails}>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={styles.cardScientific}>{scientificName}</Text>
                <Text style={styles.cardLevel}>{difficulty}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleViewPress(name)}
                >
                    <Text style={styles.buttonView}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleAddPress(name)}
                >
                    <Text style={styles.buttonAdd}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    elevation: 3,
    marginTop: 30,
  },
  image: {
    width: 140,
    height: 155,
    zIndex: 1,
    position: "absolute",
    left: -10,
    top: 10,
  },
  cardDetails: {
    flex: 1,
    position: "relative",
    left: 150,
    top: -25,
  },
  cardName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardScientific: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7C7C7C",
  },
  cardLevel: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginTop: 95,
  },
  buttonAdd: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 8,
    color: "#fff",
  },
  buttonView: {
    backgroundColor: "transparent",
    borderRadius: 30,
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderColor: "#000",
    borderWidth: 2,
  },
});