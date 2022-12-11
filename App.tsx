import React, {useState, type PropsWithChildren} from 'react';
import {StatusBar, StyleSheet, Switch, View} from 'react-native';
import MyKeyboards from './src/components/MyKeyboard';
import {ThemeContext} from './src/context/ThemeContext';
import {myColors} from './src/styles/Colors';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: myColors.dark}]
        }>
        <StatusBar
          barStyle={theme === 'light' ? 'light-content' : 'dark-content'}
        />
        <View style={styles.switchBtn}>
          <Switch
            value={theme === 'light'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </View>
        <MyKeyboards />
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: myColors.light,
  },
  switchBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
});

export default App;
