import React from "react";
import { StyleSheet, Text, View,  Image,} from "react-native";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

// Components
import Timer from './Timer';
import FontText from "./FontText";
 
export default function DashboardTasks({ darkMode }) {
    const taskList = [
        {
            name: 'Water',
            image: require('../../assets/icons/plant-detail/water.png'),
        },
        {
            name: 'Fertilizer',
            image: require('../../assets/icons/plant-detail/fertilize.png'),
        },
        {
            name: 'Prune',
            image: require('../../assets/icons/plant-detail/prune.png'),
        },
    ];

    return (
        <View style={[styles.container, { backgroundColor: darkMode ? "#292D3A" : "rgba(217, 217, 217, 0.0)" }]}>
            <View style={styles.title_header}>
                <FontText
                    content={"Plant Progress"}
                    fontSize={18}
                    fontWeight={700}
                    color={darkMode ? '#E4E4E4' : '#000'}
                />
            </View>
            <View style={[styles.plant_card, { backgroundColor: darkMode ? "#30374A" : "white" }]}>
                <View style={styles.plant_item}>
                    <View style={styles.plant_item__text}>
                    <Image 
                        source={require('../../assets/images/plant-card/tomato.png')}
                        alt="tomato" 
                        style={styles.plant_img} 
                    />
                    </View>
                </View>
                <View style={styles.task}>
                    {taskList.map((task, index) => {
                        return (
                            <View key={index} style={{flexDirection: 'row', alignItems: "center"}}>
                                <CountdownCircleTimer
                                    isPlaying
                                    duration={
                                        task.name == 'Water' ? 300 : 
                                        task.name =='Fertilizer' ? 500: 
                                        250
                                    }
                                    colors={
                                        task.name == 'Water' ? '#78B1EC' : 
                                        task.name =='Fertilizer' ? '#FFBCBC': 
                                        '#169F91'
                                    }
                                    size={50}
                                    strokeWidth={5}                                    
                                >
                                    {() => 
                                        <>
                                            <Image style={{width: 18, height: 18}} source={task.image} alt={task.name}/>
                                        </>
                                    }
                                </CountdownCircleTimer>
                                <View style={{paddingLeft: 10}}>
                                    <Timer 
                                        duration={
                                            task.name == 'Water' ? 28 * 50 * 60 * 1000 :
                                            task.name == 'Fertilizer' ? 48 * 55 * 60 * 1000 :
                                            19 * 30 * 60 * 1000
                                        }
                                        color={
                                            task.name == 'Water' ? '#78B1EC' : 
                                            task.name =='Fertilizer' ? '#FFBCBC': 
                                            '#169F91'
                                        }
                                    />
                                </View>                                
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
        paddingLeft: 24
    },
    plant_card: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginRight: 24,
        borderTopEndRadius: 33,
        borderBottomRightRadius: 33,
        elevation: 1
    },
    plant_item: {
        flexDirection: "column",
        gap: 25,
    },
    plant_item__text: {
        alignItems: "center",
    },
    plant_img: {
        width: 150
    },
    task: {
        marginLeft: 15,
        gap: 8,
    },
    task__item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    task__item_text: {
        flexDirection: "row",
        gap: 18
    },
});