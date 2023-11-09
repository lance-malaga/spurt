import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import cardData from '../../data/TopPicks.json';

export default function Card() {
	const navigation = useNavigation();

	const handleCardPress = (item) => {
		navigation.navigate('Detail', { item });
	};

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{cardData.map((card, index) => (
				<View key={index}>
					{card.topPick === true && 
						<TouchableOpacity key={index} style={styles.cardContainer} onPress={() => handleCardPress(card)}>
							<Image source={{uri: card.image.topPickImg}} style={{width: '100%', height: 140, marginBottom: 10}} />
							{/* {console.log(card.image.img1)} */}
							<View style={styles.cardContent}>
								<View style={styles.cardTextContainer}>
									<Text style={styles.cardType}>{card.type}</Text>
									<Text style={styles.cardTitle}>{card.name}</Text>
									<Text style={styles.cardDifficulty}>{card.difficulty}</Text>
								</View>
								<Image source={require('../../assets/icons/arrowSelect.png')} style={styles.arrowSelect} />
							</View>
						</TouchableOpacity>
					}
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		gap: 20,
	},
	cardContainer: {
		width: 174,
		paddingHorizontal: 15,
		paddingVertical: 17,
		borderRadius: 25,
		marginTop: 30,
		marginBottom: 40,
		marginRight: 25,
		backgroundColor: '#f4f4f4',
	},
	cardTitle: {
		color: "black",
		fontSize: 14,
		fontWeight: "bold",
	},
	cardImage: {
		
	},
	cardContent: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
	cardTextContainer: {
		
	},
	arrowSelect: {
		width: 14,
		height: 12,
	},
	cardType: {
		color: "black",
		fontSize: 10,
		color: "#8D8D8D",
	},
	cardDifficulty: {
		color: "black",
		fontSize: 10,
		color: "#404040",
	},
});
