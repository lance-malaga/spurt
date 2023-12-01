import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

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
import { useDarkMode } from '../components/DarkModeContext';

const windowHeight = Dimensions.get('window').height;

export default function Dashboard() {
  const { darkMode } = useDarkMode();

    return (
      <View style={[styles.container, { backgroundColor: darkMode ? '#292D3A' : 'transparent' }]}>
        <ScrollView>
          <Weather/>
          <View style={styles.dashboard_content}>
            <View style={{ paddingTop: 30, paddingHorizontal: 24 }}>
              <View style={styles.welcome_msg}>
                <FontText
                  content={'Hey,'}
                  fontSize={24}
                  color={darkMode ? '#E4E4E4' : '#000'}
                />
                <FontText
                  content={'Jimmy!'}
                  fontSize={24}
                  fontWeight={700}
                  color={darkMode ? '#E4E4E4' : '#000'}
                />
              </View>
              <FontText
                content={`What's on your gardening agenda today?`}
                fontSize={14}
                fontWeight={500}
                width={200}
                color={darkMode ? '#E4E4E4' : '#000'}
              />
            </View>
            <View style={{ paddingHorizontal: 24 }}>
              <SearchBar darkMode={darkMode} />
            </View>
            {darkMode ? (
              <Image
                source={require('../../assets/images/dark-background-blur-cool-1.png')}
                alt="dark-bg-img"
                style={styles.bg_img}
              />
            ) : (
              <Image
                source={require('../../assets/images/2.0_background.png')}
                alt="bg-img"
                style={styles.bg_img}
              />
            )}
            <DashboardTasks darkMode={darkMode}/>
            <UpcomingEvents darkMode={darkMode}/>
          </View>
        </ScrollView>
        <AiPrompt />
        <NavBar darkMode={darkMode}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      height: windowHeight,
    },
    dashboard_content: {
      marginBottom: 100,
      width: "100%",
      marginTop: -30,
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
