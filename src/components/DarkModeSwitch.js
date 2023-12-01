import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

//Components
import FontText from './FontText';
import { useDarkMode } from '../components/DarkModeContext';

const DarkModeSwitch = ({ onToggle }) => {
  const { darkMode } = useDarkMode();
  const [isEnabled, setIsEnabled] = useState(darkMode);

  //keeps the toggle switch on dark when "darkmode" is turned on
  useEffect(() => {
    setIsEnabled(darkMode);
  }, [darkMode]);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onToggle();
  };

  return (
    <View style={styles.container}>
      <Switch
        style={styles.switch}
        trackColor={{ false: '#FFCF48', true: '#596BA2' }}
        thumbColor={isEnabled ? '#223065' : '#FFFFFF'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.text}>
        <FontText
          content={isEnabled ? 'Dark' : 'Light'}
          fontSize={18}
          color={isEnabled ? '#FFF' : darkMode ? '#E4E4E4' : '#000'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  text: {
    marginTop: 5,
    fontSize: 18,
    color: '#223065',
  },
});

export default DarkModeSwitch;
