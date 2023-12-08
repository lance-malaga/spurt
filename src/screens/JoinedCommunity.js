import { ScrollView, StyleSheet, View, Text, Image, Pressable, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Components
import ScheduleCard from '../components/ScheduleCard';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import FontText from '../components/FontText';

export default function JoinedCommunity ({navigation}) {
  return(
      <View style={{flex: 1, marginTop:-20}}>
        <Header />
        <Image source={require("../../assets/images/background/blur-cool-2.png")} style={styles.backgroundImage}/>
        <ScrollView>
            <View style={styles.container}>
              {/* Welcome Message */}
              <View style={styles.textContainer}>
                <FontText
                content={"Welcome to Green Haven's"}
                fontSize={14}
                fontWeight={500}
                color={"#169F91"}
                />
                <FontText
                content={"Community Garden Society"}
                fontSize={24}
                fontWeight={500}
                width={300}
                />
              </View>
              {/* Horizontal Containers */}
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.horizontalScroll}>
                  <View style={styles.boxShadow}>
                    <FontText
                    content={"Community Highlights"}
                    fontSize={14}
                    fontWeight={500}
                    paddingBottom={10}
                    />
                    <View style={styles.highlightsImages}>
                      <View>
                        <Image
                          source={require("../../assets/images/community/highlights/img01.png")}
                          alt={"gardener_img"}
                        />
                      </View>
                      <View style={{gap: 10}}>
                        <Image
                            source={require("../../assets/images/community/highlights/img02.png")}
                            alt={"gardener_img"}
                        />
                        <Image
                            source={require("../../assets/images/community/highlights/img03.png")}
                            alt={"gardener_img"}
                        />
                      </View>
                      <View style={{gap: 10}}>
                        <Image
                            source={require("../../assets/images/community/highlights/img04.png")}
                            alt={"gardener_img"}
                        />
                        <Image
                            source={require("../../assets/images/community/highlights/img05.png")}
                            alt={"gardener_img"}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[styles.communityThreads, styles.boxShadow]}>
                    <FontText
                    content={"Community Threads"}
                    fontSize={14}
                    fontWeight={500}
                    />
                    <FontText
                    content={"Help, what's wrong with my garlic?"}
                    fontSize={12}
                    fontWeight={700}
                    />
                    <View style={{flexDirection:'row', gap: 10}}>
                      <FontText
                      content={"Posted 1 hour ago by @ju"}
                      fontSize={8}
                      fontWeight={400}
                      color={"#ADADAD"}
                      paddingRight={40}
                      />
                      <FontText
                      content={"2 likes"}
                      fontSize={8}
                      fontWeight={400}
                      color={"#ADADAD"}
                      />
                      <FontText
                      content={"4 comments"}
                      fontSize={8}
                      fontWeight={400}
                      color={"#ADADAD"}
                      />
                    </View>
                    {/* <View style={{flexDirection:"row", gap: 10, marginBottom: 5}}>
                      <Pressable style={styles.unselectedButton}>
                        <Text>general</Text>
                      </Pressable>
                      <Pressable style={styles.selectedButton}>
                        <Text style={{color: "white"}}>garlic</Text>
                      </Pressable>
                      <Pressable style={styles.moreButton}>
                        <Text>+2</Text>
                      </Pressable>
                    </View> */}
                    <View style={{borderBottomColor: '#404040', borderBottomWidth: 1, marginTop:5}}></View>
                    <View style={{flexDirection:"row", marginTop: 5, gap: 10, alignItems: 'center'}}>
                      <Image 
                        source={require('../../assets/images/community/user_icon.png')}
                        style={{width:30, height:30}}
                        alt='user_icon'
                      />
                      <View>
                        <FontText
                        content={"@chris"}
                        fontSize={10}
                        fontWeight={400}
                        color={"#ADADAD"}
                        />
                        <FontText
                        content={"I think you need to water it less."}
                        fontSize={12}
                        fontWeight={400}
                        />
                      </View>
                    </View>
                    <FontText
                    content={"view post"}
                    textAlign={"right"}
                    fontSize={12}
                    fontWeight={700}
                    marginTop={15}
                    />
                  </View>
                </View>
              </ScrollView>
              {/* Gardening Schedule */}
              <FontText
              content={"Gardening Schedule"}
              fontSize={16}
              fontWeight={500}
              paddingLeft={20}
              marginTop={15}
              />
              <View style={styles.scheduleContainer}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View style={{flexDirection:'row', alignItems: 'center', marginLeft:220, marginBottom:10}}>
                    <Ionicons name="chevron-back-outline" size={20} color='#828282'/>
                    <View style={{marginLeft:20, marginRight:20}}>
                    <FontText
                      content={"October"}
                      fontSize={12}
                      fontWeight={500}
                    />                      
                    </View>
                    <Ionicons name="chevron-forward-outline" size={20} color='#828282'/>
                  </View>
                </View>
                <View style={styles.displayEvents}>
                  <View style={styles.scheduleEvent}>
                    <Ionicons name="ellipse" size={20} color='#F25292'/>
                    <FontText
                    content={"Harvest Day"}
                    fontSize={12}
                    fontWeight={200}
                    />
                  </View>
                  <View style={styles.scheduleEvent}>
                    <Ionicons name="ellipse" size={20} color='#4267FA'/>
                    <FontText
                    content={"Water Routine"}
                    fontSize={12}
                    fontWeight={200}
                    />
                  </View>
                  <View style={styles.scheduleEvent}>
                    <Ionicons name="ellipse" size={20} color='#FFC93D'/>
                    <FontText
                    content={"Clean Up"}
                    fontSize={12}
                    fontWeight={200}
                    />
                  </View>
                </View>
                <View style={{flexDirection:"row", gap:10}}>
                  <ScheduleCard week='S' day='15' />
                  <ScheduleCard week='M' day='16' />
                  <View style={{alignItems:'center', gap:5}}>
                    <ScheduleCard week='T' day='17' />
                    <Ionicons name="ellipse" size={20} color='#4267FA'/>
                  </View>
                  <ScheduleCard week='W' day='18' backgroundColor='#000' color="white"/>
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
            </View>
        </ScrollView>
        <NavBar />
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
    color: "#169F91",
    fontWeight: "600"
  }, 
  title: {
    width: 300,
    fontSize: 30,
    fontWeight: '600'
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
    marginRight: 20
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
    elevation: 8, 
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
    margin: 10,
    backgroundColor: 'white', 
    borderTopLeftRadius:8,
    borderTopRightRadius:30,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:30,
    paddingTop: 15, 
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 15, 
    elevation: 5, 
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