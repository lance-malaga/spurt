import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FontText from "./FontText";

export default function SearchCard({ data, name, scientificName, difficulty }) {
  const navigation = useNavigation();

  const handleViewPress = () => {
    navigation.navigate('SearchPlantDetail', { item: data });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: data.image.img1 }}
          style={styles.image}
        />
        <View style={styles.cardDetails}>
          <FontText
          content={name}
          fontSize={16}
          fontWeight={700}
          />
          <View style={styles.cardScientific}>
          <FontText
          content={scientificName}
          fontSize={12}
          fontWeight={500}
          />            
          </View>
          <View style={styles.cardLevel}>
          <FontText
          content={difficulty}
          fontSize={10}
          fontWeight={400}
          />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonView}
            onPress={handleViewPress}
          >
            <FontText
            content={"View"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
});