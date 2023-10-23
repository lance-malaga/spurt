
import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, Dimensions } from "react-native";
import CustomText from "./CustomText";

export default function UpcomingEvents() {
    const eventList = [
        {
            date: '09/20',
            event: 'Fertilizing the garden patch 9am-12pm. Come and help out the crew!',
        },
        {
            date: '09/27',
            event: '',
        },
        {
            date: '10/04',
            event: '',
        },
        {
            date: '10/11',
            event: 'Carrot day! Come join us at 10:00am for carrot harvesting!',
        },
        {
            date: '10/18',
            event: '',
        },
    ];

    return (
        <View style={styles.container}>
            <CustomText 
                text={'Community Highlights'}
                fontWeight={700}
                fontSize={18}
            />
            {/* <Text></Text> */}
            <View style={styles.upcoming_events}>
                <View style={styles.events_header}>
                    <CustomText 
                        text={'UPCOMING'}
                        fontWeight={300}
                    />
                    <CustomText 
                        text={'EVENTS'}
                        fontWeight={600}
                    />
                </View>
                <View style={styles.events_body}>
                    {eventList.map((a, index) => {
                        return (
                            <View key={index} style={styles.events_details}>
                                <Text>{a.date}</Text>
                                {a.event && 
                                    <View style={styles.events_details_content}>
                                        <Image source={require('../../assets/icons/2.0_event_dot.png')} alt="dot" style={{top: 5}} />
                                        <Text>{a.event}</Text>
                                    </View>
                                }
                                <View style={styles.line} />
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
        marginTop: 40,
    },
    upcoming_events: {
        marginTop: 25,
        backgroundColor: "#C7F3C2",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 30,
        paddingVertical: 30,
        paddingLeft: 25,
        paddingRight: 35,
    },
    events_header: {
        flexDirection: "row",
        gap: 3,
    },
    events_body: {
        marginTop: 20,
        gap: 15,
    },
    events_details: {
        gap: 5,
    },
    events_details_content: {
        flexDirection: "row",
        gap: 7,
        backgroundColor: "white",
        paddingVertical: 12,
        paddingLeft: 15,
        paddingRight: 20,
        width: "80%",
        borderTopLeftRadius: 8,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 25,
        marginLeft: "auto",
        top: 0,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: "#8CB953",
        width: "80%",
        position: "absolute",
        right: 0, 
        top: 9,
    },
});