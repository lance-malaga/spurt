import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import topPicks from "../../data/TopPicks.json"

// COMPONENTS
import FontText from "../components/FontText";
import PlantDetailCare from "../components/PlantDetailCare";
import PlantDetailJournal from "../components/PlantDetailJournal";
import PlantDetailInfo from "../components/PlantDetailInfo";
import PlantDetailNavItem from "../components/PlantDetailNavItem";

export default function PlantDetail({route}) {
    const { chosenPlant } = route.params;
    const navigation = useNavigation();
    const [selectedNavItem, setSelectedNavItem] = useState('Care');
    const [plant, setPlant] = useState();

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

    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image source={require("../../assets/icons/backIcon.png")} alt="back-icon" />
                </TouchableOpacity>
            </View>
            <FontText
                content={chosenPlant.name}
                fontSize={18}
                fontWeight={500}
                textAlign={"center"}
            />

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
                        <PlantDetailCare plantData={plant}/>
                    : selectedNavItem === "Details" ?
                        <PlantDetailInfo/>
                    :
                        <PlantDetailJournal/>
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 24,
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    content_container: {
        paddingTop: 60,
    }
});
