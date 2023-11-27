export const taskList = [
    {
        name: 'Tomato',
        category: 'Fruits',
        waterStatus: 2,
        fertilizeStatus: 14,
        pruneStatus: 10,
        image: require('../assets/images/plant-card/tomato.png'),
        optimalConditions: [
            {
                type: 'Temperature',
                condition: "21-29°C",
            },
            {
                type: 'Sun',
                condition: "6-8 Hours",
            },
            {
                type: 'Soil',
                condition: "Well-Draining",
            },
            {
                type: 'Soil PH',
                condition: "6.0-7.0",
            },
        ],
    },
    {
        name: 'Cucumber',
        category: 'Fruits',
        waterStatus: 3,
        fertilizeStatus: 14,
        pruneStatus: 10,
        image: require('../assets/images/plant-card/cucumber.png'),
        optimalConditions: [
            {
                type: 'Temperature',
                condition: "21-29°C",
            },
            {
                type: 'Sun',
                condition: "6-8 Hours",
            },
            {
                type: 'Soil',
                condition: "Well-Draining",
            },
            {
                type: 'Soil PH',
                condition: "6.0-7.0",
            },
        ],
    },
    {
        name: 'Sunflower',
        category: 'Flowers',
        waterStatus: 3,
        fertilizeStatus: 14,
        pruneStatus: 10,
        image: require('../assets/images/plant-card/sunflower.png'),
        optimalConditions: [
            {
                type: 'Temperature',
                condition: "21-26°C",
            },
            {
                type: 'Sun',
                condition: "6-8 Hours",
            },
            {
                type: 'Soil',
                condition: "Well-Draining",
            },
            {
                type: 'Soil PH',
                condition: "6.0-7.5",
            },

        ],
    },
];