import React from "react";
import { StyleSheet, Text, View, ScrollView, Image, Pressable, SafeAreaView, Dimensions } from "react-native";
// import { useAnimatedStyle } from "react-native-reanimated";

export default function CircularCarouselList({image, index, contentOffset}) {
    const {width: windowWidth} = Dimensions.get('window');
    const listItemWidth = windowWidth / 4;

    // const rStyle = useAnimatedStyle(() => {
    //     return {
    //         transform: [
    //             {
    //                 translateY: 0,
    //             }
    //         ]
    //     }
    // })

    // const 

    return (
        <View style={[{
            width: listItemWidth,
            // backgroundColor: 'red',
            // marginHorizontal: 10,
            alignItems: "center"
        }, // rStyle
        ]}>
            <Image
                source={image}
                style={styles.icon}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        margin: 3,
        borderRadius: 200,
    }
  });