import { useState } from 'react';
import { taskList } from '../data/YourGarden';

export default function useSearch() {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState(taskList);

    const searchYourGarden = () => {
        if (searchInput !== "") {
            const filteredData = taskList.filter(
                (item) =>
                    item.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredResults(filteredData);
        }
    }

    return {searchInput, setSearchInput, filteredResults, setFilteredResults, searchYourGarden}
}