import FontText from "./FontText";
import { View, StyleSheet, Image, TouchableOpacity} from "react-native";

import PlantProgressImg from "../../assets/images/plant-progress/plant-progress-img.svg"

export default function PlantProgressDefault() {
    return (
        <View style={styles.container}>
            <FontText
                content={'Plant Progress'}
                fontSize={24}
                fontWeight={700}
                textAlign={'center'}
            />
            <PlantProgressImg/>
            <FontText
                content={`Embark on your plant's life journey from seed to bloom. Witness your tomato thrive and celebrate each growth spurt as you initiate the planting life-cycle!`}
                fontSize={14}
                textAlign={'justify'}
            />
            <TouchableOpacity style={styles.button}>
                <FontText 
                    content={'Start Plant Progress'}
                    fontSize={16}
                    fontWeight={500}
                    color={'#FFFFFF'}
                    textAlign={'center'}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 45,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginTop: 80,
    },
    button: {
        backgroundColor: '#14171F',
        marginTop: 25,
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 50,
    },
})