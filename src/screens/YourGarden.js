import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// COMPONENTS
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import SearchBar from "../components/SearchBar";
import CollectionCard from "../components/CollectionCard";
import FontText from "../components/FontText";
import { taskList } from "../../data/YourGarden";

const windowHeight = Dimensions.get('window').height;

export default function YourGarden() {
    const filterList = [ 'All', 'Vegetable', 'Fruites', 'Herbs', 'Legumes', 'Flowers' ];

    const navigation = useNavigation();
    const handleSelectPlant = (chosenPlant) => {
		navigation.navigate('PlantDetail', {chosenPlant});
	};

    return (
        <>
            <SafeAreaView contentContainerStyle={GlobalStyles.androidSafeArea}>
                <View style={styles.container}>
                    <Header />
                    <Image 
                        source={require('../../assets/images/background/your-garden-bg.png')}
                        alt="bg-img"
                        style={styles.bg_img}
                    />
                    <ScrollView>
                        <View style={styles.greeting}>
                            <FontText
                                content={"Welcome to your garden"}
                                fontSize={24}
                                fontWeight={700}
                            />
                            <FontText
                                content={"The place to manage all of your plants "}
                                fontSize={12}
                            />
                        </View>
                        <View style={styles.your_garden_content}>
                            <SearchBar />
                            <View style={styles.filter_header}>
                                    <FontText
                                        content={'My Garden'}
                                        fontSize={18}
                                        fontWeight={500}
                                    />
                                    <Pressable>
                                        <Text style={styles.button}>ADD PLANT</Text>
                                    </Pressable>
                            </View>
                            <ScrollView horizontal>
                                <View style={styles.filter_content}>
                                        {filterList.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                >
                                                   <FontText 
                                                        content={data}
                                                        fontSize={16}
                                                        color={'#ADADAD'}
                                                    /> 
                                                </TouchableOpacity>
                                            )
                                        })}
                                </View>
                            </ScrollView>
                            <View style={styles.collection_container}>
                                {taskList.map((data, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => handleSelectPlant(data)}
                                        >
                                            <CollectionCard 
                                                name={data.name}
                                                status={data.waterStatus}
                                                image={data.image}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    </ScrollView>
                    <NavBar />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    greeting: {
        paddingHorizontal: 24,
    },
    
    your_garden_content: {
        paddingTop: 10,
        paddingBottom: 150,
        paddingHorizontal: 24,
    },
    bg_img: {
        position: "absolute",
        objectFit: "cover",
        zIndex: -1,
        width: "100%",
        height: "100%",
    },
    filter_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 40,
    },
    button: {
        borderBottomColor: "white",
        borderBottomWidth: 1,
        color: "white",
    },
    filter_content: {
        flexDirection: "row",
        gap: 25,
    },
    collection_container: {
        marginTop: 40,
        gap: 25,
    },
});