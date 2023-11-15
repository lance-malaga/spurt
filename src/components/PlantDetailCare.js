import { View } from "react-native";

import FontText from "./FontText";

export default function PlantDetailCare({plantData}) {
    console.log("plant care", plantData);

    return (
        <View>
            <FontText
                content={"Care Screen"}
                textAlign={"center"}
            />
            <FontText
                content={plantData.name}
                textAlign={"center"}
            />
            <FontText
                content={plantData.type}
                textAlign={"center"}
            />
        </View>
    )
}