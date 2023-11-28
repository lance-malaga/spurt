import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Dimensions} from "react-native";
import { useNavigation } from "@react-navigation/native";

// COMPONENTS
import GlobalStyles from "../components/GlobalStyles";
import Weather from "../components/Weather";
import NavBar from "../components/NavBar";
import DashboardTasks from "../components/DashboardTasks";
import PlantAlert from "../components/PlantAlert";
import UpcomingEvents from "../components/UpcomingEvents";
import AiPrompt from "../components/AiPrompt";
import SearchBar from "../components/SearchBar";

const windowHeight = Dimensions.get('window').height;

export default function Dashboard () {

    return(
            <View style={styles.container}>
                <ScrollView >
                    <Weather />
                    <View style={styles.dashboard_content}>
                        <View style={{paddingTop: 30, paddingLeft: 44}}>
                            <Text style={{fontSize: 24}}>Hey, 
                                <Text style={{fontSize: 24, fontWeight: "600"}}>Jimmy!</Text>
                            </Text>
                            <Text style={{width: 200, fontSize: 14, fontWeight: "500", paddingTop: 5}}>What's on your gardening agenda today?</Text>
                        </View>
                        <View style={{paddingHorizontal: 24}}>
                            <SearchBar />
                        </View>
                        <DashboardTasks />
                        <UpcomingEvents />
                        <Image 
                            source={require('../../assets/images/2.0_background.png')}
                            alt="bg-img"
                            style={styles.bg_img}
                        />
                    </View>
                </ScrollView>
                <AiPrompt/>
                <NavBar />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
    },
    dashboard_content: {
        paddingBottom: 150,
        width: "100%",
        marginTop: -90,

    },
    bg_img: {
        borderRadius: 40,
        position: "absolute",
        top: 0,
        zIndex: -1,
        width: 412,
    },
});
  