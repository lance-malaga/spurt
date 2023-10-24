import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, FlatList, Dimensions } from "react-native";

// COMPONENTS
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import CustomText from "../components/CustomText";
import SearchBar from "../components/SearchBar";
import CollectionCard from "../components/CollectionCard";

const windowHeight = Dimensions.get('window').height;

export default function YourGarden() {
    const filterList = [ 'All', 'Vegetable', 'Fruites', 'Herbs', 'Legumes', 'Flowers' ];
    const taskList = [
        {
            name: 'Tomato Plant',
            status: 'Your plant is doing great!',
            image: require('../../assets/images/3.0_tomato.png'),
        },
        {
            name: 'Cucumber Plant',
            status: 'Your plant is doing okay',
            image: require('../../assets/images/3.0_cucumber.png'),
        },
        {
            name: 'Squash',
            status: 'Your plant is doing okay',
            image: require('../../assets/images/3.0_squash.png'),
        },
    ];

    return (
        <>
            <SafeAreaView contentContainerStyle={GlobalStyles.androidSafeArea}>
                <View style={styles.container}>
                    <Header />
                    <Image 
                        source={require('../../assets/images/3.0_bg_img.png')}
                        alt="bg-img"
                        style={styles.bg_img}
                    />
                    <ScrollView>
                        <View style={styles.greeting}>
                            <View style={styles.heading_container}>
                                <Text style={[styles.heading_text]}>Hi </Text>
                                <Text style={[styles.heading_text, styles.heading_name]}>Jimmy!</Text>
                            </View>
                            <Text style={styles.text}>How are your plants today?</Text>
                        </View>
                        <View style={styles.your_garden_content}>
                            <SearchBar />
                            <View style={styles.filter_header}>
                                    <CustomText
                                        text={`My Garden`}
                                        color={'white'}
                                        fontSize={18}
                                        fontWeight={700}
                                    />
                                    <Pressable>
                                        <Text style={styles.button}>ADD PLANT</Text>
                                    </Pressable>
                            </View>
                            <ScrollView horizontal>
                                <View style={styles.filter_content}>
                                    {filterList.map((a, index) => {
                                        return (
                                                <Pressable key={index}>
                                                    <CustomText 
                                                        text={a}
                                                        fontSize={16}
                                                        fontWeight={500}
                                                        color={a === 'All' ? 'white' : '#50B7AD'}
                                                    />
                                                </Pressable>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                            <View style={styles.collection_container}>
                                {taskList.map((a, index) => {
                                    return (
                                        <CollectionCard 
                                        key={index}
                                        name={a.name}
                                        status={a.status}
                                        image={a.image}
                                        />
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
        height: windowHeight,
        // backgroundColor: "#FAFAFA",
        // backgroundColor: "blue",
    },
    greeting: {
        marginTop: 10,
        paddingHorizontal: 24,
        gap: 5,
        // backgroundColor: "red",
    },
    heading_container: {
        flexDirection: "row",
        gap: 3,
    },
    heading_text: {
        fontSize: 24,
        color: "white",
    },
    heading_name: {
        fontWeight: 700
    },
    text: {
        fontSize: 16,
        color: "white",
    },

    your_garden_content: {
        paddingBottom: 150,
        paddingHorizontal: 24,
        // width: "100%",
    },
    bg_img: {
        position: "absolute",
        top: 0,
        zIndex: -1,
        width: "100%",
        // marginTop: 30,
    },
    filter_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginTop: 55,
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