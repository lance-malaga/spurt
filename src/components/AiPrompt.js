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
  const apiKey = "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";
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
      ? `It is currently ${currentTime}, ${currentWeatherDescription}, and ${currentTemperature}. Give me a short weather care warning for gardening under these conditions.`
      : "Plant care tips? add some emojis",
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
        {plantCareTips !== "" && (
          <FontText
            content={plantCareTips}
            color={"#fff"}
            fontSize={12}
            fontWeight={500}
          />
        )}
        <TouchableOpacity onPress={() => closeChatbotInfo()}>
          <Text style={styles.closeButton}>Close</Text>
        </TouchableOpacity>
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
    backgroundColor: "rgba(0, 0, 0, .9)",
    color: "#fff",
  },
  closeButton: {
    color: "white",
    marginTop: 10,
  },
  chueyPrompt: {
    position: "absolute",
    bottom: 90,
    left: 70,
  },
  plantCareTips: {
    color: "#fff",
  },
});
