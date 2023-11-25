import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const SearchBar = ({ searchInput, setSearchInput }) => {
  const handleSearch = (searchValue) => {
		setSearchInput(searchValue);
	};

  const ShadowPresets = {
    searchShadow: {
        distance: 6,
        startColor: 'rgba(20, 20, 20, 0.05)',
        offset: [0, 3],
    },
  };

  return (
    <View style={{marginTop: 20}}>
      <Shadow
          style={{width: '100%',}}
          {...ShadowPresets.searchShadow}
      >
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
      </Shadow>

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
