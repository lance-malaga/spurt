import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";
import FontText from "./FontText";

export default function SearchCard({ data, name, scientificName, difficulty }) {
	const navigation = useNavigation();

	const handleViewPress = () => {
		navigation.navigate('SearchPlantDetail', { item: data });
	};

	const ShadowPresets = {
        taskWidget: {
            distance: 6,
            startColor: 'rgba(20, 20, 20, 0.03)',
        },
    };

	return (
		<Shadow style={{width: '100%'}} {...ShadowPresets.taskWidget}>
			<View style={styles.container}>
				<View style={styles.container_details}>
					<View style={styles.img_container}>
						<Image
							source={{ uri: data.image.img1 }}
							style={styles.plant_image}
						/>
					</View>
					<View style={styles.content_container}>
						<View style={styles.plant_text}>
							<FontText
								content={name}
								fontSize={20}
								fontWeight={500}
							/>
							<FontText
								content={scientificName}
								fontWeight={500}
								color={'#7C7C7C'}
							/>
							<FontText
								content={difficulty}
								color={'#7C7C7C'}
							/>
							
						</View>
						<TouchableOpacity
							style={styles.buttonView}
							onPress={handleViewPress}
						>
							<FontText
								content={"View"}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Shadow>
	);
}

const styles = StyleSheet.create({
	container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: "white",
        borderRadius: 16,
	},
	container_details: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
    },
	img_container: {
		width: '40%',
        height: 105,
        justifyContent: 'center',
		overflow: 'visible',
		marginLeft: -20,
    },
	content_container: {
		gap: 15,
		alignItems: 'flex-start',
		width: '60%',
	},
	plant_image: {
        position: 'absolute',
		left: -5,
		objectFit: 'contain',
		width: 140,
		height: 150.
    },

	buttonView: {
		backgroundColor: "transparent",
		borderRadius: 30,
		paddingHorizontal: 19,
		paddingVertical: 5,
		borderColor: "#000",
		borderWidth: 2,
		marginLeft: 'auto',
	},
	buttonAdd: {
		backgroundColor: "#000",
		borderRadius: 30,
		paddingHorizontal: 22,
		paddingVertical: 8,
		color: "#fff",
	},
});