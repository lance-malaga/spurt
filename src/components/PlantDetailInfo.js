import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useState } from "react";
import FontText from "./FontText";

export default function PlantDetailInfo({plantData}) {
    const [showGetToKnow, setShowGetToKnow] = useState(false);
	const [showHowToPlant, setShowHowToPlant] = useState(false);
	const [showPrune, setShowPrune] = useState(false);
	const [showHaversting, setShowHaversting] = useState(false);
	const [showProblems, setShowProblems] = useState(false);

    let howToPlantList = plantData.howToPlant;
    let plantIssueList = plantData.care.pests;

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
				{isShown && <Text>{content}</Text>}
			</TouchableOpacity>
		);
	}

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "Get To Know",
                        <View style={styles.cardInfo}>
                            <Image style={styles.cardImage} source={require("../../assets/images/get-to-know.png")} />                          
                            <Text style={[styles.cardText, styles.cardTextContainer]}>{plantData.getToKnow}</Text>
                        </View>,
                        showGetToKnow,
                        setShowGetToKnow,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "How To Plant",
                        <View style={styles.cardInfo}>
                            <Image style={styles.cardImage} source={require("../../assets/images/how-to-plant.png")} />
                            <View style={styles.cardTextContainer}>
                                {howToPlantList.map((data, index) => (
                                    <View key={index} style={styles.cardListItem}>
                                        <Text style={{paddingLeft: 10, fontWeight: '500'}}>{index + 1}.</Text>
                                        <Text style={styles.cardListText}> {data.description}</Text>                                      
                                    </View>
                                ))}
                            </View>
                        </View>,
                        showHowToPlant,
                        setShowHowToPlant,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "When To Prune",
                        <View style={styles.cardInfo}>
                            <Image style={styles.cardImage} source={require("../../assets/images/when-to-prune.png")} />
                            <Text style={[styles.cardText, styles.cardTextContainer]}>{plantData.care.prune}</Text>
                        </View>,
                        showPrune,
                        setShowPrune,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "Harvesting",
                        <View style={styles.cardInfo}>
                            <Image style={styles.cardImage} source={require("../../assets/images/haversting.png")} />
                            <Text style={[styles.cardText, styles.cardTextContainer]}>{plantData.haversting}</Text>
                        </View>,
                        showHaversting,
                        setShowHaversting,
                    )}
                </View>
                <View style={styles.careContainer}>
                    {renderCareSection(
                        "Common Problems",
                        <View style={styles.cardInfo}>
                            <Image style={styles.cardImage} source={require("../../assets/images/common-problems.png")} />
                            <View style={styles.cardTextContainer}>
                                {plantIssueList.map((data, index) => (
                                    <View key={index} style={styles.cardListItem}>
                                        <Text style={{paddingLeft: 10, fontWeight: '500'}}>{index + 1}. </Text>
                                        <Text style={styles.cardListText}>{data.name}: {data.description}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>,
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
        height: 1100,
        marginLeft: 25,
        marginRight: 25
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
		color: "#000",
	},
    chevIconRotated: {
		transform: [{ rotate: "180deg" }],
	},
    careContainer: {
        gap: 10,
		backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 20,
		marginBottom: 15,
		elevation: 5,
	},
    cardInfo: {
        paddingTop: 20,
    },  
    cardTextContainer: {
        paddingTop: 20,
        fontSize: 14
    },
    cardListItem: {
        backgroundColor: "white",
        flexDirection: 'row',
        width: 310
    },
    cardImage: {
        marginLeft: 10
    },
    cardText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        width: 310
    },
    cardListText: {
        width: 300,
        fontSize: 14
    },
})