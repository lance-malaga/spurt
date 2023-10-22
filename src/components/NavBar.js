import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
    const [icons, setIcons] = useState();
    const [active, setIsActive] = useState();
    const navigation = useNavigation();

    const navList = [
        {
            name: 'Dashboard',
            image_active: require('../../assets/icons/nav_home.png'),
            image_inactive: require('../../assets/icons/nav_wh_home.png'),
            styles: styles.homeIcon
        },
        {
            name: 'YourGarden',
            image_active: require('../../assets/icons/nav_your_garden.png'),
            image_inactive: require('../../assets/icons/nav_wh_your_garden.png'),
            styles: styles.gardenIcon
        },
        {
            name: 'Camera',
            image_active: require('../../assets/icons/nav_camera.png'),
            styles: styles.cameraIcon
        },
        {
            name: 'PlantAid',
            image_active: require('../../assets/icons/nav_plant_aid.png'),
            image_inactive: require('../../assets/icons/nav_wh_plant_aid.png'),
            styles: styles.plantAidIcon
        },
        {
            name: 'Community',
            image_active: require('../../assets/icons/nav_comm.png'),
            image_inactive: require('../../assets/icons/nav_wh_comm.png'),
            styles: styles.commIcon
        },
    ];

    const handleNavigate = (screen) => {
        if (screen === "Dashboard") {
            navigation.navigate("Dashboard");
        } else if (screen === "YourGarden") {
            navigation.navigate("YourGarden");
        } 
        // else if (screen === "PlantAid") {
        //     navigation.navigate("PlantAid");
        // } else if (screen === "Community") {
        //     navigation.navigate("Community");
        // }
    }

    return (
        <View style={styles.container}>
            {navList.map((a, index) => {
                return (
                    <Pressable onPress={() => handleNavigate(a.name)}  key={index} style={a.styles}>
                        <Image source={a.image_active} alt={a.name}/>
                    </Pressable>
                )
            })}
            <Image 
                source={require('../../assets/images/navbar_bg.png')}
                alt="bg-img"
                style={styles.bg_img}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        // flex: 1,
        // justifyContent: "flex-end",
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        gap: 25,
        zIndex: 1,
    },
    cameraIcon: {
        top: -40,
    },
    bg_img: {
        position: "absolute",
        width: "100%",
        zIndex: -1,
    },
});