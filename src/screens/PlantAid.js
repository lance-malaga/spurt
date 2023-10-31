import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image, Modal, } from "react-native";
import React, { useState } from "react";
import axios from "axios";

const PlantAid = () => {
  const [data, setData] = useState([]);
  const apiKey = "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";
  const apiUrl = "https://api.openai.com/v1/engines/text-davinci-002/completions";
  const [textInput, setTextInput] = useState("");
  const [isChatbotInfoVisible, setChatbotInfoVisible] = useState(false);

  const handleSend = async () => {
    try {
      const prompt = textInput;
      const response = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          max_tokens: 1024,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
  
      const text = response.data.choices[0].text;
      setData([...data, { type: "user", text: textInput }, { type: "bot", text: text }]);
      setTextInput("");
    } catch (error) {
      if (error.response.status === 429) {
        console.error("Rate limit exceeded. Retry after a while.");
      } else {
        console.error("Error in handleSend:", error);
      }
    }
  };
  

  const toggleChatbotInfo = () => {
    setChatbotInfoVisible(!isChatbotInfoVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Image
          source={require("../../assets/icons/backButton.png")}
          style={styles.back_icon}
        />
        <View style={styles.profile_container}>
          <TouchableOpacity onPress={toggleChatbotInfo}>
            <Image
              source={require("../../assets/icons/profileIcon.png")}
              style={styles.profile_icon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Chuey</Text>
        </View>
        <Image
          source={require("../../assets/icons/chatIcon.png")}
          style={styles.chat_icon}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", padding: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: item.type === "user" ? "green" : "red",
              }}
            >
              {item.type === "user" ? "Jimmy" : "Bot: "}
            </Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <View style={styles.searchBarContainer}>
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Image source={require("../../assets/icons/camera-icon.png")} />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={textInput}
            onChangeText={(text) => setTextInput(text)}
            placeholder="Ask me about your plants"
          />
          <TouchableOpacity
            onPress={handleSend}
            style={styles.sendIconContainer}
          >
            <Image
              source={require("../../assets/icons/sendIcon.png")}
              style={styles.send_icon}
            />
          </TouchableOpacity>
        </View>
      </View>
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
            <Text style={{fontSize: 20, fontWeight: "bold", color: "white", marginTop: -180,}}>Chuey</Text>
            <Text style={{textAlign: "center", width: "80%", color: "white", marginTop: 10,}}>
            Hi I'm Chuey! I was designed to help you with questions and
            information about your plants.
            </Text>
            <Text style={{textAlign: "center", width: "80%", color: "white", marginTop: 10,}}>
            You can ask questions about plant care, watering schedules, pest
            control, and more.
            </Text>
            <Text style={{textAlign: "center", width: "80%", color: "white", marginTop: 10,}}>
            Feel free to ask any plant-related questions, and I will provide you
            with the most helpful answers.
            </Text>
            <TouchableOpacity onPress={toggleChatbotInfo}>
                <Text style={{fontSize: 16, color: "blue", marginTop: 20, color: "white",}}
                >
                Close
                </Text>
            </TouchableOpacity>
        </View>
        </Modal>
    </View>
  );
};

export default PlantAid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    zIndex: 1,
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
    backgroundColor: "#fff",
    paddingTop: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 8,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: "60%",
    height: 50,
    borderRadius: 50,
    paddingLeft: 15,
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
    right: 30,
  },
  send_icon: {
    width: 20,
    height: 20,
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  overlayImage: {
    marginTop: -50,
    marginBottom: 35,
  }
});
