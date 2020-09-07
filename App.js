import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {AppLoading,Font} from 'expo';
import MealsNavigator from './Navigation/MealsNavigator';

import {enableScreens} from 'react-native-screens';
import {createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducers from './store/reducers/meals';


enableScreens();


const rootReducer = combineReducers({
  meals:mealsReducers
});

const store = createStore(rootReducer);

const fetchFont = () => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

//  if(!fontLoaded) {
//    return (
//      <AppLoading 
//      startAsync={fetchFont}
//      onFinish={() => setFontLoaded(true)}
     
//      />
//    );
//  }

  return  <Provider store={store}><MealsNavigator style={styles.txt}/></Provider>;
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt:{
    fontSize:20
  }
});
