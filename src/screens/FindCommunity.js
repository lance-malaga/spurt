import { ScrollView, StyleSheet, Text, View, Pressable, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';
 
// Components
import Header from '../components/Header';
import NavBar from "../components/NavBar";
import ShowMap from '../components/ShowMap';
import ViewDisclaimer from '../components/ViewDisclaimer';
import FontText from '../components/FontText';

export default function FindCommunity({setJoinedComm}) {
    const [showMap, setShowMap] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);

    return (
        <View style ={{flex: 1}}>
            {!showMap && 
                <View style={{flex:1, paddingBottom: 25,}}>
                    <Image source={require("../../assets/images/background/blur-cool-2.png")} style={styles.backgroundImage}/>
                    <Header />
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.welcomeText}>
                                <FontText
                                content={"Community Garden Society"}
                                fontSize={24}
                                fontWeight={500}
                                width={250}
                                />
                            </View>
                            {/* Find a Group Card */}
                            <View style={styles.findGroup}>
                                <FontText
                                content={"Looking for a group?"}
                                fontSize={18}
                                fontWeight={600}
                                color={"#169f91"}
                                marginTop={15}
                                marginLeft={10}
                                />
                                <FontText
                                content={"Join our community garden group to connect, swap tips, and grow together"}
                                fontSize={14}
                                marginLeft={10}
                                />
                                <View style={styles.assets}>
                                    <Image 
                                        style={{marginTop: 20, marginBottom: 20}}
                                        source={require("../../assets/images/community/img01.png")}
                                        alt={"gardener_img"}
                                    />
                                    <TouchableOpacity
                                        onPress={() => setShowMap(true)}
                                        style={styles.findButton}
                                    >
                                        <FontText
                                        content={"Find a group"}
                                        fontSize={14}
                                        fontWeight={500}
                                        color={"#fff"}
                                        textAlign={"center"}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* Disclaimer */}
                            <View style={styles.disclaimerCont}>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                                    <Ionicons name="alert-circle-outline" size={20} color='black'/>
                                    <FontText
                                    content={"Disclaimer"}
                                    fontSize={14}
                                    fontWeight={500}
                                    />
                                </View>
                                <TouchableOpacity style={styles.disclaimerBtn} onPress={() => setShowDisclaimer(true)}>
                                    <FontText
                                    content={"View"}
                                    fontSize={12}
                                    fontWeight={500}
                                    textAlign={"center"}
                                    color={"#fff"}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <NavBar />
                    <SwipeablePanel
                        isActive={showDisclaimer}
                        onClose={() => setShowDisclaimer(false)}
                        onPressCloseButton={() => setShowDisclaimer(false)}
                        closeRootSwipeablePanel={() => setShowDisclaimer(false)}
                        closeSwiper={() => setShowDisclaimer(false)}
                        fullWidth
                        closeOnTouchOutside
                        showCloseButton
                        noBar
                        style={{
                            height: 800,
                            backgroundColor:"#404040",
                        }}
                    >
                        <ViewDisclaimer /> 
                    </SwipeablePanel>
                </View>
            }
            {showMap && 
                <View style={{paddingTop: 100}}>
                    <ShowMap setShowMap={() => setShowMap(false)} setJoinedComm={setJoinedComm} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 700,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%'
    },
    welcomeText: {
        marginLeft: 20,
    },

    // Find group card
    findGroup: {
        gap: 5,
        marginTop: 15,
        marginLeft: 20,
        width:"90%",
        height:"68%",
        backgroundColor: 'white', 
        borderRadius: 15, 
        padding: 16, 
        shadowColor: 'black', 
        shadowOffset: { 
            width: 0, 
            height: 4, 
        }, 
        shadowOpacity: 0.3, 
        shadowRadius: 6, 
        elevation: 4, 
    }, 
    assets: {
        alignItems: "center",
        gap: 25,
        marginTop: 30
    },
    findButton: {
        width: 280,
        padding: 10,
        borderRadius: 15,
        backgroundColor: 'black',
        marginBottom: 30
    },

    // Disclaimer
    disclaimerCont: {
        marginTop:20, 
        width:"91%",
        marginLeft:18,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFDF8B',
    }, 
    disclaimerBtn: {
        width: 80,
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'black',
    },
});