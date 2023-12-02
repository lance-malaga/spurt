import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontText from "../components/FontText";

import OnboardingImg from "../../assets/images/onbooarding-vector.svg"

export default function Onboard(props) {
  const { title = "Get Started" } = props;
  const { title2 = "Skip to Dashboard" } = props;
  const navigation = useNavigation();

  const handleYesClick = () => {
    navigation.navigate("Search");
  };

  const handleSTDClick = () => {
    navigation.navigate("Dashboard")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.image_container}>
        <OnboardingImg
          width={'100%'}
          style={styles.onboardingImage}
        />
      </View>
      <View style={styles.text_container}>
        <FontText
        content={"SPURT"}
        fontSize={16}
        fontWeight={400}
        />
        <View style={styles.slogan_text}>
          <FontText
            content={"Where We Make Gardening Easy."}
            fontSize={28}
            fontWeight={700}
            textAlign={'center'}
          />
        </View>
        <Pressable style={({ pressed }) => [styles.button1,{backgroundColor: pressed ? "darkgrey" : "black",},]}onPress={handleYesClick}>
          {({ pressed }) => (
            <Text style={[styles.button1Text,{color: pressed ? "white" : "white",textDecorationLine: "none",},]}>
              <FontText
                content={title}
                fontSize={18}
                fontWeight={500}
              />
            </Text>
          )}
        </Pressable>
        <Pressable style={({ pressed }) => [styles.button2,{backgroundColor: pressed ? "transparent" : "transparent",},]}onPress={handleSTDClick}>
          {({ pressed }) => (
            <Text
              style={[styles.button2Text,{color: pressed ? "blue" : "black",},]}>
              <FontText
                content={title2}
                fontSize={14}
                fontWeight={400}
              />
            </Text>
          )}
        </Pressable>
      </View>
      
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff"
  },
  slogan_text: {
    width: 250,
    paddingTop: 25,
    paddingBottom: 30,
    alignContent: "center"
  },
  onboardingImage: {
    width: '100%',
    backgroundColor: '#F4F3D9',
  },
  slogan_text2: {
    marginTop: -40,
    paddingRight: 0,
    paddingBottom: 35,
  },
  text_container: {
    alignItems: "center",
    marginTop: 45,
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    paddingHorizontal: 65,
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
