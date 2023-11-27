import { StyleSheet, View, Image } from "react-native";

import FontText from './FontText';
import { Shadow } from "react-native-shadow-2";

export default function CollectionCard({name, status, image}) {
    const ShadowPresets = {
        taskWidget: {
            distance: 6,
            startColor: 'rgba(20, 20, 20, 0.03)',
        },
    };

    return (
        <Shadow style={{width: '100%'}} {...ShadowPresets.taskWidget}>
            <View style={styles.container}>
                <View style={styles.container_details}>
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
                            fontSize={12}
                            fontWeight={500}
                            color={'#7C7C7C'}
                            marginTop={-5}
                        />
                    </View>
                </View>
                <Image source={require('../../assets/icons/arrow-key-right.png')} alt={'arrow-right'} style={styles.arrow} />
            </View>
        </Shadow>
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
    },
    img_container: {
        width: '40%',
        height: 105,
        justifyContent: 'center',
    },
    container_details: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    plant_img: {
        position: 'absolute',
        right: 0,
    },
    arrow: {
        marginTop: "auto",
        bottom: 10,
    }
});