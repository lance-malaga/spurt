import { View, Text, StyleSheet } from 'react-native';

export default function ScheduleCard({
  week='',
  day='',
  backgroundColor='',
  color='',

}) {
  return (
    <View style={[styles.dates, {backgroundColor}]}>
        <Text style={[styles.week, {color}]}>{week}</Text>
        <Text style={[styles.day, {color}]}>{day}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  dates: {
    width: 40,
    height: 70,
    gap: 5,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 10, 
    borderWidth: 2,
    borderColor: '#ECECEC',
  },
  week: {
    padding:0, 
    textAlign:'center', 
    fontWeight:'500'
  },
  day: {
    padding:0, 
    fontWeight:'500'
  }
})
