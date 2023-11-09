
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView } from "react-native";

// Components
import CurrentWeather from "./CurrentWeather";
import CurrentDate from "./CurrentDate";

export default function Weather() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.dayInfo}>
                    <CurrentDate />
                </View>
                <Image
                    source={require("../../assets/images/2.0_sun.png")}
                    width={105}
                    height={105}
                    alt="sun"
                />
                <View style={styles.weatherInfo}>
                    <CurrentWeather />
                </View>
            </View>
            <View style={styles.greeting}>
                <View style={styles.heading_container}>
                    <Text style={[styles.heading_text]}>Hey, </Text>
                    <Text style={[styles.heading_text, styles.heading_name]}>Jimmy!</Text>
                </View>
                <Text style={styles.text}>What's on your gardening agenda today?</Text>
            </View>
            <Image source={require("../../assets/images/2.0_sky.png")} alt="sky" style={styles.sky} />
        </>
    )
}

const styles = StyleSheet.create({
    // WEATHER
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
        gap: 30,
        width: "100%",
    },
    text: {
        fontSize: 16,
    },
    dayInfo: {
        marginBottom: 25,
        flexDirection: "row",
        gap: 15,
    },
    weatherInfo: {
        marginTop: 25,
    },

    // GREETING
    greeting: {
        marginTop: 15,
        paddingHorizontal: 24,
        gap: 5,
        width: "100%",
    },
    heading_container: {
        flexDirection: "row",
        gap: 3,
    },
    heading_text: {
        fontSize: 24
    },
    heading_name: {
        fontWeight: 700
    },
    sky: {
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: -1,
    },
});