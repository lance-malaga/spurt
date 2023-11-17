import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import FontText from "./FontText";

export default function PlantDetailInfo({plantData}) {
    const [showGetToKnow, setShowGetToKnow] = useState(false);
	const [showHowToPlant, setShowHowToPlant] = useState(false);
	const [showPrune, setShowPrune] = useState(false);
	const [showHaversting, setShowHaversting] = useState(false);
	const [showProblems, setShowProblems] = useState(false);
    // console.log("pests", plantData.care.pests[0].name);

    function renderCareSection(name, content, isShown, toggleFunction) {
		const closeOtherSections = () => {
			setShowGetToKnow(false);
			setShowHowToPlant(false);
			setShowPrune(false);
			setShowHaversting(false);
			setShowProblems(false);
		};

		return (
			<TouchableOpacity
                onPress={() => {
                    closeOtherSections();
                    toggleFunction(!isShown);
                }}
			>
				<View style={styles.header}>
                    <Text style={styles.headerTitle}>{name}</Text>
                    <Image
                        source={require("../../assets/icons/ChevDownIcon.png")}
                        style={[
                            styles.chevIcon,
                            isShown && styles.chevIconRotated,
                        ]}
                    />
				</View>
				{isShown && <Text style={styles.care}>{content}</Text>}
			</TouchableOpacity>
		);
	}

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "Get To Know",
                        plantData.getToKnow,
                        showGetToKnow,
                        setShowGetToKnow,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "How To Plant",
                        plantData.howToPlant.map((data, index) => (
                            <View style={{flexDirection: "row"}}>
                                <Text style={{paddingLeft: 10}}>{index + 1}. </Text>
                                <Text style={{width:300, paddingLeft: 10}}>{data.description}: </Text>
                            </View>
                        )),
                        showHowToPlant,
                        setShowHowToPlant,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "When To Prune",
                        plantData.care.prune,
                        showPrune,
                        setShowPrune,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "Harvesting",
                        plantData.haversting,
                        showHaversting,
                        setShowHaversting,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "Common Problems",
                        plantData.care.pests.map((data, index) => (
                            <View>
                                <Text>{index + 1}. {data.name}: </Text>
                                <Text style={{width:315, paddingLeft: 10}}>{data.description}</Text>
                            </View>
                        )),
                        showProblems,
                        setShowProblems,
                    )}
                </View>
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        height: 1000
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTitle: {
        fontSize: 18
    },
    headerTabs: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 50,
		marginTop: 36,
		color: "#000",
	},
    careContainer: {
        gap: 10,
		backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20,
		marginBottom: 15,
		elevation: 5,
	},
})