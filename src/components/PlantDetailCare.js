import { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

// COMPONENTS
import TaskWidget from './TaskWidget';
import OptimalConditions from './OptimalConditions';
import WeeklyTask from './WeeklyTask';

export default function PlantDetailCare({plantData, optimalConditions, waterStatus, fertilizeStatus, pruneStatus}) {
    const [waterTimer, setWaterTimer] = useState(0);
    const [fertilizerTimer, setFertilizerTimer] = useState(0);
    const [pruneTimer, setPruneTimer] = useState(0);

    const ShadowPresets = {
        taskWidget: {
            distance: 6,
            startColor: 'rgba(20, 20, 20, 0.05)',
        },
        optimalConditions: {
            distance: 10,
            startColor: 'rgba(20, 20, 20, 0.05)',
        },
    };
    
    const startTimer = (timerType, hours) => {
        if (timerType === 'Water') {
            setWaterTimer(hours * 24 * 60 * 60); // 24 hours in seconds
        } else if (timerType === 'Fertilize') {
            setFertilizerTimer(hours * 24 * 60 * 60);
        } else if (timerType === 'Prune') {
            setPruneTimer(hours * 24 * 60 * 60);
        }
    };

    useEffect(() => {
        let waterTimerId, fertilizerTimerId, pruneTimerId;

        if (waterTimer > 0) {
            waterTimerId = setInterval(() => {
                setWaterTimer((prevTimer) => (prevTimer <= 0 ? 0 : prevTimer - 1));
            }, 1000); // Update every second
        }
    
        if (fertilizerTimer > 0) {
            fertilizerTimerId = setInterval(() => {
                setFertilizerTimer((prevTimer) => (prevTimer <= 0 ? 0 : prevTimer - 1));
            }, 1000); // Update every second
        }

        if (pruneTimer > 0) {
            pruneTimerId = setInterval(() => {
                setPruneTimer((prevTimer) => (prevTimer <= 0 ? 0 : prevTimer - 1));
            }, 1000); // Update every second
        }
    
        return () => {
            clearInterval(waterTimerId);
            clearInterval(fertilizerTimerId);
            clearInterval(pruneTimerId);
        };
    }, [waterTimer, fertilizerTimer, pruneTimer]);

    const taskList = ['Water', 'Fertilize', 'Prune'];
      
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.task_container}>
                    <Swiper
                        loop={false}
                        showsPagination
                        height={140}
                        dotStyle={styles.swipe__dot}
                        activeDotStyle={styles.swipe__dot_active}
                    >
                        {taskList.map((task, index) => {
                            return (
                                <TaskWidget
                                    key={index}
                                    task={task}
                                    waterStatus={waterStatus}
                                    fertilizeStatus={fertilizeStatus}
                                    pruneStatus={pruneStatus}
                                    waterTimer={waterTimer}
                                    setWaterTimer={setWaterTimer}
                                    fertilizerTimer={fertilizerTimer}
                                    setFertilizerTimer={setFertilizerTimer}
                                    pruneTimer={pruneTimer}
                                    setPruneTimer={setPruneTimer}
                                    shadowStyle={ShadowPresets.taskWidget}
                                />
                            )
                        })}
                    </Swiper>
                </View>
                <View style={{paddingHorizontal: 24}}>
                    <WeeklyTask
                        shadowStyle={ShadowPresets.optimalConditions}
                        startTimer={startTimer}
                        waterStatus={waterStatus}
                        fertilizeStatus={fertilizeStatus}
                        pruneStatus={pruneStatus}
                        taskList={taskList}
                    />
                    <OptimalConditions 
                        optimalConditions={optimalConditions}
                        shadowStyle={ShadowPresets.optimalConditions}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 50,
    },
    swipe__dot: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    },
    swipe__dot_active: {
        backgroundColor: 'rgba(0,0,0,.8)',
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 3,
    }
});