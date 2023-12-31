import React from "react";
import {
	View,
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
	TouchableOpacity,
	Text,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import CategoriesCard from "../components/CategoriesCard";
import topPicks from "../../data/TopPicks.json"
import SearchCard from "../components/SearchCard";
import AccessGallery from "../components/AccessGallery";
import FontText from "../components/FontText";

export default function Search() {
	const [searchInput, setSearchInput] = useState('');
	const [filteredResults, setFilteredResults] = useState(topPicks);

	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};
	const handleGoToDashboard = () => {
		navigation.navigate("Dashboard");
	};

	useEffect(() => {
		if (searchInput !== "") {
			const filteredData = topPicks.filter(
				(item) =>
					item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
					item.difficulty.toLowerCase().includes(searchInput.toLowerCase()) ||
					item.scientificName.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
			);
			setFilteredResults(filteredData);
		}
	}, [searchInput]);

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/background/background-blur.png")}
				style={styles.bg_img}
			/>
			<ScrollView contentContainerStyle={{paddingBottom: 50}}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Image source={require("../../assets/icons/backIcon.png")} />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleGoToDashboard}>
						<Text style={styles.dashboardBtn}>Next</Text>
					</TouchableOpacity>
				</View>
				<FontText 
					content={'Look For A Plant'}
					fontSize={24}
					fontWeight={700}
					textAlign={'center'}
					marginTop={25}
				/>
				<FontText 
					content={'Add new plants to your garden collection'}
					textAlign={'center'}
				/>
				<View style={styles.searchContainer}>
					<SearchBar searchInput={searchInput} setSearchInput={setSearchInput}/>
				</View>
				<View style={styles.buttonContainer}>
					<View style={styles.buttonGroup}>
						<Pressable style={styles.button} onPress={() => navigation.navigate("TakePic")}>
							<Image source={require("../../assets/icons/camera-icon.png")} />
							<FontText
								content={'Camera'}
								color={'#fff'}
								textAlign= {'center'}
								paddingLeft={10}
							/>
						</Pressable>
					</View>
					<View style={styles.buttonGroup}>
						<AccessGallery />
					</View>
				</View>
				{searchInput.length ? (
					<>
						<FontText
							content={`Results (${filteredResults.length})`}
							color={'#9B9B9B'}
							fontSize={16}
							paddingTop={20}
							paddingLeft={25}
							paddingBottom={20}
						/>
						<View style={styles.searchResultsContainer}>
							{filteredResults.map((item, index) => {
								return (
									<SearchCard
										key={index}
										data={item}
										name={item.name}
										scientificName={item.scientificName}
										difficulty={item.difficulty}
									/>
								);
							})}
						</View>
					</>
				) : (
					<>
						<View style={styles.categoriesContainer}>
							<FontText 
								content={'CATEGORIES'}
								fontSize={18}
								fontWeight={700}
							/>
							<FontText 
								content={'Care guides and tips for every plant'}
								paddingBottom={20}
							/>
						</View>
						<View style={styles.categoriesCardContainer}>
							<CategoriesCard />
						</View>
					</>
				)}

			</ScrollView>
		</View>
	);			
}
const styles = StyleSheet.create({
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		marginTop: 50,
	},
	bg_img: {
		position: "absolute",
		zIndex: -1,
		width: "100%",
		height: 880,
	},
	dashboardBtn: {
		textDecorationLine: "underline",
		fontSize: 16,
	},
	searchContainer: {
		paddingHorizontal: 24,
		marginBottom: 15,
	},
	categoriesCardContainer: {
		paddingHorizontal: 24,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	buttonGroup: {
		alignItems: "center",
		marginHorizontal: 5,
	},
	button: {
		backgroundColor: "#000",
		paddingHorizontal: 45,
		paddingVertical: 15,
		borderRadius: 24,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	categoriesContainer: {
		paddingHorizontal: 24,
		marginTop: 30,
	},
	searchResultsContainer: {
		paddingHorizontal: 24,
        gap: 25,
	}
});