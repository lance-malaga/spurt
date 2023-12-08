import { StyleSheet, Text, View, Image} from 'react-native';
import FontText from './FontText';

export default function ViewDisclaimer() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require("../../assets/images/community/disclaimerIcon.png")} />
        <FontText
        content={"Disclaimer"}
        fontSize={14}
        fontWeight={500}
        color={"#fff"}
        />
      </View>
      <FontText
      content={"Starting a community garden may be subject to government regulations and approvals in your local area. It's essential to check with your local authorities and obtain any necessary permits or permissions before commencing any community gardening project. Additionally, keep in mind that you may only be able to join one community garden group due to limitations or guidelines set by local regulations. Be sure to inquire about any restrictions on multiple memberships to ensure compliance with community gardening policies"}
      fontSize={12}
      fontWeight={400}
      color={"#fff"}
      textAlign={"justify"}
      marginTop={40}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 30,
    backgroundColor: '#404040'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  headerImage: {
    width: 39.5,
    height: 35
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
    color: 'white'
  },
  disclaimerText: {
    paddingTop: 10,
    fontSize: 15,
    color: 'white'
  }
})