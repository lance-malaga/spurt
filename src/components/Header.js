import React from "react";
import { StyleSheet, View, Image} from "react-native";

export default function Header () {
    return(
        <View style={styles.container}>
            <Image
                source={require("../../assets/icons/header_user.png")}
                alt={"header_user"}
            />
            <Image
                source={require("../../assets/icons/header_menu.png")}
                alt={"header_menu"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#ffffff00",
        width: "100%",
        paddingHorizontal: 24,
        paddingVertical: 30,
    },
});
  