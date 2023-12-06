import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontText from "./FontText";

// ASSETS
import ChevDownIcon from "../../assets/icons/ChevDownIcon.svg";
import AddToCollection from "../../assets/icons/add-to-collection.svg";
import ModalVectors from "../../assets/images/modal-add-vectors.svg";

export default function SearchPlantDetail({ route }) {
  const [showTemperature, setShowTemperature] = useState(false);
  const [showWater, setShowWater] = useState(false);
  const [showFertilize, setShowFertilize] = useState(false);
  const [showSoil, setShowSoil] = useState(false);
  const [showLightLevels, setShowLightLevels] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { item } = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleGoToDashboard = () => {
    navigation.navigate("Dashboard");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
    navigation.navigate('Search')
  };

  const openYourGarden = () => {
    setShowModal(false);
    navigation.navigate("YourGarden");
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
        style={[styles.careSection, isShown && styles.careSectionExpanded]}
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
          <TouchableOpacity onPress={() => handleGoToDashboard()}>
            <Text style={styles.dashboardBtn}>Next</Text>
          </TouchableOpacity>
        </View>

        {/* PLANT PHOTO */}
        <View style={styles.tomatoContainer}>
          <Image source={{ uri: item.image.img1 }} style={styles.tomato} />
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
            <View style={styles.filter_petFriendly}>
              <FontText content={"LIFESPAN"} fontSize={12} fontWeight={600} />
              <FontText content={"Annual"} fontSize={14} fontWeight={400} />
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
              <FontText content={"Water"} fontSize={16} fontWeight={600} />,
              <FontText content={item.care.water} />,
              showWater,
              setShowWater,
              require("../../assets/icons/waterIcon.png")
            )}
            {renderCareSection(
              <FontText content={"Fertilize"} fontSize={16} fontWeight={600} />,
              <FontText content={item.care.fertilize} />,
              showFertilize,
              setShowFertilize,
              require("../../assets/icons/fertilizerIcon.png")
            )}
            {renderCareSection(
              <FontText content={"Soil"} fontSize={16} fontWeight={600} />,
              <FontText content={item.care.soil} />,
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
              <FontText content={item.care.sunlight} />,
              showLightLevels,
              setShowLightLevels,
              require("../../assets/icons/temperatureIcon.png")
            )}
          </View>

          {/* SAVE */}
        </View>
      </ScrollView>
      <View style={styles.collectionButtonContainer}>
        <TouchableOpacity onPress={() => toggleModal()}>
          <View style={styles.chueyPrompt}>
            <AddToCollection />
          </View>
        </TouchableOpacity>
        <Modal visible={showModal} animationType="slide" transparent={true}>
          <View style={styles.modal__overlay}>
            <View style={styles.modal__container}>
              <View style={styles.modal_vectors}>
                <ModalVectors />
              </View>
              <FontText
                content={"Saved to Your Garden"}
                fontSize={24}
                fontWeight={500}
                marginTop={15}
              />
              {loading && (
                <FontText
                  content={`loading...`}
                  fontSize={16}
                  marginTop={15}
                  textAlign={"center"}
                />
              )}
              <View>
                <FontText
                  content={
                    "This plant has been added to your garden collection"
                  }
                  fontSize={16}
                  marginTop={15}
                  textAlign={"center"}
                  paddingBottom={30}
                />
                <View style={styles.nav__container}>
                  <TouchableOpacity
                    style={styles.nav__your_garden}
                    onPress={() => openYourGarden()}
                  >
                    <FontText
                      content={"View Collection"}
                      fontSize={18}
                      fontWeight={500}
                      color={"#FFFFFF"}
                      textAlign={"center"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.add_more_plants}
                    onPress={() => closeModal()}
                  >
                    <FontText
                      content={"Add more plants"}
                      fontSize={18}
                      fontWeight={500}
                      color={"#000"}
                      textAlign={"center"}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
    // marginLeft: 50,
    marginHorizontal: 50
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

  //Modal
  modal_vectors: {
    marginTop: -70,
  },
  modal__overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "#fff",
    padding: 24,
  },
  modal__container: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 40,
    paddingVertical: 25,
  },
  nav__your_garden: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#14171F",
    borderRadius: 50,
  },
  add_more_plants: {
    width: "100%",
    paddingVertical: 16,
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    marginTop: 15,
  },
});
