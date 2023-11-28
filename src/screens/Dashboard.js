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
import FontText from "../components/FontText";

const windowHeight = Dimensions.get('window').height;

export default function Dashboard () {

    const image = require('../../assets/images/2.0_background.png');

    return(
            <View style={styles.container}>
                <ScrollView >
                    <Weather />
                    <View style={styles.dashboard_content}>
                        <View style={{paddingTop: 30, paddingHorizontal: 24}}>
                            <View style={styles.welcome_msg}>
                                <FontText 
                                    content={'Hey,'}
                                    fontSize={24}
                                />
                                <FontText 
                                    content={'Jimmy!'}
                                    fontSize={24}
                                    fontWeight={700}
                                />
                            </View>
                            <FontText 
                                content={`What's on your gardening agenda today?`}
                                fontSize={14}
                                fontWeight={500}
                                width={200}
                            /> 
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
        marginBottom: 150,
        width: "100%",
        marginTop: -35,
    },
    welcome_msg: {
        flexDirection: "row",
        gap: 3,
    },
    bg_img: {
        borderRadius: 40,
        position: "absolute",
        top: 0,
        zIndex: -1,
        width: '100%',
    },
});
  