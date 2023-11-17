import { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

import FontText from "./FontText";
import TaskWidget from './TaskWidget';
import { ScrollView } from 'react-native';

export default function PlantDetailCare({plantData, waterStatus, fertilizeStatus, pruneStatus}) {
    const [waterTimer, setWaterTimer] = useState(0);
    const [fertilizerTimer, setFertilizerTimer] = useState(0);
    const [pruneTimer, setPruneTimer] = useState(0);

    const startTimer = (timerType, hours) => {
        if (timerType === 'Watering') {
            setWaterTimer(hours * 24 * 60 * 60); // 24 hours in seconds
        } else if (timerType === 'Fertilizing') {
            setFertilizerTimer(hours * 24 * 60 * 60);
        } else if (timerType === 'Pruning') {
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
        <View>
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
                        />
                    )
                })}

            </View>


            {/* WATER */}     
            <TouchableOpacity onPress={() => startTimer('Watering', waterStatus)}>
                <FontText
                    content={"Water"}
                    textAlign={"center"}
                />
            </TouchableOpacity>

            {/* FERTILIZE */}
            <TouchableOpacity onPress={() => startTimer('Fertilizing', fertilizeStatus)}>
                <FontText
                    content={"Fertilize"}
                    textAlign={"center"}
                />
            </TouchableOpacity>

            {/* PRUNE */}
            <TouchableOpacity onPress={() => startTimer('Pruning', pruneStatus)}>
                <FontText
                    content={"Prune"}
                    textAlign={"center"}
                />
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    task_container: {
        gap: 25,
        // backgroundColor: 'blue'
    }
});