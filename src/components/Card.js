import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import cardData from '../../data/TopPicks.json';
import strawberryCardImage from '../../assets/images/strawberryCardImg.png';
import tomatoeCardImage from '../../assets/images/tomatoeCardImg.png';
import cucumberCardImage from '../../assets/images/cucumberCardImg.png';
import squashCardImage from '../../assets/images/squashCardImg.png';
import spinachCardImage from '../../assets/images/spinachCardImg.png';
import orangeCardImage from '../../assets/images/orangeCardImg.png';


export default function Card() {
  const imageMapping = {
    1: tomatoeCardImage,
    2: strawberryCardImage,
    3: cucumberCardImage,
    4: squashCardImage,
    5: spinachCardImage,
    6: orangeCardImage,
  };
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cardData.map((card, index) => (
          <TouchableOpacity key={index} style={styles.cardContainer} onPress={() => handleCardPress(card)}>
            <Image source={imageMapping[card.id]} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardType}>{card.type}</Text>
                <Text style={styles.cardTitle}>{card.name}</Text>
                <Text style={styles.cardDifficulty}>{card.difficulty}</Text>
              </View>
              <Image source={require('../../assets/icons/arrowSelect.png')} style={styles.arrowSelect} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0,
  },
  cardContainer: {
    width: 174,
    height: 140,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 100,
  },
  cardTitle: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  cardImage: {
    width: 125,
    height: 125,
    alignSelf: "center",
    marginTop: -80,
  },
  cardContent: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 20
  },
  cardTextContainer: {
    textAlign: "left",
    width: 100,
    paddingLeft: 15,
  },
  arrowSelect: {
    width: 10,
    height: 8,
    position: "absolute",
    bottom: 12,
    right: 15,
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
