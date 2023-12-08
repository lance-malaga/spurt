import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SwipeablePanel } from 'rn-swipeable-panel';
import useFindCommunity from "../../utils/findCommunity";
import FontText from "./FontText";


export default function ApplicationForm({setShowForm, setShowMap, setJoinedComm}) {
  const handleFormSubmit = () => {
    setJoinedComm(true);
    setShowForm(false);
    setShowMap(false);
  }

  return (
    <SwipeablePanel
        isActive
        onClose={() => setShowForm(false)}
        onPressCloseButton={() => setShowForm(false)}
        closeRootSwipeablePanel={() => setShowForm(false)}
        closeSwiper={() => setShowForm(false)}
        fullWidth
        onlyLarge
        closeOnTouchOutside
    >
      <View style={styles.container}>
        <Image source={require("../../assets/images/background-blur-cool-1.png")} style={styles.backgroundImage}/>
        <FontText
          content={"Application form"}
          fontSize={24}
          fontWeight={500}
          marginTop={-70}
        />
        <FontText
          content={"Complete the form with your contact details to join the group"}
          fontSize={14}
          fontWeight={400}
          textAlign={"center"}
          width={300}
          marginTop={10}
        />
        <View style={{marginTop: 50}}>
          <View>
            <FontText
            content={"First Name"}
            fontSize={18}
            fontWeight={500}
            marginTop={-20}
            />
            <TextInput
              style={styles.input}
              placeholder="Katie"
            />
          </View>
          <View>
          <FontText
            content={"Last Name"}
            fontSize={18}
            fontWeight={500}
            marginTop={10}
            />
            <TextInput
              style={styles.input}
              placeholder="Johnson"
            />
          </View>
          <View>
          <FontText
            content={"Phone Number"}
            fontSize={18}
            fontWeight={500}
            marginTop={10}
            />
            <TextInput
              style={styles.input}
              placeholder="(111)-222-3333"
              keyboardType='number-pad'
            />
          </View>
          <View>
          <FontText
            content={"Email"}
            fontSize={18}
            fontWeight={500}
            marginTop={10}
            />
            <TextInput
              style={styles.input}
              placeholder="katie@johnson.com"
              keyboardType='email-address'
            />
          </View>
        </View>
        <View style={styles.gardenerImages}>
          <Image style={styles.gardenerOne} source={require("../../assets/images/community/gardener01.png")} />
          <Image style={styles.gardenerTwo} source={require("../../assets/images/community/gardener02.png")} />
        </View>
        <Pressable
          onPress={handleFormSubmit}
          style={styles.submitButton}
        >
            <FontText
            content={"Submit"}
            fontSize={16}
            fontWeight={600}
            textAlign={"center"}
            color={"#fff"}
            />
        </Pressable>
      </View>
    </SwipeablePanel>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 800,
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