import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

// COMPONENTS
import FontText from './FontText';

// SVG
import ChueyIcon from "../../assets/images/prompt/optimal-care-alert.svg"
import ChueyImg from "../../assets/images/prompt/optimal-care-img.svg"

export default function AiPromptSuggestions({optimalConditions, name}) {
    const apiEndpoint = "https://api.openai.com/v1/chat/completions";
    const apiKey = process.env.EXPO_PUBLIC_API_KEY;
    const navigation = useNavigation();

    const [plantSuggestions, setPlantSuggestions] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggleAiPrompt = () => {
        setShowModal(!showModal);
    };
    const closeAiPrompt = () => {
        setShowModal(false);
    };
    const openPlantAid = () => {
        setShowModal(false);
        navigation.navigate('PlantAidOnboarding');
	};

    const userMessage = {
        role: "assistant",
        content: optimalConditions
        ? `A ${name} has optimal conditions of having
            ${optimalConditions[0].type} of ${optimalConditions[0].condition},
            ${optimalConditions[1].type} of ${optimalConditions[1].condition},
            ${optimalConditions[2].type} of ${optimalConditions[2].condition}, and
            ${optimalConditions[3].type} of ${optimalConditions[3].condition}. Based on these conditions, share ideas for actual physical spaces where my plant would thrive, considering factors like sunlight, soil type, and pH. Provide concise recommendations for locations, such as balconies, backyards, or specific gardening setups. Respond in two to three sentences and include emojis.`
        : "keep the responses short and add some emojis",
    };

    const prompt = async () => {
        try {
            setLoading(true)
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
            setPlantSuggestions(response.data.choices[0].message.content);
        } catch (error) {
            console.error("Error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        prompt();
    }, []);

    return (
        <View>
            <TouchableOpacity 
                onPress={() => toggleAiPrompt()}
                style={styles.ai__icon}
            >
                <ChueyIcon />
            </TouchableOpacity>
            <Modal
                visible={showModal}
                animationType="slide"
                transparent={true}
            >
                <View style={styles.modal__overlay}>
                    <View style={styles.modal__container}>
                        <ChueyImg
                            style={{marginTop:-100}}
                        />
                        <FontText
                            content={"Optimal Growth"}
                            fontSize={24}
                            fontWeight={500}
                        />
                        {loading && 
                            <FontText
                                content={`loading...`}
                                fontSize={16}
                                marginTop={15}
                                textAlign={'center'}
                            />
                        }
                        {plantSuggestions && (
                            <View>
                                <FontText
                                    content={plantSuggestions}
                                    fontSize={16}
                                    marginTop={15}
                                    textAlign={'justify'}
                                    paddingBottom={30}
                                />
                                <View style={styles.nav__container}>
                                    <FontText
                                        content={'Still have questions?'}
                                        fontWeight={500}
                                        color={'#828282'}
                                        textAlign={'center'}
                                        paddingBottom={10}
                                    />
                                    <TouchableOpacity 
                                        style={styles.nav__plant_aid} 
                                        onPress={() => openPlantAid()}
                                    >
                                        <FontText
                                            content={'Ask Plant Aid'}
                                            fontSize={18}
                                            fontWeight={500}
                                            color={'#FFFFFF'}
                                            textAlign={'center'}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => closeAiPrompt()}>
                                        <FontText
                                            content={'Ok, got it'}
                                            fontWeight={500}
                                            color={'#828282'}
                                            textAlign={'center'}
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
        width: '100%',
        paddingVertical: 16,
        backgroundColor: '#14171F',
        borderRadius: 50,
    },
});
