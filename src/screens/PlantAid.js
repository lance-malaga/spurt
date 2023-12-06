import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontText from "../components/FontText";
import axios from "axios";

//icons
import SendIcon from '../../assets/icons/send-icon.svg'

const PlantAid = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatbotInfoVisible, setChatbotInfoVisible] = useState(false);

  const navigation = useNavigation();
  const handleBack = () => {
  navigation.goBack();
  };

  const predefinedMessages = [
    "How often should I water my tomato plant?",
    "What can I do about my wilting sunflower plant that is in the flowering stage?",
  ];

  const toggleChatbotInfo = () => {
    setChatbotInfoVisible(!isChatbotInfoVisible);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) {
      return;
    }
  
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
  
    try {
      const userMessage = {
        role: "user",
        content: inputMessage,
      };
  
      const response = await axios.post(
        apiEndpoint,
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a gardening assistant. You will answer questions in 1-2 sentences and only gardening related questions. If the user’s question is not directly related to the given book, politely reject it.",
            },
            userMessage,
            {
              role: "assistant",
              content:
                "You are a gardening assistant that only answers questions related to gardening.",
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      const botResponse = response.data.choices[0].message.content;
      setMessages([
        ...messages,
        userMessage,
        { role: "bot", content: botResponse, },
      ]);
      setInputMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <View style={styles.container}>
      <View style={styles.header_container}>
        <TouchableOpacity onPress={handleBack}>
            <Image
              source={require("../../assets/icons/backButton.png")}
              style={styles.back_icon}
            />
          </TouchableOpacity>
        <View style={styles.profile_container}>
          <TouchableOpacity onPress={toggleChatbotInfo}>
            <Image
              source={require("../../assets/icons/profileIcon.png")}
              style={styles.profile_icon}
            />
          </TouchableOpacity>
          <FontText
            content={"Chuey"}
            fontSize={12}
            fontWeight={400}
          />
        </View>
      </View>
      <ScrollView
        style={{ ...styles.messageContainer, flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={{
              alignSelf: message.role === "bot" ? "flex-start" : "flex-end",
              margin: 8,
              width: "80%",
              borderRadius: 25,
              backgroundColor: message.role === "bot" ? "#fff" : "#05645A",
              padding: 15,
              elevation: 6,
            }}
          >
            <Text
              style={{
                color: message.role === "bot" ? "#333" : "#fff",
              }}
            >
              {message.content}
            </Text>
            <Text style={{ color: "#aaa", fontSize: 12, marginTop: 5 }}>
              {message.role === "user" ? "You" : "Chuey"} at {message.time}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Predefined Messages */}
      <View style={styles.predefinedMessagesContainer}>
        {predefinedMessages.map((message, index) => (
        <TouchableOpacity
          key={index}
          style={styles.predefinedMessageButton}
          onPress={() => setInputMessage(message)}
        >
      <Text style={styles.predefinedMessageButtonText}>{message}</Text>
    </TouchableOpacity>
  ))}
</View>
      {/* Message Bar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask me about your plants"
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
          multiline={true}
          returnKeyType="none"
          blurOnSubmit={true}
          onSubmitEditing={sendMessage}
          />
        <TouchableOpacity
          onPress={sendMessage}
          style={styles.sendIconContainer}
        >
        <View style={styles.send_icon}>
          <SendIcon/>          
        </View>

        </TouchableOpacity>
      </View>

      {/* Background Blur and Overlay */}
      <Image
        source={require("../../assets/images/background/background-blur-cool-3.png")}
        style={styles.bg_img}
      />
      <Modal
        visible={isChatbotInfoVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.chatbotInfoOverlay}>
          <Image
            source={require("../../assets/images/chuey.png")}
            style={styles.overlayImage}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              marginTop: -180,
            }}
          >
            Chuey
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: "80%",
              color: "white",
              marginTop: 10,
            }}
          >
            Hi I'm Chuey! I was designed to help you with questions and
            information about your plants.
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: "80%",
              color: "white",
              marginTop: 10,
            }}
          >
            You can ask questions about plant care, watering schedules, pest
            control, and more.
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: "80%",
              color: "white",
              marginTop: 10,
            }}
          >
            Feel free to ask any plant-related questions, and I will provide you
            with the most helpful answers.
          </Text>
          <TouchableOpacity onPress={toggleChatbotInfo}>
            <Text
              style={{
                fontSize: 16,
                color: "blue",
                marginTop: 20,
                color: "white",
              }}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    </KeyboardAvoidingView>
  );
};

export default PlantAid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
  },
  body: {
    width: "102%",
    margin: 10,
  },
  bot: {
    fontSize: 16,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    paddingTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 30,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  sendButton: {
    backgroundColor: "black",
    width: "20%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  sendIconContainer: {
    position: "absolute",
    right: 50,
    top: 50,
  },
  send_icon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 10,
    top: -10,
  },
  bg_img: {
    zIndex: -1,
    position: "absolute",
    width: "100%",
  },
  header_container: {
    display: "flex",
    flexDirection: "row",
    gap: 125,
    marginTop: 58,
    marginRight: 150,
  },
  profile_icon: {
    display: "flex",
    justifyContent: "center",
    marginTop: -20,
    flexDirection: "column",
  },
  profile_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  chatbotInfoOverlay: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  overlayImage: {
    marginTop: -50,
    marginBottom: 35,
  },
  predefinedMessagesContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 15,
    gap:2,
  },
  predefinedMessageButton: {
    backgroundColor: "#05645A",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  predefinedMessageButtonText: {
    color: "#fff",
    fontSize: 12,
  },
});

