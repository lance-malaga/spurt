import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from "react-native";
import { useState } from 'react';
import { SwipeablePanel } from 'rn-swipeable-panel';

// Components
import SearchBar from "./SearchBar";
import ViewCommunityCard from "./ViewCommunityCard";
import CommunityDetail from "./CommunityDetail";
import CommunityQuestion from "./CommunityQuestion";
import FontText from "./FontText";

export default function ShowMap({setShowMap, setJoinedComm}) {
  const [showCard, setShowCard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showQuestionCard, setShowQuestionCard] = useState(false);

  return (
    <View style={{position: 'relative', marginTop: -100}}>
      <Pressable  onPress={() => setShowCard(false)}>
        <Image source={require("../../assets/images/community/map.png")} style={styles.backgroundImage}/>
      </Pressable>
      <View style={styles.titleCard}>
        <TouchableOpacity onPress={setShowMap} >
            <Image style={styles.backButton} source={require("../../assets/images/community/backIcon.png")}/>
        </TouchableOpacity>
        <FontText
        content={"Find a group near me"}
        fontSize={24}
        fontWeight={500}
        />
        <FontText
        content={"Enter your location to find them."}
        fontSize={14}
        fontWeight={500}
        />
        <View style={{}}>
          <SearchBar />
        </View>
      </View>
      <View>
        <Image style={styles.youRhere} source={require("../../assets/images/community/youRhere.png")} />
        {!showCard ? 
          <TouchableOpacity onPress={() => setShowCard(true)}>
            <Image style={styles.communityFlower} source={require("../../assets/images/community/community01.png")}/>
          </TouchableOpacity> :
          <Image style={styles.clickedCommunityFlower} source={require("../../assets/images/community/community01.png")}/>
          
        }
        <Image style={styles.communityTree} source={require("../../assets/images/community/community02.png")}/>
        <Pressable onPress={() => setShowQuestionCard(true)}>
          <Image style={styles.communityQuestion} source={require("../../assets/images/community/question_mark.png")}/>
        </Pressable>
      </View>
      {showCard && 
        <View style={{ 
          justifyContent: 'center', 
          alignItems: 'center', 
          marginTop: 330
          }}>
          <ViewCommunityCard 
            setShowModal={() => setShowModal(true)}
          />
          {showModal && 
            <CommunityDetail 
              setShowModal={() => setShowModal(false)}
              setShowMap={setShowMap}
              setJoinedComm={setJoinedComm}
            />
          }
        </View>
      }
      <View>
        <View style={{position: "absolute", top: 600}}>
          <SwipeablePanel
              isActive={showQuestionCard}
              onClose={() => setShowQuestionCard(false)}
              onPressCloseButton={() => setShowQuestionCard(false)}
              closeRootSwipeablePanel={() => setShowQuestionCard(false)}
              closeSwiper={() => setShowQuestionCard(false)}
              fullWidth
              closeOnTouchOutside
              showCloseButton
              noBar
              style={{
              }}
          >
              <CommunityQuestion />
          </SwipeablePanel>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: 870,
  },
  titleCard: {
    paddingHorizontal: 24, 
    paddingBottom: 30, 
    backgroundColor: '#ffffffa8',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  backButton: {
    marginTop: 60,
    marginBottom: 15
  },
  youRhere: {
    position: "absolute",
    left: "45%",
    top: 125
  },
  communityFlower: {
    position: "absolute",
    right: "7%",
    top: 250
  },
  clickedCommunityFlower: {
    position: "absolute",
    right: "5%",
    top: 240,
    width: 65, 
    height: 65
  },
  communityTree: {
    position: "absolute",
    left: "6%",
    top: 110,
  },
  communityQuestion: {
    position: "absolute",
    right: "5%",
    top: 515,
    width: 65, 
    height: 65
  }
})