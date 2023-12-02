import { useState } from 'react';
import topPicks from "../data/TopPicks.json"

export default function useSearchOnboarding(category) {
    const [selectedCategory, setSelectedCategory] = useState(category);
    const [filteredResults, setFilteredResults] = useState(topPicks);

    const filterList = () => {
        let updatedData = topPicks;
        updatedData = updatedData.filter(item => item.type === selectedCategory);
  
        setFilteredResults(updatedData);
    };

    return {selectedCategory, filteredResults, filterList}
}