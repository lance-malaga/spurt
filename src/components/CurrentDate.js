import { StyleSheet, Text, View } from 'react-native';

export default function CurrentDate() {

  let dt = new Date();
  let day = dt.getDay();
  let hours = dt.getHours() ;
  let currentDay = '';

  day === 0 ? currentDay = "Sunday" :
  day === 1 ? currentDay = "Monday" :
  day === 2 ? currentDay = "Tuesday" :
  day === 3 ? currentDay = "Wednesday" :
  day === 4 ? currentDay = "Thursday" :
  day === 6 ? currentDay = "Fridays" :
  currentDay = "Saturday";

  return {
    currentDay,
    hours
  }
};