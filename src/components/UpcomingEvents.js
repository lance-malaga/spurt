
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

//Components
import FontText from "./FontText";

export default function UpcomingEvents({ darkMode }) {
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
            <View style={[styles.upcoming_events,{ backgroundColor: darkMode ? "#30374A" : "#fff" }]}>
                <View style={styles.events_header}>
                    <FontText
                        content={'Community Updates'}
                        fontWeight={600}
                        fontSize={18}
                        color={darkMode ? '#E4E4E4' : '#000'}
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
                                <FontText
                                content={"Monika"}
                                fontSize={16}
                                fontWeight={600}
                                color={darkMode ? '#E4E4E4' : '#000'}
                                />
                                <FontText
                                content={"@lab_master"}
                                color={darkMode ? '#E4E4E4' : '#ADADAD'}
                                />                               
                            </View>
                        </View>
                        <View  style={{flexDirection: "row", gap: 5, alignItems: "center"}}>
                            <FontText
                            content={"#general"}
                            fontSize={12}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />
                            <FontText
                            content={"#harvest"}
                            fontSize={12}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />                            
                            <View style={styles.plusCirle}>
                            <FontText
                            content={"+2"}
                            fontSize={12}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />                                 
                            </View>
                        </View>
                    </View>
                    <View style={styles.updateMessage}>
                    <FontText
                            content={"Harvest Day! Come join us this weekend for our summer harvest!"}
                            fontSize={12}
                            fontWeight={600}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />                            
                    </View>
                    <Image 
                        style={styles.commUpdateImg}
                        source={require('../../assets/images/commUpdateImage.png')}
                        alt="update-image"
                    />
                    <View style={[styles.infoContainer, {paddingLeft: 15, paddingRight: 15}]}>
                        <View style={styles.infoDisplay}>
                            <FontText
                            content={"14 Likes"}
                            fontSize={12}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />
                            <FontText
                            content={"27 Comments"}
                            fontSize={12}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />    
                        </View>
                        <FontText
                            content={"posted 30 mins ago"}
                            fontSize={13}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                        />  
                    </View>
                    <View style={getLineStyle(darkMode)}></View>
                </View>
                <View style={{paddingLeft: 32, paddingRight: 32}}>
                    <View style={styles.infoDisplay}>
                        <Image 
                            source={require("../../assets/images/avatar02.png")} 
                            alt="avatar-image"
                        />
                        <View>
                            <FontText
                            content={"Shahab"}
                            fontSize={16}
                            fontWeight={600}
                            color={darkMode ? '#E4E4E4' : '#000'}
                            />  
                            <FontText
                            content={"@shabby_snacks"}
                            color={darkMode ? '#E4E4E4' : '#ADADAD'}
                            />  
                        </View>
                    </View>
                    <View style={styles.comment}>
                    <FontText
                            content={"Excited to see everyone's harvest!"}
                            fontSize={10}
                            fontWeight={400}
                            color={darkMode ? '#E4E4E4' : '#000'}
                            />                        
                    </View>
                    <FontText
                    content={"posted 8 mins ago"}
                    fontSize={10}
                    textAlign={"right"}
                    paddingTop={5}
                    color={darkMode ? '#E4E4E4' : '#ADADAD'}
                    />
                    <TouchableOpacity
                        // onPress={() => navigation.push('JoinedCommunity')}
                        style={[styles.viewPostBtn, { backgroundColor: darkMode ? '#78B1EC' : 'black' }]}                    >
                        <FontText
                        content={"View Post"}
                        fontSize={12}
                        fontWeight={700}
                        textAlign={"center"}
                        color={"#fff"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const getLineStyle = (darkMode) => ({
    borderBottomColor: darkMode ? '#546382' : '#F6E29B',
    borderBottomWidth: 2,
});

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