import { StyleSheet, View, Image } from "react-native";

import FontText from './FontText';

export default function CollectionCard({name, status, image}) {
    return (
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image source={image} alt={name} style={styles.plant_img} />
            </View>
            <View style={styles.plant_text}>
                <FontText
                    content={name}
                    fontSize={18}
                    fontWeight={500}
                />
                <FontText
                    content={`Water every ${status} days`}
                />
            </View>
            <Image source={require('../../assets/icons/3.0_arrow.png')} alt={name} style={styles.arrow} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingVertical: 5,
        paddingBottom: 5,
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 16,
        marginLeft: -40,
    },
    img_container: {
        width: 95,
        height: 105,
        position: "relative",
        justifyContent: "center",
        marginLeft: 15,
    },
    plant_img: {
        position: "absolute",
    },
    arrow: {
        marginTop: "auto",
        bottom: 10,
    }
});