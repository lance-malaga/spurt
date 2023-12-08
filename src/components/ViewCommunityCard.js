import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import FontText from "./FontText";

export default function ViewCommunityCard({setShowModal, setShowCard}) {

  return (
    <View style={styles.viewCommunity}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Image style={{width: 30, height:40}} source={require("../../assets/images/community/sunflower.png")}/>
            <FontText
            content={"BloomLovers"}
            fontSize={18}
            fontWeight={400}
            paddingLeft={20}
            />
          </View>
          <Image source={require("../../assets/images/community/unlock.png")}/>
        </View>
        <View style={{marginTop: 20}}> 
          <View style={{flexDirection: 'row', gap: 10}}>
            <View style={styles.communityMember}>
              <FontText
                content={"5 members"}
                fontSize={12}
                fontWeight={400}
                color={"#F25E5A"}
              />              
            </View>
            <View style={styles.communityAvailability}>
              <FontText
                content={"5 spaces available"}
                fontSize={12}
                fontWeight={400}
                color={"#169F91"}              
              />
            </View>
          </View>
          <View style={styles.communityRules}>
          <FontText
                content={"Group rules & regulations"}
                fontSize={12}
                fontWeight={400}
                color={"#000"}              
              />            
          </View>
        </View>
        <TouchableOpacity onPress={setShowModal}>
          <View style={styles.communityJoinBtn}>
          <FontText
          content={"view more"}
          fontSize={12}
          fontWeight={400}
          textAlign={"center"}
          color={"#fff"}
          />            
          </View>
        </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  viewCommunity: {
    width: 370,
    height: 210,
    position: 'relative',
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: 'white', 
    flexDirection: 'column',
    borderRadius: 15
  }, 
  communityMember: {
    width: 90,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F25E5A',
    color: "#F25E5A"
  },
  communityAvailability: {
    width: 135,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#169F91',
    color: "#169F91"
  },
  communityRules: {
    marginTop: 10,
    width: 200,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    color: "#000"
  },
  communityJoinBtn: {
    position: 'absolute',
    top: 10,
    right: 0,
    textAlign: 'center',
    width: 100,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 30,
    backgroundColor: "#169F91",
    color: "white"
  }
})