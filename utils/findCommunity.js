import { useState } from "react";

export default function useFindCommunity() {
    const [joinedComm, setJoinedComm] = useState(false);
    
    return{joinedComm, setJoinedComm};
}