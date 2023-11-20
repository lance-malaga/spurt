
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

// Components
import CurrentWeather from "./CurrentWeather";
import CurrentDate from "./CurrentDate";

export default function Weather() {

    const { condition, temperature } = CurrentWeather();
    const { currentDay, hours } =  CurrentDate();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.dayInfo}>
                    <View style={styles.weatherContainer}>
                        <Text style={styles.condition}>{condition}</Text>
                        <Text style={styles.temperature}>{temperature}°C</Text>
                    </View>
                    <Text style={styles.day}>{currentDay}</Text>
                </View>
            </View>
            {
                condition == "Sunny" || condition == "Clear" && hours <= 16 ? 
                    <Image source={require("../../assets/images/weather-sunny.png")} alt="sunny" style={styles.sky} /> :
                condition == "Blowing snow" || condition == "Light snow" || condition == "Moderate snow" || condition == "Heavy snow" ?
                    <Image source={require("../../assets/images/weather-snowy.png")} alt="sunny" style={styles.sky} /> : 
                condition == "Light rain" || condition == "Moderate rain" || condition == "Heavy rain" ?
                    <Image source={require("../../assets/images/weather-rainy.png")} alt="sunny" style={styles.sky} /> : 
                <Image source={require("../../assets/images/weather-cloudy.png")} alt="sunny" style={styles.sky} /> 
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
        padding: 10,
        borderRadius: 5,
        gap: -8,
    },
    weatherContainer: {
        gap: -8
    },
    condition: {
        fontSize: 12
    },
    temperature: {
        fontSize: 40
    },
    day: {
        textTransform: "uppercase",
        fontSize: 12,
        marginTop: 1
    },
    sky: {
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: -1,
    },
});