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
import FontText from '../components/FontText';

export default function AiPrompt() {

  const WEATHER_API_URL ="http://api.weatherapi.com/v1/current.json?key=f3bffa43821a439db9b15409230911&q=vancouver&aqi=yes";
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  const [currentWeather, setCurrentWeather] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");
  const [plantCareTips, setPlantCareTips] = useState("");
  const [isChatbotInfoVisible, setChatbotInfoVisible] = useState(false);

  const toggleChatbotInfo = () => {
    setChatbotInfoVisible(!isChatbotInfoVisible);
  };

  const closeChatbotInfo = () => {
    setChatbotInfoVisible(false);
  };

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
      ? `It is currently ${currentTime}, ${currentWeatherDescription}, and ${currentTemperature}. Give me a 2 sentence weather care warning for gardening under these conditions. Include emojis`
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

  return (
    <View>
      <TouchableOpacity onPress={() => toggleChatbotInfo()}>
        <Image
          source={require("../../assets/icons/chuey-prompt.png")}
          style={styles.chueyPrompt}
        />
      </TouchableOpacity>
      <Modal
        visible={isChatbotInfoVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.weather_alert}>
            <FontText
            content={"Weather Alert: Frosty Weather"}
            fontSize={16}
            fontWeight={700}
            />
          </View>
          <View style={styles.whiteBox}>
            <Image
              source={require("../../assets/icons/chuey-Icon.png")}
              style={styles.chueyIcon}
            />
            <View style={styles.careTip}>
              {plantCareTips !== "" && (
                <FontText
                  content={plantCareTips}
                  color={"#000"}
                  fontSize={14}
                  fontWeight={400}
                  style={styles.promptContainer}
                />
              )}
            </View>
            <View style={styles.blackLine}></View>
            <TouchableOpacity onPress={() => closeChatbotInfo()}>
              <View style={styles.closeButton}>
                <FontText
                content={"Close"}
                fontSize={18}
                fontWeight={400}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6 )",
    color: "#fff",
  },
  closeButton: {
    color: "black",
    marginTop: 10,
    position: "absolute",
    top:110,
    right: 135
  },
  chueyPrompt: {
    position: "absolute",
    bottom: 90,
    left: 70,
  },
  chueyOverlay: {
    position: "absolute",
    top: 330,
    zIndex: 1,
  },
  chueyIcon: {
    width: 120, 
    height: 120,
  },
  whiteBox: {
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#ddd",
    width: 342,
    height: 350,
  },
  weather_alert: {
    position: "absolute",
    zIndex: 1,
    top: 280,
  },
  promptContainer: {
    flexShrink: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    maxWidth: 50,
  },
  careTip: {
    width: 205,
  },
  blackLine: {
    height: 1,
    backgroundColor: "#AFAFAF",
    width: "95%",
    top: 285,
    left: 10,
    position: "absolute"
  },
});
