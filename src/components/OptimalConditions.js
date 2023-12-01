import { View, Image, StyleSheet } from "react-native";

// COMPONENTS
import FontText from "./FontText";
import { Shadow } from "react-native-shadow-2";

// ASSETS
import OptimalLight from "../../assets/icons/plant-detail/optimal-light.svg"
import OptimalPhLevel from "../../assets/icons/plant-detail/optimal-ph-level.svg"
import OptimalSoil from "../../assets/icons/plant-detail/optimal-soil.svg"
import OptimalTemp from "../../assets/icons/plant-detail/optimal-temp.svg"

export default function OptimalConditions({optimalConditions, shadowStyle}) {
    const optimalConditionImgs = [
        <OptimalTemp/>,
        <OptimalLight/>,
        <OptimalSoil/>,
        <OptimalPhLevel/>,
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
                                        {optimalConditionImgs[index]}
                                    </View>
                                    <View style={styles.content}>
                                        <FontText 
                                            content={data.type}
                                            fontWeight={500}
                                        />
                                        <FontText 
                                            content={data.condition}
                                            fontSize={12}
                                            marginTop={-5}
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
        gap: 15,
        columnGap: 30,
    },
    conditions_content: {
        width: '45%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        backgroundColor:'#d9d9d9',
        borderRadius: 50,
        padding: 9,
        justifyContent: 'center',
        alignItems: 'center',
    },
});