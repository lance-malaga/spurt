import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleSearch = (searchValue) => {
		setSearchInput(searchValue);
	};

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/search-icon.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchInput}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 20,
    width: "100%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    width: 22,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
