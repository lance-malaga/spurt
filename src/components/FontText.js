import { Text } from "react-native";
import { 
    useFonts,
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_900Black,
} from "@expo-google-fonts/poppins";

export default function FontText({content, fontWeight, fontSize, textAlign, lineHeight, letterSpacing, color, paddingTop, paddingBottom, paddingLeft, paddingRight, marginTop}) {
    let [fontsLoaded, fontError] = useFonts({
        Poppins_100Thin,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_900Black,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Text 
            style={{
                fontFamily: 
                    fontWeight === 100 ? 'Poppins_100Thin' :
                    fontWeight === 300 ? 'Poppins_300Light' :
                    fontWeight === 500 ? 'Poppins_500Medium' :
                    fontWeight === 700 ? 'Poppins_700Bold' :
                    fontWeight === 900 ? 'Poppins_900Black' :
                    'Poppins_400Regular'
                , 
                fontSize: fontSize ? fontSize : 14,
                textAlign: textAlign,
                lineHeight: lineHeight,
                letterSpacing: letterSpacing,
                color: color,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                paddingRight: paddingRight,
                marginTop: marginTop,
            }}
        >
            {content}
        </Text>
    )
}