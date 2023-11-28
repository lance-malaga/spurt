import { ScrollView, StyleSheet, Text, View, Pressable, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
 
// Components
import Header from '../components/Header';
import NavBar from "../components/NavBar";
import ShowMap from '../components/ShowMap';

export default function FindCommunity() {
    const [showMap, setShowMap] = useState(false);

    return (
        <View>
            {!showMap && 
                <View>
                    <Header />
                    <Image source={require("../../assets/images/background/blur-cool-2.png")} style={styles.backgroundImage}/>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.welcomeText}>
                                <Text style={{fontWeight:"600", fontSize: 24, width: 250}}>Community Garden Society</Text>
                            </View>
                            {/* Find a Group Card */}
                            <View style={styles.findGroup}>
                                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15, marginLeft: 10, color: "#169F91"}}>Looking for a group?</Text>
                                <Text style={{marginLeft: 10, width: 250, fontWeight: '600'}}>Join our community garden group to connect, swap tips, and grow together</Text>
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
                                        <Text style={{color: 'white', textAlign: 'center'}}>Find a group</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {/* Disclaimer */}
                            <View style={styles.disclaimerCont}>
                                <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                                    <Ionicons name="alert-circle-outline" size={20} color='black'/>
                                    <Text style={{fontSize: 16}}>Disclaimer</Text>
                                </View>
                                <TouchableOpacity style={styles.disclaimerBtn}>
                                    <Text style={{color:'white', textAlign:'center'}}>view</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                    <NavBar />
                </View>
            }
            {showMap && 
                <View style={{paddingTop: 100}}>
                    <TouchableOpacity onPress={() => setShowMap(false)}>
                        <Image style={{marginLeft: 24}} source={require("../../assets/images/community/backIcon.png")}/>
                    </TouchableOpacity>
                    <ShowMap />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%'
    },
    welcomeText: {
        margin: 20,
    },

    // Find group card
    findGroup: {
        gap: 5,
        margin: 20,
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
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'black',
        marginBottom: 30
    },

    // Disclaimer
    disclaimerCont: {
        margin:20, 
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFDF8B'
    }, 
    disclaimerBtn: {
        width: 80,
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'black',
    },
});