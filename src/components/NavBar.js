import React from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

//icons
// import homeBlack from '../../assets/icons/home-black.svg'
// import homeBlue from '../../assets/icons/home-blue.svg'
// import myGardenBlack from '../../icons/my-garden-black.svg'
// import myGardenBlue from '../../icons/my-garden-blue.svg'
// import plantAidBlack from '../../icons/plantaid-black.svg'
// import plantAidBlue from '../../icons/plantaid-blue.svg'
// import communityBlack from '../../icons/community-black.svg'
// import communityBlue from '../../icons/community-blue.svg'



export default function NavBar() {
    const route = useRoute();
    const navigation = useNavigation();

    const navList = [
        {
            path: 'Dashboard',
            image: require("../../assets/icons/nav_home_black.png"),
            image2: require("../../assets/icons/nav_home_blue.png"),
        },
        {
            path: 'YourGarden',
            image: require("../../assets/icons/nav_garden_black.png"),
            image2: require("../../assets/icons/nav_garden_blue.png"),
        },
        {
            path: 'PlantAidOnboarding',
            image: require("../../assets/icons/nav_plantaid_black.png"),
            image2: require("../../assets/icons/nav_plantaid_blue.png"),
        },
        {
            path: 'FindCommunity',
            image: require("../../assets/icons/nav_community_black.png"),
            image2: require("../../assets/icons/nav_community_blue.png"),
        },
    ];

    return (
        <View style={styles.container}>
            {navList.map((data, index) => {
                return (
                    <Pressable 
                        style={[styles.image, {backgroundColor: route.name == data.path ? "rgba(255,255,255,0)" : "transparent"}]}
                        key={index} 
                        onPress={() => navigation.navigate(data.path)}
                    >
                        <Image 
                            source={route.name == data.path ? data.image2 : data.image} 
                        />
                    </Pressable>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        gap: 35,
        zIndex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 10,
    },
});
