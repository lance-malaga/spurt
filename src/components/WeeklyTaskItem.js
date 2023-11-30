import { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import FontText from "./FontText";

import CheckIcon from "../../assets/icons/plant-detail/check-icon.svg"

export default function WeeklyTaskItem({task, startTimer, waterStatus, fertilizeStatus, pruneStatus}) {
    const [checkedTask, setCheckedTask] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => {
                    startTimer(task,
                        task === 'Water' ? 
                            waterStatus
                        : task === 'Fertilize' ?
                            fertilizeStatus
                        : pruneStatus
                    ); 
                    setCheckedTask(true);
                }}
                style={styles.task_action}
            >
                <View style={[styles.checkbox, {
                    backgroundColor: 
                        checkedTask ? 
                            task === 'Water' ? 
                                '#78B1EC' 
                            : task === 'Fertilize' ?
                                '#FFBCBC'
                            : '#169F91'
                        : '#EBEBEB'
                }]}>
                    { checkedTask && <CheckIcon/> }
                </View>
                <FontText content={task} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'rgba(0, 0, 0, 0.40)',
        borderWidth: 1,
        borderRadius: 14,
        padding: 11,
        paddingRight: 28
    },
    task_action: {
        flexDirection: 'row',
        gap: 11
    },
    checkbox: {
        width: 24,
        height: 24,
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
});