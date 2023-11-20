import { View, StyleSheet, Text, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

// COMPONENTS
import FontText from "./FontText";

export default function TaskWidget({task, waterStatus, fertilizeStatus, pruneStatus, waterTimer, setWaterTimer, fertilizerTimer, setFertilizerTimer, pruneTimer, setPruneTimer, shadowStyle}) {

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 3600));
        const hours = Math.floor(seconds / 3600); // number of seconds in 1hr
        const minutes = Math.floor((seconds % 3600) / 60); // calculates the minutes from the remaining seconds
        const secondsRemaining = seconds % 60;
    
        if (days > 2) {
            return `${days} days`;
        } else {
            return `${hours}h ${minutes}m ${secondsRemaining}s`;
        }
    };

    const renderTimer = (timerValue) => (
        <View>
            <FontText
                content={ timerValue > 0
                    ? formatTime(timerValue)
                    : `0h 0m 0s`
                }s
                color={
                    task === 'Water' ? 
                        '#78B1EC' 
                    : task === 'Fertilize' ?
                        '#FFBCBC'
                    : '#169F91'
                }
                fontSize={18}
            />  
        </View>
    );

    return (
        <Shadow 
            style={{width: '100%'}}
            {...shadowStyle}
        >
            <View style={styles.task_card}>
                <View style={styles.task_left_section}>
                    <CountdownCircleTimer
                        isPlaying={
                            task === 'Water' ? 
                                waterTimer > 0
                            : task === 'Fertilize' ? 
                                fertilizerTimer > 0
                            :
                                pruneTimer > 0
                        }
                        duration={
                            task === 'Water' ? 
                                waterTimer
                            : task === 'Fertilize' ? 
                                fertilizerTimer
                            :
                                pruneTimer
                        }
                        colors={
                            task === 'Water' ? 
                                '#78B1EC' 
                            : task === 'Fertilize' ?
                                '#FFBCBC'
                            : '#169F91'
                        }
                        onComplete={
                            task === 'Water' ? 
                                () => setWaterTimer(0)
                            : task === 'Fertilize' ? 
                                () => setFertilizerTimer(0)
                            :
                                () => setPruneTimer(0)
                        }
                        size={50}
                        strokeWidth={5}
                    >
                        {({ remainingTime }) => (
                            <>
                                <Text style={{ color:'transparent', position:'absolute' }}>
                                    {remainingTime}
                                </Text>
                                <Image
                                    style={{marginRight: -2}}
                                    source={ task === 'Water' ? 
                                            require("../../assets/icons/plant-detail/water.png")
                                        : task === 'Fertilize' ?
                                            require("../../assets/icons/plant-detail/fertilize.png")
                                        : 
                                            require("../../assets/icons/plant-detail/prune.png")
                                    } 
                                    alt={`${task}-icon`.toLocaleLowerCase()}
                                />
                            </>
                        )}
                    </CountdownCircleTimer>
                    <View style={styles.task_details}>
                        <FontText 
                            content={task}
                            fontSize={16}
                            fontWeight={700}
                        />
                        <FontText 
                            content={
                                task === 'Water' ? 
                                    `Every ${waterStatus} days` 
                                : task === 'Fertilize' ? 
                                    `Every ${fertilizeStatus} days` 
                                :
                                    `Every ${pruneStatus} days`
                            }
                            fontSize={12}
                            marginTop={-7}
                        />
                    </View>
                </View>
                { task === 'Water' ? 
                        renderTimer(waterTimer) 
                    : task === 'Fertilize' ? 
                        renderTimer(fertilizerTimer) 
                    :
                        renderTimer(pruneTimer)
                }   
            </View>
        </Shadow>
    )
}

const styles = StyleSheet.create({
    task_card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 14,
        padding: 20,
    },
    task_left_section: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
});