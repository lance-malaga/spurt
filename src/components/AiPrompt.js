import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import FontText from "../components/FontText";
import ChueyWeather from "../../assets/icons/weather-care-alert.svg";
import { useNavigation } from "@react-navigation/native";


export default function AiPrompt() {
  const WEATHER_API_URL =
    "http://api.weatherapi.com/v1/current.json?key=f3bffa43821a439db9b15409230911&q=vancouver&aqi=yes";
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  const [currentWeather, setCurrentWeather] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");
  const [plantCareTips, setPlantCareTips] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();

  const toggleAiPrompt = () => {
    setShowModal(!showModal);
  };
  const closeAiPrompt = () => {
    setShowModal(false);
  };
  const openPlantAid = () => {
    setShowModal(false);
    navigation.navigate("PlantAidOnboarding");
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(WEATHER_API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCurrentWeather(data.current);
        setCurrentCondition(data.current.condition);
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  const getCurrentTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  const currentTime = getCurrentTime();
  const currentWeatherDescription = `${
    currentCondition.text ? currentCondition.text.toLowerCase() : "unknown"
  } weather`;
  const currentTemperature = `${currentWeather.temp_c}°C`;

  const userMessage = {
    role: "assistant",
    content: currentCondition
      ? `It is currently ${currentTime}, ${currentWeatherDescription}, and ${currentTemperature}. Give me a short sentence weather care warning for gardening under these conditions. Include emojis`
      : "keep the responses short and add some emojis",
  };

  const prompt = async () => {
    try {
      const response = await axios.post(
        apiEndpoint,
        {
          model: "gpt-3.5-turbo",
          messages: [userMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      setPlantCareTips(response.data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    if (currentCondition) {
      prompt();
    }
  }, [currentCondition]);

  const determineWeatherGif = (conditionCode) => {
    switch (conditionCode) {
      case "1000": // clear
        return require("../../assets/icons/weather/snowy_1.gif");
      case "1003": // partly cloudy
        return require("../../assets/icons/weather/high_temp.gif");
      case "1006": // cloudy
        return require("../../assets/icons/weather/windy_1.gif");
      case "1030": // mist
        return require("../../assets/icons/weather/rainy_1.gif");
      // Add more cases based on your weather condition codes
      default:
        return require("../../assets/icons/weather/high_temp.gif");
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => toggleAiPrompt()}>
        <View style={styles.chueyPrompt}>
          <ChueyWeather />
        </View>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide" transparent={true}>
        <View style={styles.modal__overlay}>
          <View style={styles.modal__container}>
            <View style={styles.weather_gif}>
              <Image
                style={{ marginTop: -100 }}
                source={determineWeatherGif(currentCondition.code)}
              />
            </View>
            <FontText
              content={"Weather Alert"}
              fontSize={24}
              fontWeight={500}
              marginTop={15}
            />
            {loading && (
              <FontText
                content={`loading...`}
                fontSize={16}
                marginTop={15}
                textAlign={"center"}
              />
            )}
            {plantCareTips && (
              <View>
                <FontText
                  content={plantCareTips}
                  fontSize={16}
                  marginTop={15}
                  textAlign={"justify"}
                  paddingBottom={30}
                />
                <View style={styles.nav__container}>
                  <FontText
                    content={"Still have questions?"}
                    fontWeight={500}
                    color={"#828282"}
                    textAlign={"center"}
                    paddingBottom={10}
                  />
                  <TouchableOpacity
                    style={styles.nav__plant_aid}
                    onPress={() => openPlantAid()}
                  >
                    <FontText
                      content={"Ask Plant Aid"}
                      fontSize={18}
                      fontWeight={500}
                      color={"#FFFFFF"}
                      textAlign={"center"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => closeAiPrompt()}>
                    <FontText
                      content={"Ok, got it"}
                      fontWeight={500}
                      color={"#828282"}
                      textAlign={"center"}
                      marginTop={20}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  chueyPrompt: {
    position: "absolute",
    bottom: 90,
    left: 270,
  },
  weather_gif: {
    position: "absolute",
    zIndex: 1,
    top: -15,
  },
  modal__overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: 24,
  },
  ai__icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  modal__container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  nav__plant_aid: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#14171F",
    borderRadius: 50,
  },
});
