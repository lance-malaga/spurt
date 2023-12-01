import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Components
import FontText from "./FontText";
import DarkModeSwitch from "./DarkModeSwitch";
import { useDarkMode } from '../components/DarkModeContext';

const SideNav = () => {

  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Image
          source={require("../../assets/icons/header_user.png")}
          alt={"header_user"}
        />
        <Pressable onPress={toggleSideNav}>
          <Image
            source={require("../../assets/icons/header_menu.png")}
            alt={"header_menu"}
          />
        </Pressable>
      </View>

      <Modal transparent visible={isOpen}>
        <View style={styles.sideContainer}>
          {darkMode ? (
            <Image
              style={[styles.backgroundImage, { left: 72, top: 0 }]}
              source={require("../../assets/images/SideNavBackground-dark-mode.png")}
              alt={"SideNavBackground"}
            />
          ) : (
            <Image
              style={[styles.backgroundImage, { left: 72, top: 0 }]}
              source={require("../../assets/images/SideNavBackground.png")}
              alt={"SideNavBackground"}
            />
          )}

          {darkMode ? (
            <Image
              style={[styles.shadowBackground, { left: 80, top: 20 }]}
              source={require("../../assets/images/shadowBackground-dark-mode.png")}
              alt={"shadowBackground"}
            />
          ) : (
            <Image
              style={[styles.shadowBackground, { left: 80, top: 20 }]}
              source={require("../../assets/images/shadowBackground.png")}
              alt={"shadowBackground"}
            />
          )}

          <View style={styles.menuList}>
            <Pressable onPress={toggleSideNav}>
              {darkMode ? (
                <Image
                  style={[styles.close, { marginLeft: 230, marginTop: -5 }]}
                  source={require("../../assets/images/close-dark-mode.png")}
                  alt={"closeIcon"}
                />
              ) : (
                <Image
                  style={[styles.close, { marginLeft: 230, marginTop: -5 }]}
                  source={require("../../assets/images/close.png")}
                  alt={"closeIcon"}
                />
              )}
            </Pressable>

            {darkMode ? (
              <Image
                style={[styles.worker, { top: 100, left: 245 }]}
                source={require("../../assets/images/workers-dark-mode.png")}
                alt={"worker"}
              />
            ) : (
              <Image
                style={[styles.worker, { top: 100, left: 245 }]}
                source={require("../../assets/images/workers.png")}
                alt={"worker"}
              />
            )}

            <View style={styles.content}>
              <View style={styles.title}>
                <FontText
                 content={"Spurt"} 
                 fontSize={48} 
                 fontWeight={600} 
                 color={darkMode ? '#E4E4E4' : '#000'}
                 />
              </View>

              <View style={styles.options}>
                <Pressable onPress={() => navigation.navigate("Dashboard")}>
                  <FontText 
                  content={"Home"} 
                  fontSize={18} 
                  color={darkMode ? '#E4E4E4' : '#000'}
                  />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("PlantAidOnboarding")}>
                  <FontText 
                  content={"PlantAid"} 
                  fontSize={18} 
                  color={darkMode ? '#E4E4E4' : '#000'}
                  />
                </Pressable>
                <FontText 
                content={"Settings"} 
                fontSize={18} 
                color={darkMode ? '#E4E4E4' : '#000'}
                />
                <FontText 
                content={"Privacy Policy"} 
                fontSize={18} 
                color={darkMode ? '#E4E4E4' : '#000'}
                />
                <View style={{ width: 100 }}>
                  <FontText 
                  content={"Terms and Conditions"} 
                  fontSize={18} 
                  color={darkMode ? '#E4E4E4' : '#000'}
                  />
                </View>
              </View>

              <DarkModeSwitch onToggle={toggleDarkMode} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingTop: 20,
    marginBottom: -15,
  },
  headingContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 35,
    paddingVertical: 30,
  },
  sideContainer: {
    flex: 1,
    backgroundColor: "rgba(92, 92, 92, .7)",
  },
  backgroundImage: {
    position: "absolute",
    left: 72,
    top: 0,
  },
  shadowBackground: {
    position: "absolute",
    left: 80,
    top: 20,
  },
  menuList: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    marginLeft: 30,
  },
  close: {
    marginLeft: 230,
    marginTop: -5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    marginTop: 50,
  },
  worker: {
    position: "absolute",
    top: 100,
    left: 245,
  },
  content: {
    marginTop: 20,
    fontSize: 18,
  },
  options: {
    marginTop: 60,
    gap: 20,
  },
});

export default SideNav;
