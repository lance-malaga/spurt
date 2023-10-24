import { ScrollView, StyleSheet, Text, View, Pressable, Image, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FindCommunity({navigation}) {

    return (
        <View>
            <Image source={require("../../assets/images/background/blur-cool-2.png")} style={styles.backgroundImage}/>
            <ScrollView>
                <View style={styles.container}>
                    {/* Welcome Message */}
                    <View style={styles.welcomeText}>
                        <Text style={{color: '#4267FA', fontWeight:"800", fontSize: 18}}>Welcome to Spurt’s</Text>
                        <Text style={{fontWeight:"bold", fontSize: 24}}>Community Garden Society</Text>
                    </View>
                    {/* Highlight Images */}
                    <View style={styles.roundedImage}>
                        <Image 
                            source={require("../../assets/images/community/comm_img01.png")}
                            alt={"gardeners_img"}
                        />
                        <Image 
                            source={require("../../assets/images/community/comm_img02.png")}
                            alt={"gardeners_img"}
                        />
                        <Image 
                            source={require("../../assets/images/community/comm_img03.png")}
                            alt={"gardeners_img"}
                        />
                        <Image 
                            source={require("../../assets/images/community/comm_img04.png")}
                            alt={"gardeners_img"}
                        />
                        <Image 
                            source={require("../../assets/images/community/comm_img05.png")}
                            alt={"gardeners_img"}
                        />
                    </View>
                    {/* Find a Group */}
                    <View style={styles.findGroup}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 15, marginLeft: 10}}>Looking for a group?</Text>
                        <Text style={{marginLeft: 10}}>Discover existing gardening groups in your area</Text>
                        <View style={styles.assets}>
                            <Image 
                                source={require("../../assets/images/community/garden.png")}
                                alt={"gardener_img"}
                            />
                            <TouchableOpacity
                                onPress={() => navigation.push('JoinedCommunity')}
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
                    {/* Community Threads */}
                    <View style={[styles.communityThreads, styles.boxShadow]}>
                        <Text style={styles.threadsText}>Community Threads</Text>
                        <Text>Help, what’s wrong with my garlic?</Text>
                        <View style={{flexDirection:'row', gap: 10}}>
                        <Text style={{fontSize: 12, opacity: 0.7}}>Posted 1 hour ago by @ju</Text>
                        <Text style={{fontSize: 12, color: "#F25E5A"}}>2 likes</Text>
                        <Text style={{fontSize: 12, color: "#169F91"}}>4 comments</Text>
                        </View>
                        <View style={{flexDirection:"row", gap: 10, marginBottom: 5}}>
                        <Pressable style={styles.unselectedButton}>
                            <Text>general</Text>
                        </Pressable>
                        <Pressable style={styles.selectedButton}>
                            <Text style={{color: "white"}}>garlic</Text>
                        </Pressable>
                        <Pressable style={styles.moreButton}>
                            <Text>+2</Text>
                        </Pressable>
                        </View>
                        <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
                        <View style={{flexDirection:"row", marginTop: 5, gap: 10, alignItems: 'center'}}>
                        <Image 
                            source={require('../../assets/images/community/user_icon.png')}
                            style={{width:30, height:30}}
                            alt='user_icon'
                        />
                        <View>
                            <Text style={{opacity:0.6}}>@chris</Text>
                            <Text>I think you need to water it less.</Text>
                        </View>
                        </View>
                        <Text style={{textAlign:'right', fontWeight:"500"}}>view post</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    // Background Image
    backgroundImage: {
        position: 'absolute',
        width: '100%'
    },

    // Welcome Text
    welcomeText: {
        margin: 20,
    },

    // Rounded Images
    roundedImage: {
        margin: 20,
        flexDirection: 'row',
        gap: 20
    }, 

    // Find group
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
        width: 300,
        padding: 10,
        borderRadius: 50,
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

    // Community Threads
    communityThreads: {
        gap: 5
    },
    boxShadow: {
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
        elevation: 14, 
    },
    threadsText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    unselectedButton: {
        backgroundColor: 'white',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
    }, 
    selectedButton: {
        backgroundColor: 'black',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
    }, 
    moreButton: {
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'black',
    },

});