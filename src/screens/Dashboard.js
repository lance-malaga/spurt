import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// COMPONENTS
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import Weather from "../components/Weather";
import NavBar from "../components/NavBar";
import DashboardTasks from "../components/DashboardTasks";
import PlantAlert from "../components/PlantAlert";
import UpcomingEvents from "../components/UpcomingEvents";

const windowHeight = Dimensions.get('window').height;
// console.log(windowHeight);

export default function Dashboard () {
    return(
        <SafeAreaView contentContainerStyle={GlobalStyles.androidSafeArea}>
            <View style={styles.container}>
                <Header />
                <ScrollView>
                    <Weather />
                    <View style={styles.dashboard_content}>
                        <DashboardTasks />
                        <PlantAlert />
                        <UpcomingEvents />
                    </View>
                </ScrollView>
                <NavBar />
                <Image 
                    source={require('../../assets/images/2.0_background.png')}
                    alt="bg-img"
                    style={styles.bg_img}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        alignItems: "center",
        backgroundColor: "#FAFAFA",
    },
    dashboard_content: {
        paddingBottom: 150,
        paddingHorizontal: 24,
        width: "100%",
    },
    bg_img: {
        position: "absolute",
        top: 0,
        zIndex: -1,
        width: "100%",
    },
});
  