import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontText from "./FontText";

// ASSETS
import ChevDownIcon from "../../assets/icons/ChevDownIcon.svg";

// ASSETS
import ChevDownIcon from "../../assets/icons/ChevDownIcon.svg";

export default function SearchPlantDetail({ route }) {
  const [showTemperature, setShowTemperature] = useState(false);
  const [showWater, setShowWater] = useState(false);
  const [showFertilize, setShowFertilize] = useState(false);
  const [showSoil, setShowSoil] = useState(false);
  const [showLightLevels, setShowLightLevels] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [goToDashboard, setGoToDashboard] = useState(false);
  const { item } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  function renderCareSection(
    name,
    content,
    isShown,
    toggleFunction,
    iconSource
  ) {
    const closeOtherSections = () => {
      setShowTemperature(false);
      setShowWater(false);
      setShowFertilize(false);
      setShowSoil(false);
      setShowLightLevels(false);
    };

		return (
			<TouchableOpacity
			onPress={() => {
				closeOtherSections();
				toggleFunction(!isShown);
			}}
			style={[
				styles.careSection,
				isShown && styles.careSectionExpanded,
			]}
			>
				<View style={styles.careHeader}>
				<Image source={iconSource} style={styles.careIcon} />
				<Text style={styles.headerTabs2}>{name}</Text>
					<View style={styles.careChevronContainer}>
						<TouchableOpacity>
						<ChevDownIcon
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
			</TouchableOpacity>
		);
	}

  const handleAddToCollection = () => {
    setIsPressed(!isPressed);
    setGoToDashboard(true);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background/plant-detail-bg.png")}
        style={styles.bgBlur}
      />
      <ScrollView style={styles.content}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require("../../assets/icons/backIcon.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoToDashboard}>
            <Text style={styles.dashboardBtn}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* PLANT PHOTO */}
        <View style={styles.tomatoContainer}>
		  <Image
          source={{ uri: item.image.img1 }}
          style={styles.tomato}
        />
        </View>

        {/* DETAILS */}
        <View style={styles.cardContainer}>
          <View style={styles.headerTabs}>
            <FontText content={"Description"} fontSize={18} fontWeight={700} />
          </View>

          <View style={styles.description}>
            <FontText
              content={item.description}
              fontSize={14}
              fontWeight={400}
            />
          </View>
          <View style={styles.filterTags}>
            <View style={styles.filter_level}>
              <FontText content={"LEVEL"} fontSize={12} fontWeight={600} />
              <FontText content={item.difficulty} />
            </View>
            <View style={styles.filer_type}>
              <FontText content={"PLANT TYPE"} fontSize={12} fontWeight={600} />
              <FontText content={item.type} />
            </View>
            <View style={styles.filter_space}>
              <FontText
                content={"SPACE REQUIREMENT"}
                fontSize={12}
                fontWeight={600}
              />
              <FontText
                content={"Space-friendly"}
                fontSize={14}
                fontWeight={400}
              />
            </View>
            <View style={styles.filter_petFriendly}>
              <FontText content={"LIFESPAN"} fontSize={12} fontWeight={600} />
              <FontText content={"Annual"} fontSize={14} fontWeight={400} />
            </View>
            <View style={styles.filter_lifeSpan}>
              <FontText content={"OTHER"} fontSize={12} fontWeight={600} />
              <FontText
                content={item.petFriendly ? "Pet-friendly" : "Not Pet-Friendly"}
              />
            </View>
          </View>

          {/* CARE */}
          <View style={styles.headerTabs}>
            <FontText content={"Care"} fontSize={18} fontWeight={700} />
          </View>
          <View style={styles.careContainer}>
            {renderCareSection(
              <FontText
                content={"Temperature"}
                fontSize={16}
                fontWeight={600}
              />,
              <FontText content={item.care.temperature} />,
              showTemperature,
              setShowTemperature,
              require("../../assets/icons/temperatureIcon.png")
            )}
            {renderCareSection(
              <FontText
                content={"Water"}
                fontSize={16}
                fontWeight={600}
              />,
			  <FontText content={item.care.water} />,
              showWater,
              setShowWater,
              require("../../assets/icons/waterIcon.png")
            )}
            {renderCareSection(
              <FontText
			  content={"Fertilize"}
			  fontSize={16}
			  fontWeight={600}
			/>,
			<FontText content={item.care.fertilize}/>,
              showFertilize,
              setShowFertilize,
              require("../../assets/icons/fertilizerIcon.png")
            )}
            {renderCareSection(
              <FontText
			  content={"Soil"}
			  fontSize={16}
			  fontWeight={600}
			/>,
			<FontText content={item.care.soil}/>,
              showSoil,
              setShowSoil,
              require("../../assets/icons/soilIcon.png")
            )}
            {renderCareSection(
              <FontText
			  content={"Light Levels"}
			  fontSize={16}
			  fontWeight={600}
			/>,
			<FontText content={item.care.sunlight}/>,
              showLightLevels,
              setShowLightLevels,
              require("../../assets/icons/temperatureIcon.png")
            )}
          </View>

          {/* SAVE */}
        </View>
      </ScrollView>
      <View style={styles.collectionButtonContainer}>
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/add-to-collection.png")}
              />
            </TouchableOpacity>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgBlur: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    zIndex: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginTop: 60,
  },
  dashboardBtn: {
    textDecorationLine: "underline",
    fontSize: 16,
  },

  // PHOTO CONTAINER
  tomatoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85,
    marginBottom: 30,
  },
  plantName: {
    fontSize: 50,
    fontWeight: "bold",
  },
  tomato: {
    width: 150,
    height: 200,
  },

  cardContainer: {
    position: "relative",
    borderTopLeftRadius: 50,
    marginHorizontal: 0,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  careContainer: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginBottom: 75,
    marginTop: 30,
    marginLeft: 16,
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
    justifyContent: "flex-start",
    gap: 25,
    marginLeft: 40,
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
    marginTop: -25,
    marginBottom: 10,
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
    position: "absolute",
    top: "90%",
    left: 80,
  },
  goToDashboardButton: {
    paddingVertical: 15,
    width: 220,
    alignItems: "center",
    borderColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -5,
    marginBottom: 5,
  },
  goToDashboardButtonText: {
    color: "#000",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
