import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import blackSaveIcon from "../../assets/icons/blackSaveIcon.png";
import whiteSaveIcon from "../../assets/icons/whiteSaveIcon.png";


const careSectionColors = {
  Temperature: "#FFBBB9",
  Water: "#C2E6FF",
  Fertilize: "#CDFBF6",
  Soil: "#FFE3C1",
  "Light Levels": "#C7F3C2",
};

export default function DetailScreen({ route }) {
  const { item } = route.params;
  const navigation = useNavigation();
  const [showTemperature, setShowTemperature] = useState(false);
  const [showWater, setShowWater] = useState(false);
  const [showFertilize, setShowFertilize] = useState(false);
  const [showSoil, setShowSoil] = useState(false);
  const [showLightLevels, setShowLightLevels] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  };
  //Function to map the data onto the care section cards
  function renderCareSection(title, content, isShown, toggleFunction, iconSource) {
    const sectionColor = careSectionColors[title];
  
    const closeOtherSections = () => {
      setShowTemperature(false);
      setShowWater(false);
      setShowFertilize(false);
      setShowSoil(false);
      setShowLightLevels(false);
    };
  
    return (
      <View
        style={[
          styles.careSection,
          isShown && styles.careSectionExpanded,
          { backgroundColor: isShown ? sectionColor : "transparent" },
        ]}
      >
        <View style={styles.careHeader}>
          <Image source={iconSource} style={styles.careIcon} />
          <Text style={styles.headerTabs2}>{title}</Text>
          <View style={styles.careChevronContainer}>
            <TouchableOpacity
              onPress={() => {
                closeOtherSections();
                toggleFunction(!isShown);
              }}
            >
              <Image
                source={require("../../assets/icons/ChevDownIcon.png")}
                style={[
                  styles.chevIcon,
                  isShown && styles.chevIconRotated,
                  { marginLeft: 10 },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
        {isShown && <Text style={styles.care}>{content}</Text>}
      </View>
    );
  }

  const handleAddToCollection = () => {
    setIsPressed(!isPressed);
    // logic for adding to collection, will work on later
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background-blur-warm.png")}
        style={styles.bgBlur}
      />
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require("../../assets/icons/backIcon.png")} style={styles.backButton} />
          </TouchableOpacity>
          <Text style={styles.plantName}>{item.detail}</Text>
        </View>
        <View style={styles.tomatoContainer}>
          <Image source={require("../../assets/images/tomato-img.png")} style={styles.tomato} />
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.headerTabs}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.filterTags}>
            <TouchableOpacity style={[styles.filterTag, { backgroundColor: "#AFD1F3" }]}>
              <Text style={styles.filterTagText}>Intermediate</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterTag, { backgroundColor: "#A1E5DF" }]}>
              <Text style={styles.filterTagText}>Vegetable</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterTag, { backgroundColor: "transparent", borderStyle:"solid", borderColor: "#000", borderWidth:2 }]}>
              <Text style={styles.filterTagText}>Annual</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterTag, { backgroundColor: "#FFCDE1" }]}>
              <Text style={styles.filterTagText}>Space-friendly</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterTag, { backgroundColor: "#FFDB80" }]}>
              <Text style={styles.filterTagText}>Full Sun</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterTag, { backgroundColor: "#FFA4A0" }]}>
              <Text style={styles.filterTagText}>Pet-friendly</Text>   
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTabs}>Care</Text>
          <View style={styles.careContainer}>
            {renderCareSection("Temperature", item.temperature, showTemperature, setShowTemperature, require("../../assets/icons/temperatureIcon.png"))}
            {renderCareSection("Water", item.water, showWater, setShowWater, require("../../assets/icons/waterIcon.png"))}
            {renderCareSection("Fertilize", item.fertilize, showFertilize, setShowFertilize, require("../../assets/icons/fertilizerIcon.png"))}
            {renderCareSection("Soil", item.soil, showSoil, setShowSoil, require("../../assets/icons/soilIcon.png"))}
            {renderCareSection("Light Levels", item.light, showLightLevels, setShowLightLevels, require("../../assets/icons/temperatureIcon.png"))}
          </View>
          <View style={styles.collectionButtonContainer}>
          <TouchableOpacity
              style={[
                styles.addToCollectionButton,
                isPressed && {
                  backgroundColor: "#fff",
                },
              ]}
              onPress={handleAddToCollection}
              >
              <Image source={isPressed ? blackSaveIcon : whiteSaveIcon}/>
              <Text style={[styles.addToCollectionText, isPressed && { color: "#000" }]}>
                {isPressed ? "Saved!" : "Add to Collection"}
              </Text>
          </TouchableOpacity>
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
  bgBlur: {
    position: "absolute",
    top: 0,
    width: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 16,
    marginTop: 60,
  },
  plantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },
  tomatoContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  tomato: {
    width: 150,
    height: 200,
  },
  backButton: {
    width: 16,
    height: 12.33,
    marginBottom: 15,
  },
  cardContainer: {
    position: "relative",
    borderTopLeftRadius: 55,
    marginHorizontal: 0,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  careContainer: {
    backgroundColor: "#FFF",
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginBottom: 75,
    marginTop: 30,
    marginLeft: 50,
    width: 380,
    elevation: 5,
  },
  description: {
    fontSize: 14,
    color: "#000",
    width: "90%",
    marginTop: 24,
    paddingLeft: 50,
  },
  centeredText: {
    flex: 1,
    alignItems: "center",
  },
  headerTabs: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 50,
    marginTop: 36,
    color: "#000",
  },
  headerTabs2: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 10,
    marginRight: 150,
    color: "#000",
  },
  care: {
    fontSize: 16,
    color: "#000",
  },
  filterTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 19,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  filterTag: {
    backgroundColor: "#AFD1F3",
    borderRadius: 20,
    paddingVertical: 11,
    paddingHorizontal: 20,
    margin: 10,
  },
  filterTagText: {
    color: "#000",
    fontSize: 12,
  },
  careSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 35,
    marginTop: -10,
    paddingLeft: 34,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    marginLeft: -18,


  },
  careHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  careIcon: {
    width: 26,
    height: 30,
    marginLeft: 5,
  },
  chevIcon: {
    width: 18,
    height: 10,
    alignItems: "flex-end",
  },
  careChevronContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
  },
  chevIconRotated: {
    transform: [{ rotate: "180deg" }],
  },
  addToCollectionButton: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    width: 220,
    alignItems: "center",
    marginBottom: 30,
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  addToCollectionText: {
    color: "#000",
    fontSize: 16,
  },
  collectionButtonContainer: {
    flex: 1,
    alignItems: "center",
  },
});
