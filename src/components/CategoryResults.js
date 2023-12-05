import { useEffect } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useSearchOnboarding from "../../utils/searchOnboarding";
import FontText from "./FontText";

// COMPONENTS
import SearchCard from "./SearchCard";

export default function CategoryResults ({ route }) {
	const navigation = useNavigation();
	const {category}  = route.params;
	const {filteredResults, filterList} = useSearchOnboarding(category);

	const handleGoBack = () => {
		navigation.goBack();
	};
	
	useEffect(() => {
        filterList();
    }, []);

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
				</View>
				<FontText 
					content={category}
					fontSize={24}
					fontWeight={700}
					textAlign={'center'}
					marginTop={20}
				/>
				<FontText
					content={`Results (${filteredResults.length})`}
					color={'#9B9B9B'}
					fontSize={16}
					paddingTop={20}
					paddingLeft={24}
					paddingBottom={30}
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
			</ScrollView>
		</View>
  );
};

const styles = StyleSheet.create({
	bg_img: {
		position: "absolute",
		zIndex: -1,
		width: "100%",
		height: 880,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 24,
		marginTop: 50,
	},
	searchResultsContainer: {
		paddingHorizontal: 24,
        gap: 25,
	}
});