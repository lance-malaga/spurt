import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// COMPONENTS
import NavBar from "../components/NavBar";

const PlantAidOnboarding = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("PlantAid");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background/background-blur-cool-3.png")}
        style={styles.bg_img}
      />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title2}>
        Plant<Text style={{ color: "#9FD32F" }}>Ai</Text>d
      </Text>
      <Image source={require("../../assets/images/mascot.png")} style={styles.mascot_img} />
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>Tap to begin</Text>
      </TouchableOpacity>
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
    zIndex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title2: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "400",
    color: "black",
  },
  button: {
    borderBottomWidth: 3,
    borderBottomColor: "#64A39C",
    paddingBottom: 5,
    borderRadius: 1,
    marginTop: 100,
  },
  bg_img: {
    zIndex: -1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  mascot_img: {
    marginTop: 25
  }
});

export default PlantAidOnboarding;
