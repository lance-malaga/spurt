import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

//icons
import SearchIcon from "../../assets/icons/search-icon.svg";

const SearchBar = ({ searchInput, setSearchInput, darkMode }) => {
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
    <View style={{ marginTop: 20 }}>
      <Shadow
        style={{ width: '100%' }}
        {...ShadowPresets.searchShadow}
      >
        <View style={[styles.container, { backgroundColor: darkMode ? '#3F4557' : 'white' }]}>
          <View style={styles.searchIcon}>
            <SearchIcon/>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#E4E4E4"
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
    color: '#000',
  },
});

export default SearchBar;