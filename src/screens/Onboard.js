import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Onboard(props) {
  const { title = "Yes" } = props;
  const { title2 = "Skip to Dashboard" } = props;
  const navigation = useNavigation();

  const handleYesClick = () => {
    navigation.navigate("Look for a plant");
  };

  const handleSTDClick = () => {
    navigation.navigate("Dashboard")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={require("../../assets/images/onboardingImg.png")}
          style={{ height: 196, width: 263 }}
          alt={"welcome_img"}
        />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.welcome_text}>
          Welcome, fellow <Text style={{ fontWeight: "bold" }}>Spurt!</Text>
        </Text>
        <Text style={styles.welcome_question}>
          Do you need help with growing your first plant?
        </Text>
        <Pressable style={({ pressed }) => [styles.button1,{backgroundColor: pressed ? "darkgrey" : "black",},]}onPress={handleYesClick}>
          {({ pressed }) => (
            <Text style={[styles.button1Text,{color: pressed ? "white" : "white",textDecorationLine: "none",},]}>
              {title}
            </Text>
          )}
        </Pressable>
        <Pressable style={({ pressed }) => [styles.button2,{backgroundColor: pressed ? "transparent" : "transparent",},]}onPress={handleSTDClick}>
          {({ pressed }) => (
            <Text
              style={[styles.button2Text,{color: pressed ? "blue" : "black",},]}>
              {title2}
            </Text>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  image_container: {
    alignItems: "center",
    justifyContent: "start",
    marginTop: 80,
  },
  text_container: {
    alignItems: "center",
    marginTop: 50,
  },
  welcome_text: {
    fontSize: 24,
    fontWeight: "400",
    color: "black",
  },
  welcome_question: {
    fontSize: 14,
    width: 200,
    textAlign: "center",
    paddingTop: 5,
    paddingBottom: 50,
    color: "black",
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
    elevation: 3,
    borderWidth: 1,
    borderColor: "darkgrey",
  },
  button1Text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "regular",
    letterSpacing: 0.25,
  },
  button2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
  },
  button2Text: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "regular",
    textDecorationLine: "underline",
  },
});
