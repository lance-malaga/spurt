import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

// COMPONENTS
import FontText from "./FontText";
import WeeklyTaskItem from './WeeklyTaskItem';

// ASSETS
import ArrowLeft from "../../assets/icons/plant-detail/arrow-left.svg"
import ArrowRight from "../../assets/icons/plant-detail/arrow-right.svg"

export default function WeeklyTask({shadowStyle, startTimer, waterStatus, fertilizeStatus, pruneStatus,taskList}) {
    const [currentMonth, setCurrentMonth] = useState();
    const [nextSixDays, setNextSixDays] = useState([]);
    const monthList = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        // Current month
        const month = new Date().getMonth() + 1;
        setCurrentMonth(monthList[month]);

        // Get the next 6 days
        const getNextSixDays = () => {
            const days = [];
            for (let i = 1; i <= 6; i++) {
                const nextDay = new Date();
                nextDay.setDate(new Date().getDate() + i);
                days.push(nextDay);
            }
            return days;
        };
  
        setNextSixDays(getNextSixDays());
    }, []);

    return (
        <View style={styles.container}>
            <Shadow {...shadowStyle}>
                <View style={styles.weekly_tasks}>
                    <View style={styles.header}>
                        <FontText
                            content={'Weekly Tasks'}
                            fontSize={16}
                            fontWeight={700}
                        />
                        <View style={styles.month}>
                            <ArrowLeft/>
                            <FontText
                                content={currentMonth}
                                fontSize={12}
                                fontWeight={500}
                            />
                            <ArrowRight/>
                        </View>
                    </View>
                    <View style={styles.dates}>
                        <View style={styles.current_day}>
                            <FontText 
                                content={'Today'} 
                                color={'white'}
                                fontSize={10}
                            />
                        </View>
                        <View style={styles.next_days_container}>
                            {nextSixDays.map((day, index) =>
                                <View key={index} style={styles.next_days}>
                                    <FontText
                                        key={index}
                                        content={day.toLocaleDateString(undefined, { day: '2-digit' })}
                                        fontSize={10}
                                        textAlign={'center'}
                                    />
                                </View>
                            )}
                        </View>
                    </View>
                    <FontText 
                        content={'Complete daily tasks, reset your plant care wheel, and get a timed tracker for your next session!'}
                        color={'#707070'}
                        fontSize={12}
                    />
                    <View style={styles.task_item}>
                        {taskList.map((task, index) => (
                            <WeeklyTaskItem
                                key={index}
                                task={task}
                                startTimer={startTimer}
                                waterStatus={waterStatus}
                                fertilizeStatus={fertilizeStatus}
                                pruneStatus={pruneStatus}
                            />
                        ))}
                    </View>
                </View>
            </Shadow>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    weekly_tasks: {
        backgroundColor: '#ffffff',
        borderRadius: 14,
        padding: 27,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    month: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    dates: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 13,
    },
    current_day: {
        backgroundColor: 'black',
        borderRadius: 6,
        color: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignItems: 'center',
    },
    next_days_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
    },
    next_days: {
        backgroundColor: '#EBEBEB',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    task_item: {
        marginTop: 15,
        gap: 10,
    }
});