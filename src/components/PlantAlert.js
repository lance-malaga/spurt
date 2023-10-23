import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, Dimensions } from "react-native";
import CustomText from "./CustomText";

export default function PlantAlert() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/2.0_plant_alert.png')} />
            <View style={styles.alert_text}>
                <CustomText
                    text={'Plant Alert'}
                    fontWeight={700}
                />
                <CustomText 
                    width={200}
                    text={`See care instructions for today’s weather`}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 18,
        flexDirection: "row",
        gap: 25,
        borderLeftColor: "#F25E5A",
        borderLeftWidth: 8,
        borderRadius: 5,
        width: "auto",
    },
});