import React from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

// icons
import HomeBlack from '../../assets/icons/home-black.svg';
import HomeBlue from '../../assets/icons/home-blue.svg';
import MyGardenBlack from '../../assets/icons/my-garden-black.svg';
import MyGardenBlue from '../../assets/icons/my-garden-blue.svg';
import PlantAidBlack from '../../assets/icons/plantaid-black.svg';
import PlantAidBlue from '../../assets/icons/plantaid-blue.svg';
import CommunityBlack from '../../assets/icons/community-black.svg';
import CommunityBlue from '../../assets/icons/community-blue.svg';
import MyGardenDark from '../../assets/icons/my-garden-dark-mode.svg';
import PlantAidDark from '../../assets/icons/plantaid-dark-mode.svg';
import CommunityDark from '../../assets/icons/community-dark-mode.svg';

export default function NavBar({ darkMode }) {
  const route = useRoute();
  const navigation = useNavigation();

  const dark = (data) => {
    if (route.name === data.path) {
      return darkMode ? data.image3 : data.image2;
    } else {
      return darkMode ? data.image3 : data.image;
    }
  };

  const navList = [
    {
      path: 'Dashboard',
      image: <HomeBlack />,
      image2: <HomeBlue />,
      image3: <HomeBlue/>
    },
    {
      path: 'YourGarden',
      image: <MyGardenBlack />,
      image2: <MyGardenBlue />,
      image3: <MyGardenDark />,
    },
    {
      path: 'PlantAidOnboarding',
      image: <PlantAidBlack />,
      image2: <PlantAidBlue />,
      image3: <PlantAidDark />,
    },
    {
      path: 'CommunityGarden',
      image: <CommunityBlack />,
      image2: <CommunityBlue />,
      image3: <CommunityDark />,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#141B30' : '#fff' }]}>
      {navList.map((data, index) => {
        return (
          <Pressable
            style={[styles.image, { backgroundColor: route.name === data.path ? 'rgba(255,255,255,0)' : 'transparent' }]}
            key={index}
            onPress={() => navigation.navigate(data.path)}
          >
            {dark(data)}
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    gap: 35,
    zIndex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 10,
  },
});
