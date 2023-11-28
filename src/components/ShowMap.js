import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import { useState } from 'react';

// Component
import SearchBar from "./SearchBar";
import ViewCommunityCard from "./ViewCommunityCard";

export default function ShowMap() {
  const [showCard, setShowCard] = useState(false)

  return (
    <View style={{position: 'relative'}}>
      <TouchableOpacity  onPress={() => setShowCard(false)}>
        <Image source={require("../../assets/images/community/map.png")} style={styles.backgroundImage}/>
      </TouchableOpacity>
        <View style={styles.titleCard}>
          <Text style={{fontSize: 24, fontWeight: "700"}}>Find a group near me</Text>
          <Text  style={{fontSize: 14, fontWeight: "500"}}>Enter your location to find them.</Text>
          <View style={{}}>
            <SearchBar />
          </View>
        </View>
        <View>
          <Image style={styles.youRhere} source={require("../../assets/images/community/youRhere.png")} />
          <TouchableOpacity onPress={() => setShowCard(true)}>
            <Image style={styles.communityFlower} source={require("../../assets/images/community/community01.png")}/>
          </TouchableOpacity>
          <Image style={styles.communityTree} source={require("../../assets/images/community/community02.png")}/>
        </View>

      {showCard && 
        <View style={{position: 'absolute', top: 250}}>
          <ViewCommunityCard />
          </View>
      }
      {/* <View style={styles.viewCommunity}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Image source={require("../../assets/images/community/sunflower.png")}/>
            <Text style={{paddingLeft: 10, fontSize: 18, fontWeight: "700"}}>BloomLovers</Text>
          </View>
          <Image source={require("../../assets/images/community/unlock.png")}/>
        </View>
        <View style={{marginTop: 20}}> 
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={styles.communityMember}>5 members</Text>
            <Text style={styles.communityAvailability}>5 spaces available</Text>
          </View>
          <Text style={styles.communityRules}>Group rules & regulations</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.communityJoinBtn}>Join</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    width: '100%'
  },
  titleCard: {
    paddingHorizontal: 24, 
    paddingBottom: 70, 
    backgroundColor: '#ffffffa8',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  youRhere: {
    position: "absolute",
    left: "40%",
    top: 200
  },
  communityFlower: {
    position: "absolute",
    right: "7%",
    top: 320
  },
  communityTree: {
    position: "absolute",
    left: "10%",
    top: 150
  },


  // viewCommunity: {
  //   height: 210,
  //   position: 'relative',
  //   margin: 20,
  //   paddingHorizontal: 30,
  //   paddingVertical: 20,
  //   backgroundColor: 'white', 
  //   flexDirection: 'column',
  //   borderRadius: 20
  // }, 
  // communityMember: {
  //   width: 90,
  //   paddingHorizontal: 8,
  //   paddingVertical: 5,
  //   borderRadius: 30,
  //   borderWidth: 1,
  //   borderColor: '#F25E5A',
  //   color: "#F25E5A"
  // },
  // communityAvailability: {
  //   width: 135,
  //   paddingHorizontal: 8,
  //   paddingVertical: 5,
  //   borderRadius: 30,
  //   borderWidth: 1,
  //   borderColor: '#169F91',
  //   color: "#169F91"
  // },
  // communityRules: {
  //   marginTop: 10,
  //   width: 200,
  //   paddingHorizontal: 8,
  //   paddingVertical: 5,
  //   borderRadius: 30,
  //   borderWidth: 1,
  //   borderColor: '#000',
  //   color: "#000"
  // },
  // communityJoinBtn: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 0,
  //   textAlign: 'center',
  //   width: 80,
  //   paddingHorizontal: 8,
  //   paddingVertical: 8,
  //   borderRadius: 30,
  //   backgroundColor: "#169F91",
  //   color: "white"
  // }
})