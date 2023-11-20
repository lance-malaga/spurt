import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import TaskWidget from './TaskWidget';
import OptimalConditions from './OptimalConditions';
import WeeklyTask from './WeeklyTask';
import { ScrollView } from 'react-native';

export default function PlantDetailCare({plantData, optimalConditions, waterStatus, fertilizeStatus, pruneStatus}) {
    const [waterTimer, setWaterTimer] = useState(0);
    const [fertilizerTimer, setFertilizerTimer] = useState(0);
    const [pruneTimer, setPruneTimer] = useState(0);

    const ShadowPresets = {
        taskWidget: {
            distance: 6,
            startColor: 'rgba(20, 20, 20, 0.03)',
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
                </View>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 100,
        paddingHorizontal: 24,
    },
    task_container: {
        gap: 10,
    },
});