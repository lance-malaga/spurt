import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback} from "react-native";

// COMPONENTS
import NavBar from "../components/NavBar";
import FontText from "../components/FontText";

const PlantAidOnboarding = ({ navigation }) => {
  const handleStart = () => {
    navigation.navigate("PlantAid");
  };

  return (
    <TouchableWithoutFeedback onPress={handleStart}>
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background/background-blur-cool-3.png")}
        style={styles.bg_img}
      />
      <View style={styles.welcome_text}>
        <FontText
          content={"Welcome to"}
          fontSize={24}
          fontWeight={600}
        /> 
      </View>
      <View style={styles.plantaid_text}>
        <FontText
          content={"PlantAid"}
          fontSize={40}
          fontWeight={700}
        />
      </View>
      <Image source={require("../../assets/icons/chuey_animated.gif")} style={styles.mascot_img} />
      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <FontText
          content={"Tap to begin"}
          fontSize={18}
          fontWeight={600}
          style={styles.buttonText}
        />
      </TouchableOpacity>
      <NavBar />
    </View>
  </TouchableWithoutFeedback>  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  button: {
    borderBottomWidth: 3,
    borderBottomColor: "#64A39C",
    paddingBottom: 5,
    borderRadius: 1,
    marginTop: 60,
  },
  bg_img: {
    zIndex: -1,
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  mascot_img: {
    marginTop: -25,
    width:"50%",
    height:"50%",
  },
  plantaid_text: {
    marginTop: -17,
  },
  welcome_text: {
    paddingTop: 100,
  }
});

export default PlantAidOnboarding;
