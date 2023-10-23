import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? 50 : 0,
    }
})