// import React from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import SearchResults from "../../data/SearchResults.json";
// import FontText from "./FontText";

// const CategoryResults = () => {
//   const { vegetables } = SearchResults;

//   const handleViewPress = () => {
//     navigation.navigate('SearchPlantDetail', { item: data });
//   };

//   const imageMapping = {
//     Lettuce: require("../../assets/images/lettuce-img.png"),
//     Spinach: require("../../assets/images/spinach-img.png"),
//     "Summer Squash": require("../../assets/images/squash-img.png"),
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require("../../assets/images/background-blur-cool-1.png")}
//         style={styles.bgImg}
//       />
//       <ScrollView>
//         <Text style={styles.resultHeader}>Results (3)</Text>
//         {vegetables.map((vegetable, index) => (
//           <View key={index} style={styles.card}>
//             <Image source={imageMapping[vegetable.name]} style={styles.image} />
//             <View style={styles.cardDetails}>
//               <View style={styles.cardName}>
//                 <FontText
//                   content={vegetable.name}
//                   fontSize={16}
//                   fontWeight={700}
//                 />
//               </View>
//               <View style={styles.cardScientific}>
//                 <FontText
//                   content={vegetable.scientificName}
//                   fontSize={12}
//                   fontWeight={500}
//                 />
//               </View>
//               <View style={styles.cardLevel}>
//                 <FontText
//                   content={vegetable.name}
//                   fontSize={10}
//                   fontWeight={400}
//                 />
//               </View>
//             </View>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => handleViewPress}
//               >
//                 <View style={styles.buttonView}>
//                   <FontText content={"View"} />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };
import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import SearchResults from "../../data/SearchResults.json";
import FontText from "./FontText";

const CategoryResults = ({ selectedCategory }) => {
  const { vegetables } = SearchResults;

  // Filter vegetables based on the selected category
  const filteredVegetables = vegetables.filter(vegetable => vegetable.category === selectedCategory);

  const handleViewPress = (item) => {
    navigation.navigate('SearchPlantDetail', { item });
  };

  const imageMapping = {
    Lettuce: require("../../assets/images/lettuce-img.png"),
    Spinach: require("../../assets/images/spinach-img.png"),
    "Summer Squash": require("../../assets/images/squash-img.png"),
    // Add more mappings as needed
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background-blur-cool-1.png")}
        style={styles.bgImg}
      />
      <ScrollView>
        <Text style={styles.resultHeader}>Results ({filteredVegetables.length})</Text>
        {filteredVegetables.map((vegetable, index) => (
          <View key={index} style={styles.card}>
            <Image source={imageMapping[vegetable.name]} style={styles.image} />
            <View style={styles.cardDetails}>
              <View style={styles.cardName}>
                <FontText
                  content={vegetable.name}
                  fontSize={16}
                  fontWeight={700}
                />
              </View>
              <View style={styles.cardScientific}>
                <FontText
                  content={vegetable.scientificName}
                  fontSize={12}
                  fontWeight={500}
                />
              </View>
              <View style={styles.cardLevel}>
                <FontText
                  content={vegetable.name}
                  fontSize={10}
                  fontWeight={400}
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleViewPress(vegetable)}
              >
                <View style={styles.buttonView}>
                  <FontText content={"View"} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  bgImg: {
    position: "absolute",
    width: "100%",
  },
  resultHeader: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 25,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 160,
    width: 380,
    elevation: 3,
    marginTop: 30,
  },
  image: {
    width: 140,
    height: 155,
    zIndex: 1,
    position: "absolute",
    left: -10,
    top: 10,
  },
  cardDetails: {
    flex: 1,
    position: "relative",
    left: 150,
    top: -25,
  },
  cardName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  cardScientific: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7C7C7C",
  },
  cardLevel: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginTop: 95,
  },
  buttonAdd: {
    backgroundColor: "#000",
    borderRadius: 30,
    paddingHorizontal: 22,
    paddingVertical: 8,
    color: "#fff",
  },
  buttonView: {
    backgroundColor: "transparent",
    borderRadius: 30,
    paddingHorizontal: 19,
    paddingVertical: 5,
    borderColor: "#000",
    borderWidth: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

export default CategoryResults;
