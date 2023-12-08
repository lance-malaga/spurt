import { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from "react-native";
import { SwipeablePanel } from 'rn-swipeable-panel';

// Component
import ApplicationForm from "./ApplicationForm";
import FontText from '../components/FontText';

export default function CommunityDetail({setShowModal, setShowMap, setJoinedComm}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <SwipeablePanel
      isActive
      onClose={setShowModal}
      onPressCloseButton={setShowModal}
      closeRootSwipeablePanel={setShowModal}
      closeSwiper={setShowModal}
      fullWidth
      onlyLarge
      closeOnTouchOutside
      barContainerStyle= {{
        backgroundColor: "#FBFBFB"
      }}
      style={{  
        position: 'absolute', 
        top: 170, 
        borderColor: '#7C7C7C', 
        borderWidth: 1,
      }}
    >
      <View style={styles.container}>
        <Image source={require("../../assets/images/modal-gradient.png")} style={styles.backgroundImage}/>
        <View style={styles.titleInfo}>
          <Image style={styles.titleImage} source={require("../../assets/images/community/sunflower.png")}/>
          <FontText
            content={"BloomLovers"}
            fontSize={24}
            fontWeight={500}
            paddingLeft={15}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalImages}>
            <Image source={require("../../assets/images/community/about/img01.png")}/>
            <Image source={require("../../assets/images/community/about/img02.png")}/>
            <Image source={require("../../assets/images/community/about/img03.png")}/>
            <Image source={require("../../assets/images/community/about/img04.png")}/>
          </View>
        </ScrollView>
        <View style={styles.categories}>
          <View style={{alignItems: 'center'}}> 
            <View style={styles.selectedText}>
            <FontText
              content={"About Us"}
              fontSize={14}
              fontWeight={500}
            />
            </View>
            <View style={styles.textBottomLine}></View>
          </View>
          <View style={styles.unSelectedText}>
          <FontText
              content={"Location"}
              fontSize={14}
              fontWeight={500}
              color={"#7C7C7C"}
            />
          </View>
          <View style={styles.unSelectedText}>
          <FontText
              content={"Contact"}
              fontSize={14}
              fontWeight={500}
              color={"#7C7C7C"}
            />
          </View>
          <View style={styles.unSelectedText}>
          <FontText
              content={"Rules"}
              fontSize={14}
              fontWeight={500}
              color={"#7C7C7C"}
            />
          </View>
        </View>
        <View style={styles.infoDisplay}>
          <FontText
            content={"At BloomLovers Community Garden, we are passionate about cultivating not just plants but a sense of togetherness and environmental sustainability. Explore our garden and immerse yourself in a world of fragrance and beauty. Discover the types of flowers we nurture, and see how you can join us in creating a floral paradise."}
            fontSize={12}
            fontWeight={400}
            textAlign={"justify"}
          />
          <FontText
            content={"What We Grow"}
            fontSize={14}
            fontWeight={500}
            color={"#7C7C7C"}
            marginTop={20}
          />
          <FontText
            content={"At BloomLovers Community Garden, we are dedicated to the art of cultivating beautiful and vibrant flowers. Our garden is a colorful haven filled with various blooms, each with its unique charm. From roses to daisies, zinnias to sunflowers, our members lovingly tend to a wide array of flower varieties."}
            fontSize={12}
            fontWeight={400}
            textAlign={"justify"}
          />
        </View>
        <TouchableOpacity
            onPress={() => {
              setShowModal,
              setShowForm(true)
            }}
            style={styles.joinButton}
        >
            <FontText
              content={"Join"}
              fontSize={16}
              fontWeight={600}
              color={"#fff"}
              textAlign={"center"}
            />
        </TouchableOpacity>
        {showForm && 
          <ApplicationForm 
            setShowForm={() => setShowForm(false)}
            setShowMap={setShowMap}
            setJoinedComm={setJoinedComm}
          />
        }
      </View>
    </SwipeablePanel>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
  },
  titleInfo: {
    flexDirection: 'row', 
    marginHorizontal: 20,
    paddingTop: 50
  },
  titleImage: {
    width: 25,
    height: 35,
  },
  titleText: {
    paddingLeft: 10, 
    fontSize: 24, 
    fontWeight: "700"
  },
  horizontalImages: {
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
    gap: 10
  },
  categories: {
    paddingTop: 30,
    paddingHorizontal: 30,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  selectedText: {
    fontWeight: "600"
  },
  textBottomLine: {
    borderBottomColor: '#D9D9D9', 
    borderBottomWidth: 3, 
    width: 40, 
    marginTop: 5
  },
  unSelectedText: {
    color: "#7C7C7C",
    fontWeight: "600"
  },
  infoDisplay: {
    paddingTop: 20,
    paddingHorizontal: 25
  }, 
  infoText: {
    textAlign: 'justify'
  },
  infoSubTitle: {
    paddingTop: 15,
    paddingBottom: 5,
    fontSize: 18,
    fontWeight: "700",
    color: "#7C7C7C",
  },
  joinButton: {
    marginTop: 10,
    alignSelf: "center",
    width: 280,
    padding: 15,
    borderRadius: 30,
    backgroundColor: '#292929',
    marginBottom: 30,
    marginTop: 30
  },
  joinBtnText: {
    color:'white', 
    textAlign:'center',
    fontWeight: "600",
    fontSize: 16
  }
})