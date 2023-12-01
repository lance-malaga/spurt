import { StyleSheet, Text, View, Image} from "react-native";

export default function CommunityQuestion() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require("../../assets/images/community/question_mark.png")} />
        <Text style={styles.headerText}>Community Garden</Text>
      </View>
      <Text style={styles.disclaimerText}>
        A community garden is a shared cultivation space where individuals or families 
        have allocated plots for growing plants, fostering collaboration and community. 
        Found in various settings, these gardens prioritize sustainability, serving as educational 
        hubs for gardening techniques and environmental awareness. Beyond growing food, they 
        enhance local food security and celebrate cultural diversity through the cultivation 
        of culturally significant plants
      </Text>
    </View>
  )

};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 5
  },
  headerImage: {
    width: 60,
    height: 35
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  disclaimerText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    // paddingTop: 10,
    fontSize: 15,
    textAlign: 'justify'
  }
})