import React from "react";
import { 
  View, 
  StyleSheet, 
  Text, 
  Image, 
  ScrollView 
} from "react-native";

export default function CategoriesCard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <View style={styles.vegetableCard}>
          <Text style={styles.header}>Vegetable</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelect}
            />
          </View>
        </View>
        <View style={styles.fruitCard}>
          <Text style={styles.header}>Fruit</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelect}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.herbsCard}>
          <Text style={styles.header}>Herbs</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelect}
            />
          </View>
        </View>
        <View style={styles.legumesCard}>
          <Text style={styles.header}>Legumes</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelect}
            />
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.flowersCard}>
          <Text style={styles.header}>Flowers</Text>
          <View style={styles.arrowContainer}>
            <Text style={styles.exploreText}>explore</Text>
            <Image
              source={require("../../assets/icons/arrowSelect.png")}
              style={styles.arrowSelect}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
    width: 375,
  },
  row: {
    flexDirection: "row",
  },
  vegetableCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#A2D8D2",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fruitCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFCDE1",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  herbsCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FFDF8E",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  legumesCard: {
    flex: 1,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#A1CFFF",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flowersCard: {
    flex: 2,
    height: 117,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#D6EDB9",
    alignItems: "flex-start",
    padding: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    marginTop: 5,
  },
  exploreText: {
    fontSize: 12,
    textAlign: "left",
    fontWeight: "300",
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  arrowSelect: {
    width: 12,
    height: 12,
    marginLeft: 5,
  },
});
