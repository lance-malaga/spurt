
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

// Components
import CurrentWeather from "./CurrentWeather";
import CurrentDate from "./CurrentDate";

export default function Weather() {

    const { condition, temperature } = CurrentWeather();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.dayInfo}>
                    <View style={styles.weatherContainer}>
                        <Text style={styles.condition}>{condition}</Text>
                        <Text style={styles.temperature}>{temperature}°C</Text>
                    </View>
                    <CurrentDate />
                </View>
            </View>
            {
                condition === 'clear' ? 
                <Image source={require("../../assets/images/weather-sunny.png")} alt="sunny" style={styles.sky} /> :
                <Image source={require("../../assets/images/weather-night.png")} alt="sunny" style={styles.sky} />
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 24,
        width: "100%",
        height: "25%"
    },
    dayInfo: {
        backgroundColor: '#0000007c',
        padding: 10,
        borderRadius: 5,
        gap: -8,
    },
    weatherContainer: {
        gap: -8
    },
    condition: {
        color: "white",
        fontSize: 12
    },
    temperature: {
        color: "white",
        fontSize: 40
    },
    sky: {
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: -1,
    },
});