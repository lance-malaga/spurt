import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useSearchYourGarden from "../../utils/searchYourGarden";

// COMPONENTS
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import GlobalStyles from "../components/GlobalStyles";
import SearchBar from "../components/SearchBar";
import CollectionCard from "../components/CollectionCard";
import FontText from "../components/FontText";

export default function YourGarden() {
    const filterList = [ 'All', 'Vegetables', 'Fruits', 'Herbs', 'Legumes', 'Flowers' ];
    const {
        searchInput, 
        setSearchInput, 
        selectedCategory, 
        setSelectedCategory, 
        filteredResults, 
        filterCollection,
        taskList
    } = useSearchYourGarden();
    const navigation = useNavigation();

    const handleSelectPlant = (chosenPlant) => {
        navigation.navigate('PlantDetail', {chosenPlant});
	};
    
    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    }
    
    useEffect(() => {
        filterCollection();
    }, [searchInput, selectedCategory, taskList]);

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
                            <SearchBar 
                                searchInput={searchInput} 
                                setSearchInput={setSearchInput}
                            />
                            <View style={styles.filter_header}>
                                    <FontText
                                        content={'My Garden'}
                                        fontSize={18}
                                        fontWeight={500}
                                    />
                                    <Pressable style={styles.add_plant__btn}>
                                        <FontText
                                            content={'ADD PLANT'}
                                            fontSize={12}
                                            fontWeight={500}
                                        />
                                    </Pressable>
                            </View>
                            <ScrollView horizontal>
                                <View style={styles.filter_content}>
                                        {filterList.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => handleCategoryPress(data)}
                                                >
                                                   <FontText 
                                                        content={data}
                                                        fontSize={16}
                                                        color={selectedCategory === data ? '#14171F' : '#ADADAD'}
                                                        fontWeight={selectedCategory === data ? 500 : 400}
                                                    /> 
                                                </TouchableOpacity>
                                            )
                                        })}
                                </View>
                            </ScrollView>
                            <View style={styles.collection_container}>
                                {filteredResults != '' ? (
                                    <>
                                        {filteredResults.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    key={index}
                                                    onPress={() => handleSelectPlant(data)}
                                                >
                                                    <CollectionCard 
                                                        name={data.name}
                                                        status={data.waterStatus}
                                                        image={data.image[0]}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </>
                                ) : (
                                    <FontText 
                                        content={'No Results Found'}
                                        textAlign={'center'}
                                        color={'#ADADAD'}
                                    />
                                )}
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
    add_plant__btn: {
        borderBottomWidth: 1,
    },
    filter_content: {
        flexDirection: "row",
        paddingRight: 24,
        gap: 25,
    },
    collection_container: {
        marginTop: 40,
        gap: 25,
    },
});