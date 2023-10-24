import React from "react";
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomText from "./CustomText";

export default function DashboardTasks() {
    const [taskStatus, setTaskStatus]= useState(false);
    const taskList = [
        {
            name: 'Water',
            image: require('../../assets/icons/task_water_icon.png'),
            // status: taskStatus,
        },
        {
            name: 'Fertilizer',
            image: require('../../assets/icons/task_fert_icon.png'),
            // status: taskStatus,
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.title_header}>
                <CustomText
                    text={`Today's Tasks`}
                    fontSize={18}
                    fontWeight={700}
                />
                <Pressable>
                    <Text style={styles.button}>view all</Text>
                </Pressable>
            </View>
            <View style={styles.plant_card}>
                <View style={styles.plant_item}>
                    <Image source={require('../../assets/images/2.0_tomato.png')} alt="lettuce" style={styles.plant_img} />
                    <View style={styles.plant_item__text}>
                        <CustomText
                            text={'My Tomato Plants'}
                            fontSize={18}
                            fontWeight={500}
                        />
                        <CustomText
                            text={'Tomato'}
                            fontSize={12}
                            color={'#727272'}
                        />
                    </View>
                </View>
                <View style={styles.task}>
                    {taskList.map((a, index) => {
                        return (
                            <View key={index} style={styles.task__item}>
                                {/* <Pressable onPress={setTaskStatus(!taskStatus)}> */}
                                    <View style={styles.task__item_text}>
                                        <Image source={a.image} alt={a.name} style={styles.task_icon} />
                                        <Text>{a.name}</Text>
                                    </View>
                                    {taskStatus ? (
                                        <Image source={require('../../assets/icons/task_check.png')} alt="task-check" style={styles.task_status} />
                                    ) : (
                                        <Image source={require('../../assets/icons/task_uncheck.png')} alt="task-uncheck" style={styles.task_status} />
                                    )}
                                {/* </Pressable> */}
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginBottom: 30,
    },
    title_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
    button: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    plant_card: {
        backgroundColor: "white",
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 16,
    },
    plant_item: {
        flexDirection: "row",
        gap: 25,
        alignItems: "center",
        borderBottomColor: "#AAA",
        borderBottomWidth: 1,
        marginBottom: 15,
    },
    plant_item__text: {
        bottom: 10,
    },
    plant_img: {
        marginTop: -10
    },
    task: {
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