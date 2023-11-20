import { View, Image, StyleSheet } from "react-native";

import FontText from "./FontText";
import { Shadow } from "react-native-shadow-2";

export default function OptimalConditions({optimalConditions, shadowStyle}) {
    const optimalConditionImgs = [
        require('../../assets/icons/plant-detail/temp-icon.png'),
        require('../../assets/icons/plant-detail/sun-icon.png'),
        require('../../assets/icons/plant-detail/soil-icon.png'),
        require('../../assets/icons/plant-detail/ph-level-icon.png'),
    ];

    return (
        <View style={styles.container}>
            <Shadow
                style={{width: '100%'}}
                {...shadowStyle}
            >
                <View style={styles.optimal_conditions}>
                    <FontText
                        content={'Optimal Conditions'}
                        fontWeight={700}
                    />
                    <View style={styles.conditions}>
                        {optimalConditions.map((data, index) =>{
                            return (
                                <View key={index} style={styles.conditions_content}>
                                    <View style={styles.icon}>
                                        <Image
                                            source={optimalConditionImgs[index]}
                                            alt={data.name}
                                        />
                                    </View>
                                    <View style={styles.content}>
                                        <FontText 
                                            content={data.type}
                                            fontSize={12}
                                            fontWeight={500}
                                        />
                                        <FontText 
                                            content={data.condition}
                                            fontSize={10}
                                        />
                                    </View>
                                </View>
                            );
                        })}
                        <View>

                        </View>
                    </View>
                </View>
            </Shadow>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    optimal_conditions: {
        backgroundColor: '#FAFAFA',
        borderRadius: 14,
        padding: 27,
    },
    conditions: {
        marginTop: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 15,
        justifyContent: 'space-between'
    },
    conditions_content: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        backgroundColor:'#d9d9d9',
        borderRadius: 50,
        padding: 9,
    },
});