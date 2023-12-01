import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

// SVG Images
// import WorkerOne from "../../assets/images/community/worker01.svg"
// import WorkerTwo from "../../assets/images/community/worker02.svg"

export default function ApplicationForm() {
  const navigation = useNavigation();

  const OpenJoinedCommunityGarden = setInterval(() => {
    navigation.navigate('JoinedCommunity')
  }, 5000)

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/background-blur-cool-1.png")} style={styles.backgroundImage}/>
      <Text style={styles.headerTitle}>Application Form</Text>
      <Text style={styles.headerText}>Complete the form with your contact details to join the group</Text>
      <View>
        <View>
          <Text style={styles.inputTitle}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Bob"
            keyboardType="text"
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Smith"
            keyboardType="text"
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="(111)-222-3333"
            keyboardType="tel"
          />
        </View>
        <View>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="bobsmith@gmail.com"
            keyboardType="email"
          />
        </View>
      </View>
      <View style={styles.gardenerImages}>
        {/* <WorkerOne /> */}
        <Image style={styles.gardenerOne} source={require("../../assets/images/community/gardener01.png")} />
        <Image style={styles.gardenerTwo} source={require("../../assets/images/community/gardener02.png")} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('JoinedCommunity')}
        style={styles.submitButton}
      >
          <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 680
  },
  backgroundImage: {
    position: 'absolute',
    width: 410,
    height: 870,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700", 
    marginBottom: 15
  },
  headerText: {
    width: 250,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 20
  },
  input: {
    width: 300,
    backgroundColor: '#F2F2F2',
    borderRadius: 15,
    padding: 10,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: "600"
  },
  submitButton: {
    marginTop: 10,
    alignSelf: "center",
    width: 280,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#292929',
    // marginBottom: 30
  },
  submitBtnText: {
    color:'white', 
    textAlign:'center',
    fontWeight: "600",
    fontSize: 16
  },
  gardenerImages: {
    width: "100%",
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  gardenerOne: {
    width: 180,
    height:120   
  },
  gardenerTwo: {
    width: 180,
    height:120   
  }
})