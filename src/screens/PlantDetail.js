import { Image, StyleSheet, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import topPicks from "../../data/TopPicks.json"
import { SwipeablePanel } from 'rn-swipeable-panel';

// COMPONENTS
import FontText from "../components/FontText";
import PlantDetailCare from "../components/PlantDetailCare";
import PlantDetailJournal from "../components/PlantDetailJournal";
import PlantDetailInfo from "../components/PlantDetailInfo";
import PlantDetailNavItem from "../components/PlantDetailNavItem";
import GlobalStyles from "../components/GlobalStyles";
import PlantProgressDefault from "../components/PlantProgressDefault";
import PlantProgress from "../components/PlantProgress";

export default function PlantDetail({route}) {
    const { chosenPlant } = route.params;
    const navigation = useNavigation();
    const [selectedNavItem, setSelectedNavItem] = useState('Care');
    const [plant, setPlant] = useState();
    const [showModal, setShowModal] = useState(false);

	useEffect(() => {
        const filteredData = topPicks.filter(
            (item) =>
                item.name.toLowerCase().includes(chosenPlant.name.toLowerCase())
        );
        setPlant(filteredData[0]);
	}, []);

    const navList = ["Details", "Care", "Journal"];

	const handleGoBack = () => {
		navigation.goBack();
	};
    const handleNavItemPress = (item) => {
        setSelectedNavItem(item)
    }
    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <SafeAreaView contentContainerStyle={GlobalStyles.androidSafeArea}>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/background/yg-plant-detail-bg.png')}
                    alt="bg-img"
                    style={styles.bg_img}
                />
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Image source={require("../../assets/icons/backIcon.png")} alt="back-icon" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.plant_progress__btn}
                        onPress={toggleModal}
                    >
                        <FontText
                            content={'Plant Progress'}
                            fontSize={13}
                            color={'#14171F'}
                            paddingBottom={-15}
                        />
                    </TouchableOpacity>
                </View>
                <View  style={styles.plant_img}>
                    <Image source={chosenPlant.image[1]} alt={chosenPlant.name} />
                </View>

                {/* CONTENT */}
                <View style={styles.nav}>
                    {navList.map((item, index) => {
                        return (
                            <PlantDetailNavItem 
                                key={index}
                                name={item}
                                selected={selectedNavItem === item} //true or false
                                onPress={() => handleNavItemPress(item)}
                            />
                        )
                    })}
                </View>
                { plant &&
                    <View style={styles.content_container}>
                        {selectedNavItem === "Care" ? 
                            <PlantDetailCare 
                                plantData={plant}
                                optimalConditions={chosenPlant.optimalConditions}
                                waterStatus={chosenPlant.waterStatus}
                                fertilizeStatus={chosenPlant.fertilizeStatus}
                                pruneStatus={chosenPlant.pruneStatus}
                            />
                        : selectedNavItem === "Details" ?
                            <PlantDetailInfo plantData={plant}/>
                        :
                            <PlantDetailJournal/>
                        }
                    </View>
                }
            </View>
            <SwipeablePanel
                isActive={showModal}
                onClose={() => setShowModal(false)}
                onPressCloseButton={() => setShowModal(false)}
                closeRootSwipeablePanel={() => setShowModal(false)}
                closeSwiper={() => setShowModal(false)}
                fullWidth
                onlyLarge
                // style={{height: '80%'}}
                // showCloseButton
            >
                {chosenPlant.name === 'Sunflower' ? (
                    <PlantProgress/>
                ): (
                    <PlantProgressDefault/>
                )}
            </SwipeablePanel>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        height: '100%',
        backgroundColor: 'white',
    },
    bg_img: {
        position: "absolute",
        objectFit: "cover",
        zIndex: -1,
        width: "100%",
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    plant_progress__btn: {
        borderBottomWidth: 1,
    },
    plant_img:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 50,
    },

    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 48,
    },
    content_container: {
        paddingTop: 35,
    }
});
