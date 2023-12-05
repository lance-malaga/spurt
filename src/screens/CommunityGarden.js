import { Text } from "react-native";
import useFindCommunity from "../../utils/findCommunity";
import FindCommunity from "./FindCommunity";
import JoinedCommunity from "./JoinedCommunity";

export default function CommunityGarden() {
    const {joinedComm, setJoinedComm} = useFindCommunity();

    return (
        <>
            { !joinedComm ? 
                <FindCommunity 
                    setJoinedComm={setJoinedComm}
                />
            : 
                <JoinedCommunity/>
            }
        </>
    )
}