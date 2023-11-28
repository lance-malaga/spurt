import { useState } from 'react';
import { taskList } from '../data/YourGarden';

export default function useSearchYourGarden() {
    const [searchInput, setSearchInput] = useState('');    
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredResults, setFilteredResults] = useState(taskList);

    const filterCollection = () => {
        let updatedData = taskList;
        // category filter
        if (selectedCategory !== 'All') {
            updatedData = updatedData.filter(item => item.category === selectedCategory);
        }
        // search filter
        updatedData = updatedData.filter(item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
  
        setFilteredResults(updatedData);
    };

    return {searchInput, setSearchInput, selectedCategory, setSelectedCategory, filteredResults, setFilteredResults, filterCollection, taskList}
}