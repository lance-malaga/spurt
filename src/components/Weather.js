
import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

// Components
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import CurrentDate from "./CurrentDate";
import FontText from "./FontText";

export default function Weather() {

    const { condition, temperature } = CurrentWeather();
    const { currentDay, hours } =  CurrentDate();

    return (
        <>
            <View style={styles.container}>
                <Header />
                <View style={styles.dayInfo}>
                    <View>
                        <FontText 
                            content={condition}
                            fontSize={11}
                        />
                        <FontText 
                            content={`${temperature} °C`}
                            fontSize={32}
                            marginTop={-10}
                        />
                        <FontText 
                            content={currentDay}
                            fontSize={11}
                            textTransform={'uppercase'}
                            marginTop={-10}
                        />
                    </View>
                </View>
            </View>
            {
                condition == "Sunny" || condition == "Clear" && hours <= 16 ? 
                    <Image source={require("../../assets/images/weather-sunny.png")} alt="sunny" style={styles.sky} /> :
                condition == "Blowing snow" || condition == "Light snow" || condition == "Moderate snow" || condition == "Heavy snow" ?
                    <Image source={require("../../assets/images/weather-snowy.png")} alt="snow" style={styles.sky} /> : 
                condition == "Light rain" || condition == "Moderate rain" || condition == "Heavy rain" ?
                    <Image source={require("../../assets/images/weather-rainy.png")} alt="rain" style={styles.sky} /> : 
                <Image source={require("../../assets/images/weather-cloudy.png")} alt="cloudy" style={styles.sky} /> 
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 300,
    },
    dayInfo: {
        paddingTop: 40,
        paddingRight: 24,
        // gap: -5,
        alignItems: 'flex-end'
    },
    weatherContainer: {
        gap: -8
    },
    condition: {
        fontSize: 12,
        fontWeight: "500"
    },
    temperature: {
        fontSize: 40,
    },
    day: {
        textTransform: "uppercase",
        fontSize: 12,
        marginTop: 1,
        fontWeight: "500"
    },
    sky: {
        position: "absolute",
        width: "100%",
        zIndex: -1,
    },
});