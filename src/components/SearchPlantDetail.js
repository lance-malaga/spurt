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
import blackSaveIcon from "../../assets/icons/blackSaveIcon.png";
import whiteSaveIcon from "../../assets/icons/whiteSaveIcon.png";

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

	function renderCareSection(name, content, isShown, toggleFunction, iconSource) {
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
			</TouchableOpacity>
		);
	}

	const handleAddToCollection = () => {
		setIsPressed(!isPressed);
		setGoToDashboard(true);
	};

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/images/background/plant-detail-bg.png")} style={styles.bgBlur} />
			<ScrollView style={styles.content}>
				{/* HEADER */}
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Image source={require("../../assets/icons/backIcon.png")} />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleGoToDashboard}>
						<Text style={styles.dashboardBtn}>Go to Dashboard</Text>
					</TouchableOpacity>
				</View>

				{/* PLANT PHOTO */}
				<View style={styles.tomatoContainer}>
					<Text style={styles.plantName}>{item.name} Plant</Text>
					<Image
						source={require("../../assets/images/1.3_detail-tomato-img.png")}
						style={styles.tomato}
					/>
				</View>

				{/* DETAILS */}
				<View style={styles.cardContainer}>
					<Text style={styles.headerTabs}>Description</Text>
					<Text style={styles.description}>{item.description}</Text>
					<View style={styles.filterTags}>
						{/* ... your filter tags code ... */}
						<View style={styles.filter_level}>
							<Text>LEVEL</Text>
							<Text>{item.difficulty}</Text>
						</View>
						<View style={styles.filer_type}>
							<Text>PLANT TYPE</Text>
							<Text>{item.type}</Text>
						</View>
						<View style={styles.filter_space}>
							<Text>SPACE REQUIREMENT</Text>
							<Text>lore ipsum</Text>
						</View>
						<View style={styles.filter_petFriendly}>
							<Text>LIFESPAN</Text>
							<Text>lore ipsum</Text>
						</View>
						<View style={styles.filter_lifeSpan}>
							<Text>OTHER</Text>
							<Text>{item.petFriendly ? 'Pet-friendly' : 'Not Pet-Friendly'}</Text>
						</View>
					</View>

					{/* CARE */}
					<Text style={styles.headerTabs}>Care</Text>
					<View style={styles.careContainer}>
					{renderCareSection(
						"Temperature",
						item.care.temperature,
						showTemperature,
						setShowTemperature,
						require("../../assets/icons/temperatureIcon.png")
					)}
					{renderCareSection(
						"Water",
						item.care.water,
						showWater,
						setShowWater,
						require("../../assets/icons/waterIcon.png")
					)}
					{renderCareSection(
						"Fertilize",
						item.care.fertilize,
						showFertilize,
						setShowFertilize,
						require("../../assets/icons/fertilizerIcon.png")
					)}
					{renderCareSection(
						"Soil",
						item.care.soil,
						showSoil,
						setShowSoil,
						require("../../assets/icons/soilIcon.png")
					)}
					{renderCareSection(
						"Light Levels",
						item.care.sunlight,
						showLightLevels,
						setShowLightLevels,
						require("../../assets/icons/temperatureIcon.png")
					)}
	
					</View>

					{/* SAVE */}
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
						<Image source={isPressed ? blackSaveIcon : whiteSaveIcon} />
						<Text
							style={[
							styles.addToCollectionText,
							isPressed && { color: "#000" },
							]}
						>
							{isPressed ? "Saved!" : "Add to Collection"}
						</Text>
						</TouchableOpacity>
						{goToDashboard && (
						<TouchableOpacity
							style={styles.goToDashboardButton}
							onPress={handleGoToDashboard}
						>
							<Text style={styles.goToDashboardButtonText}>
							Go to Dashboard
							</Text>
						</TouchableOpacity>
						)}
					</View>
				</View>
			</ScrollView>
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
		justifyContent: "flex-start",
		gap: 40,
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
		flex: 1,
		alignItems: "center",
	},
	goToDashboardButton: {
		paddingVertical: 15,
		width: 220,
		alignItems: "center",
		borderColor: "#fff",
		flexDirection: "row",
		justifyContent: "center",
		marginTop:-5,
		marginBottom:5,
	},
	goToDashboardButtonText: {
		color: "#000",
		fontSize: 16,
		textDecorationLine: "underline",
	},
});
