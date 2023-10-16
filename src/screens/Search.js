import React from 'react';
import { View, StyleSheet, Pressable, Text, ScrollView, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card'
import CategoriesCard from '../components/CategoriesCard';

export default function Search({ navigation }) {
  const handleCameraPress = () => {};
  const handleGalleryPress = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchBar />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleCameraPress}>
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleGalleryPress}>
          <Text style={styles.buttonText}>Gallery</Text>
        </Pressable>
      </View>
      <Text style={styles.picksHeader}>Top picks for summer</Text>
      <View style={styles.cardScroll}>
        <Card/>
      </View>
      <View style={styles.categories}>
        <Text style={styles.categoryHeader}></Text>
        <CategoriesCard/>
      </View>
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
  searchContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'darkgrey',
    textAlign: 'center',
  },
  categoryHeader: {
    fontSize: 18,
    color: 'darkgrey',
    paddingBottom: 15,
    marginLeft: 10,
    marginTop: -400,
  },
  picksHeader: {
    fontSize: 18,
    color: 'darkgrey',
    paddingTop: 40,
    paddingBottom: 15,
    marginLeft: -160,
  },
});
