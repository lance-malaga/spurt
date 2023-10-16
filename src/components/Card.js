import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';

const cardsData = [
    {
      id: 1,
      imageSource: require('../../assets/images/cardPlaceholder.png'),
    },
    {
      id: 2,
      imageSource: require('../../assets/images/cardPlaceholder.png'),
    },
    {
      id: 3,
      imageSource: require('../../assets/images/cardPlaceholder.png'),
    },
    {
      id: 4,
      imageSource: require('../../assets/images/cardPlaceholder.png'),
    },
    {
      id: 5,
      imageSource: require('../../assets/images/cardPlaceholder.png'),
    },
  ];

  export default function Card() {  
    return (
      <View style={styles.container}>
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
    cardTitle: {
      color: 'darkgrey',
      marginTop: 5,
      textAlign: 'center',
    },
  });
  