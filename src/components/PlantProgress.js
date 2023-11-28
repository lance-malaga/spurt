import FontText from "./FontText";
import { View, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function PlantProgress() {
    return (
        <View style={styles.container}>
            <View style={styles.progress_content__container}>
                <FontText
                    content={'Plant Progress'}
                    fontSize={24}
                    fontWeight={700}
                />
                <FontText 
                    content={'Sunflower Plant'}
                    fontSize={18}
                    fontWeight={500}
                    marginTop={-10}
                />
                <View style={styles.progress__container}>
                    <Image
                        source={require('../../assets/images/plant-progress/progress-bar.png')}
                        alt="progress-bar"
                    />
                    <View style={styles.progress__details}>
                            <FontText
                                content={`Flowering`}
                                fontSize={14}
                            />
                            <FontText
                                content={`5-8 WEEKS`}
                                fontSize={10}
                            />
                            <FontText
                                content={`The buds open into vibrant sunflower blooms.`}
                                fontSize={12}
                                marginTop={5}
                            />
                    </View>
                </View>
            </View>
            <Image
                source={require('../../assets/images/plant-progress/flowering-stage.png')}
                alt="flowering-stage"
                style={styles.bg_img}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 745,
    },
    progress_content__container: {
        paddingHorizontal: 40,
        marginTop: 50,
    },
    progress__container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        gap: 8,
    },
    progress__details: {
        width: 155,
        padding: 20,
        borderRadius: 20,
        backgroundColor: '#E5F2FF',
        shadowColor: 'rgba(20, 20, 20, 0.12)',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.17,
        shadowRadius: 2,
        elevation: 2,
    },
    bg_img: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        zIndex: -1,
    },
})