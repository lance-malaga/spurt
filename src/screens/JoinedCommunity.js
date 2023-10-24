import { ScrollView, StyleSheet, View, Text, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Components
import ScheduleCard from '../components/ScheduleCard';

export default function JoinedCommunity () {
  return(
      <View>
        <Image source={require("../../assets/images/background/blur-cool-2.png")} style={styles.backgroundImage}/>
        <ScrollView>
            <View style={styles.container}>
              {/* Welcome Message */}
              <View style={styles.textContainer}>
                <Text style={styles.welcomeText} >Welcome to Green Haven’s</Text>
                <Text style={styles.title}>Community Garden Society</Text>
              </View>
              {/* Welcome Image */}
              <View style={styles.imageContainer}>
                <Image
                  source={require("../../assets/images/community/gardener.png")}
                  alt={"gardener_img"}
                />
              </View>
              {/* Horizontal Containers */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.horizontalScroll}>
                  <View style={[styles.communityHighlights, styles.boxShadow]}>
                    <Text style={styles.highlightsText}>Community Highlights</Text>
                    <View style={styles.highlightsImages}>
                      <View>
                        <Image
                          source={require("../../assets/images/community/comm_highlights/img01.png")}
                          alt={"gardener_img"}
                        />
                      </View>
                      <View style={{gap: 10}}>
                        <Image
                            source={require("../../assets/images/community/comm_highlights/img02.png")}
                            alt={"gardener_img"}
                        />
                        <Image
                            source={require("../../assets/images/community/comm_highlights/img03.png")}
                            alt={"gardener_img"}
                        />
                      </View>
                      <View style={{gap: 10}}>
                        <Image
                            source={require("../../assets/images/community/comm_highlights/img04.png")}
                            alt={"gardener_img"}
                        />
                        <Image
                            source={require("../../assets/images/community/comm_highlights/img05.png")}
                            alt={"gardener_img"}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.communityThreads, styles.boxShadow]}>
                    <Text style={styles.threadsText}>Community Threads</Text>
                    <Text>Help, what’s wrong with my garlic?</Text>
                    <View style={{flexDirection:'row', gap: 10}}>
                      <Text style={{fontSize: 12, opacity: 0.7}}>Posted 1 hour ago by @ju</Text>
                      <Text style={{fontSize: 12, color: "#F25E5A"}}>2 likes</Text>
                      <Text style={{fontSize: 12, color: "#169F91"}}>4 comments</Text>
                    </View>
                    <View style={{flexDirection:"row", gap: 10, marginBottom: 5}}>
                      <Pressable style={styles.unselectedButton}>
                        <Text>general</Text>
                      </Pressable>
                      <Pressable style={styles.selectedButton}>
                        <Text style={{color: "white"}}>garlic</Text>
                      </Pressable>
                      <Pressable style={styles.moreButton}>
                        <Text>+2</Text>
                      </Pressable>
                    </View>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 2}}></View>
                    <View style={{flexDirection:"row", marginTop: 5, gap: 10, alignItems: 'center'}}>
                      <Image 
                        source={require('../../assets/images/community/user_icon.png')}
                        style={{width:30, height:30}}
                        alt='user_icon'
                      />
                      <View>
                        <Text style={{opacity:0.6}}>@chris</Text>
                        <Text>I think you need to water it less.</Text>
                      </View>
                    </View>
                    <Text style={{textAlign:'right', fontWeight:"500"}}>view post</Text>
                  </View>
                </View>
              </ScrollView>
              {/* Gardening Schedule */}
              <View style={styles.scheduleContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15}}>
                  <Text style={{fontSize: 16, fontWeight:'700'}}>Gardening Schedule</Text>
                  <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <Ionicons name="chevron-back-outline" size={20} color='#828282'/>
                    <Text style={{marginLeft: 10, marginRight: 10, fontWeight:'500'}}>October</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color='#828282'/>
                  </View>
                </View>
                <View style={styles.displayEvents}>
                  <View style={styles.scheduleEvent}>
                    <Ionicons name="ellipse" size={20} color='#F25292'/>
                    <Text>Harvest Day</Text>
                  </View>
                  <View style={styles.scheduleEvent}>
                    <Ionicons name="ellipse" size={20} color='#4267FA'/>
                    <Text>Water Routine</Text>
                  </View>
                  <View style={styles.scheduleEvent}>
                    <Ionicons name="ellipse" size={20} color='#FFC93D'/>
                    <Text>Clean Up</Text>
                  </View>
                </View>
                <View style={{flexDirection:"row", gap:10}}>
                  <ScheduleCard week='S' day='15' />
                  <ScheduleCard week='M' day='16' />
                  <View style={{alignItems:'center', gap:5}}>
                    <ScheduleCard week='T' day='17' />
                    <Ionicons name="ellipse" size={20} color='#4267FA'/>
                  </View>
                  <ScheduleCard week='W' day='18' backgroundColor='#FFC93D'/>
                  <View style={{alignItems:'center', gap:5}}>
                    <ScheduleCard week='T' day='19' />
                    <Ionicons name="ellipse" size={20} color='#F25292'/>
                  </View>
                  <View style={{alignItems:'center', gap:5}}>
                    <ScheduleCard week='F' day='20' />
                    <Ionicons name="ellipse" size={20} color='#FFC93D'/>
                  </View>                 
                  <ScheduleCard week='S' day='21' />
                </View>
              </View>
              {/* Reminders */}
              <View>
                <Text style={{margin: 20, fontSize:18, fontWeight:'700'}}>Group Reminders</Text>             
                <Image 
                  source={require("../../assets/images/community/group_reminders.png")}
                  alt={"gardener_img"}
                />
              </View>
            </View>
        </ScrollView>
      </View>
      
  )
}

const styles = StyleSheet.create({
  
  // Background Image
  backgroundImage: {
    position: 'absolute',
    width: '100%'
  },
  
  // Main Container
  container: {
    flex: 1,
    gap: 8
  }, 

  // Welcome Message
  textContainer: {
    alignItems: "left",
    justifyContent: "left",
    paddingTop: 25,
    paddingLeft: 25,
  },
  welcomeText: {
    color: "#4267FA",
    fontWeight: "bold"
  }, 
  title: {
    width: 180,
    fontSize: 30,
    fontWeight: '900'
  },

  // Welcome Image
  imageContainer: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },

  // Horizontal Containers
  horizontalScroll: {
    flexDirection: "row",
    marginTop: 20,
    marginRight: 20
  },
  communityHighlights: {
    
  },
  highlightsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20
  },
  threadsText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  highlightsImages: {
    flexDirection: 'row',
    gap: 10
  }, 
  communityThreads: {
    gap: 5
  },
  boxShadow: {
    margin: 20,
    marginRight: 0,
    backgroundColor: 'white', 
    borderRadius: 15, 
    padding: 16, 
    shadowColor: 'black', 
    shadowOffset: { 
        width: 0, 
        height: 4, 
    }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 14, 
  },
  unselectedButton: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  }, 
  selectedButton: {
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  }, 
  moreButton: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'black',
  },

  // Gardening Schedule
  scheduleContainer: {
    margin: 20,
    backgroundColor: 'white', 
    borderRadius: 15, 
    paddingTop: 30, 
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 30, 
    shadowColor: 'black', 
    shadowOffset: { 
        width: 0, 
        height: 4, 
    }, 
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 14, 
  },
  displayEvents: {
    flexDirection: "row", 
    gap: 16
  }, 
  scheduleEvent: {
    flexDirection: 'row',
    gap: 3
  },
})