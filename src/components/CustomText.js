import React from "react";
import { Text } from "react-native";

export default function CustomText({text, fontSize, fontWeight, color, width}) {
    return (
        <Text style={{
            fontSize: fontSize ? fontSize : 14, 
            fontWeight: fontWeight ? fontWeight : 400, 
            color: color ? color : "black",
            width: width ? width : "auto"
        }}>
            {text}
        </Text>
    )
}
