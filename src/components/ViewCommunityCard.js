import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

export default function ViewCommunityCard({setShowModal, setShowCard}) {

  return (
    <View style={styles.viewCommunity}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: "center"}}>
            <Image style={{width: 30, height:40}} source={require("../../assets/images/community/sunflower.png")}/>
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
        <TouchableOpacity onPress={setShowModal}>
          <Text style={styles.communityJoinBtn}>view more</Text>
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
    borderRadius: 20
  }, 
  communityMember: {
    width: 90,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F25E5A',
    color: "#F25E5A"
  },
  communityAvailability: {
    width: 135,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#169F91',
    color: "#169F91"
  },
  communityRules: {
    marginTop: 10,
    width: 200,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 30,
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