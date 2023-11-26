import { View, Text } from "react-native";
import { useState, useEffect, useRef } from 'react';

export default function Timer({duration, color}) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000); 
    },1000)
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000))
    let total_minutes = parseInt(Math.floor(total_seconds / 60))
    let total_hours = parseInt(Math.floor(total_minutes / 60))

    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 60);

    return `${hours}hrs ${minutes}min`
  }


  return (
    <View>
      <Text style={{color: color, fontWeight: '700'}}>{getFormattedTime(time)}</Text>
    </View>
  )
}