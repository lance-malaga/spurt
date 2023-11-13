import { TouchableOpacity } from "react-native";
import FontText from "./FontText";

export default function PlantDetailNavItem({name, selected, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <FontText 
                content={name}
                fontWeight={selected ? 500 : 400}
                color={selected ? "#14171F" : "rgba(0, 0, 0, 0.51)"}
                fontSize={selected ? 18 : 16}
            />
        </TouchableOpacity>
    )
}