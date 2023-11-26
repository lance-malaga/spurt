
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
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
            <View style={styles.upcoming_events}>
                <View style={styles.events_header}>
                    <CustomText 
                        text={'Community Updates'}
                        fontWeight={600}
                        fontSize={18}
                    />
                </View>
                <View style={{padding: 18}}>
                    <View style={styles.infoContainer}>
                        <View style={styles.infoDisplay}>
                            <Image 
                                source={require("../../assets/images/avatar01.png")} 
                                alt="avatar-image"
                            />
                            <View>
                                <Text style={{fontWeight: "600", fontSize: 16}}>Monika</Text>
                                <Text style={{color: "#ADADAD"}}>@lab_master</Text>
                            </View>
                        </View>
                        <View  style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                            <Text style={{fontSize: 12, color: "#ADADAD"}}>#general</Text>
                            <Text style={{fontSize: 12, color: "#ADADAD"}}>#harvest</Text>
                            <Text style={styles.plusCirle}>+2</Text>
                        </View>
                    </View>
                    <Text style={styles.updateMessage}>
                        Harvest Day! Come join us this weekend for our summer harvest! 
                    </Text>
                    <Image 
                        style={styles.commUpdateImg}
                        source={require('../../assets/images/commUpdateImage.png')}
                        alt="update-image"
                    />
                    <View style={[styles.infoContainer, {paddingLeft: 15, paddingRight: 15}]}>
                        <View style={styles.infoDisplay}>
                            <Text style={{color: "#ADADAD", fontSize: 13}}>14 Likes</Text>
                            <Text style={{color: "#ADADAD", fontSize: 13}}>27 Comments</Text>
                        </View>
                        <Text style={{color: "#ADADAD", fontSize: 13}}>posted 30 mins ago</Text>
                    </View>
                    <View style={styles.lineStyle}></View>
                </View>
                <View style={{paddingLeft: 32, paddingRight: 32}}>
                    <View style={styles.infoDisplay}>
                        <Image 
                            source={require("../../assets/images/avatar02.png")} 
                            alt="avatar-image"
                        />
                        <View>
                            <Text style={{fontWeight: "600", fontSize: 16}}>Shahab</Text>
                            <Text style={{color: "#ADADAD"}}>@shabby_snacks</Text>
                        </View>
                    </View>
                    <Text style={styles.comment}>Excited to see everyone’s harvest!</Text>
                    <Text style={{textAlign: "right", color: "#ADADAD", paddingTop: 5}}>posted 8 mins ago</Text>
                    <TouchableOpacity
                        // onPress={() => navigation.push('JoinedCommunity')}
                        style={styles.viewPostBtn}
                    >
                        <Text style={{color: 'white', textAlign: 'center'}}>View Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 50
    },
    upcoming_events: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 30,
        marginHorizontal: 25,
    },
    events_header: {
        alignItems: "center"
    },
    infoDisplay: {
        flexDirection: "row", 
        gap: 10,
        // paddingBottom: 20
    },
    plusCirle: {
        padding: 4,
        fontSize: 12,
        color: "#ADADAD",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ADADAD",
        borderRadius: 20
    },
    updateMessage: {
        width: 280,
        paddingLeft: 35,
        fontSize: 16,
        fontWeight: "700"
    },
    commUpdateImg: {
        marginTop: 15,
        marginBottom: 20,
        alignSelf: "center",
        borderRadius: 20
    }, 
    infoContainer: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "flex-end",
        marginBottom: 20,
    },
    lineStyle: {
        borderBottomColor: '#F6E29B', 
        borderBottomWidth: 2
    },
    comment: {
        fontWeight: "600", 
        fontSize: 16,
        paddingTop: 10,
        paddingLeft: 32
    },
    viewPostBtn: {
        alignSelf: "center",
        marginTop: 20,
        width: 150,
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'black',
        // marginBottom: 30
    },
});