import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import FontText from "./FontText";

export default function PlantDetailNavItem({name, selected, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <FontText 
                content={name}
                fontWeight={selected ? 500 : 400}
                color={selected ? "#169F91" : "rgba(0, 0, 0, 0.51)"}
                fontSize={18}
            />
            {selected &&
                <LinearGradient
                    colors={['#169F91', 'rgba(255, 255, 255, 0.00)']}
                    style={{height: 3}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                />
            }
        </TouchableOpacity>
    )
}