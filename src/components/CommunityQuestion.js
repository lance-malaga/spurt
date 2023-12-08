import { StyleSheet, Text, View, Image} from "react-native";
import FontText from "./FontText";

export default function CommunityQuestion() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require("../../assets/images/community/question_mark.png")} />
        <FontText
        content={"Community Garden"}
        fontSize={14}
        fontWeight={500}
        />
      </View>
      <FontText
      content={"A community garden is a shared cultivation space where individuals or families have allocated plots for growing plants, fostering collaboration and community. Found in various settings, these gardens prioritize sustainability, serving as educational hubs for gardening techniques and environmental awareness. Beyond growing food, they enhance local food security and celebrate cultural diversity through the cultivation of culturally significant plants"}
      fontSize={12}
      fontWeight={400}
      textAlign={"justify"}
      marginTop={40}
     />
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