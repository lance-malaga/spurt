import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, FlatList } from "react-native";
import CircularCarouselList from "./CircularCarouselList";
// import { useSharedValue } from "react-native-reanimated";

export default function CirclularCarousel({data}) {
    // const contentOffset = useSharedValue(0);
    
    return (
        <FlatList 
            data = {data}
            keyExtractor={(_, index) => index.toString()}
            style={styles.list}
            horizontal
            scrollEventThrottle={16}
            onScroll={(event) => {
                console.log(event.nativeEvent.contentOffset.x);
            }}
            renderItem={({item, index}) => {
                return <CircularCarouselList image={item} index={index} />
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
    },
  });
  