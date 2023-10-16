import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

const cardsData = [
  {
    id: 1,
    imageSource: require('../../assets/images/categoryCard.png'),
  },
  {
    id: 2,
    imageSource: require('../../assets/images/categoryCard.png'),
  },
  {
    id: 3,
    imageSource: require('../../assets/images/categoryCard.png'),
  },
  {
    id: 4,
    imageSource: require('../../assets/images/categoryCard.png'),
  },
  {
    id: 5,
    imageSource: require('../../assets/images/categoryCard.png'),
  },
];

export default function CategoriesCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.picksHeader}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cardsData.map((card) => (
          <View key={card.id} style={styles.card}>
            <Image
              source={card.imageSource}
              style={styles.cardImage}
              alt={card.title}
            />
            <Text style={styles.cardTitle}>{card.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  card: {
    width: 120,
    margin: 10,
  },
  cardTitle: {
    color: 'darkgrey',
    marginTop: 5,
    textAlign: 'center',
  },
  picksHeader: {
    fontSize: 18,
    color: 'darkgrey',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 10, 
  },
});
