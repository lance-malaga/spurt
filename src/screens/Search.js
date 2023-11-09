import React from "react";
import {
	View,
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import CategoriesCard from "../components/CategoriesCard";
import topPicks from "../../data/TopPicks.json"
import SearchCard from "../components/SearchCard";
import AccessGallery from "../components/AccessGallery";
import FontText from "../components/FontText";

export default function Search() {
	const [searchInput, setSearchInput] = useState('');
	const [filteredResults, setFilteredResults] = useState(topPicks);

	const navigation = useNavigation();

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
		<ScrollView style={styles.container}>
			<FontText 
				content={'Look For A Plant'}
				fontSize={24}
				textAlign={'center'}
				paddingTop={30}
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
						content={`Results: ${filteredResults.length}`}
						fontSize={16}
						fontWeight={500}
						paddingTop={20}
						paddingLeft={25}
					/>
					{filteredResults.map((item, index) => {
						return (
							<View key={index}>
								<SearchCard 
									name={item.name}
									scientificName={item.scientificName}
									difficulty={item.difficulty}
									// image={}
								/>
							</View>
						);
					})}
				</>
			) : (
				<>
					<View style={styles.picksContainer}>
						<FontText 
							content={'TOP PICKS FOR SUMMER'}
							fontSize={18}
							fontWeight={700}
						/>
						<FontText
							content={'Check out the plants ready this summer'}
							fontSize={12}
							marginTop={-5}
						/>
					</View>
					<View style={styles.cardContainer}>
						<Card />
					</View>
					<View style={styles.categoriesContainer}>
						<FontText 
							content={'CATEGORIES'}
							fontSize={18}
							fontWeight={700}
						/>
						<FontText 
							content={'Care guides and tips for every plant'}
							fontSize={12}
							marginTop={-5}
						/>
					</View>
					<View style={styles.categoriesCardContainer}>
						<CategoriesCard />
					</View>
				</>
			)}
		</ScrollView>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFF",
		paddingTop: 30,
	},
	cardContainer: {
		paddingLeft: 20,
	},
	searchContainer: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	categoriesCardContainer: {
		width: "100%",
		alignItems: "center",
		marginTop: 16,
		paddingBottom: 25,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
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
	picksContainer: {
		alignItems: "flex-start",
		paddingTop: 30,
		paddingBottom: 10,
		paddingLeft: 30,
	},
	categoriesContainer: {
		paddingLeft: 30,
		marginTop: 10,
	},
});