import { StyleSheet, Text, View } from 'react-native';

export default function CurrentDate() {

  var dt = new Date();
  let day = dt.getDay();

  return (
    <View>
      {
        day === 0 ? <Text style={[styles.dayInfo_day, styles.text]}>Sunday</Text> :
        day === 1 ? <Text style={[styles.dayInfo_day, styles.text]}>Monday</Text> :
        day === 2 ? <Text style={[styles.dayInfo_day, styles.text]}>Tuesday</Text> :
        day === 3 ? <Text style={[styles.dayInfo_day, styles.text]}>Wednesday</Text> :
        day === 4 ? <Text style={[styles.dayInfo_day, styles.text]}>Thursday</Text> :
        day === 5 ? <Text style={[styles.dayInfo_day, styles.text]}>Fridays</Text> :
        <Text style={[styles.dayInfo_day, styles.text]}>Saturday</Text>
      }
    </View>
  )
};

const styles = StyleSheet.create({
  dayInfo_day: {
    textTransform: "uppercase",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
})