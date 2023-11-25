export const taskList = [
    {
        name: 'Tomato',
        category: 'Fruit',
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
        category: 'Fruit',
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
        category: 'Flower',
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