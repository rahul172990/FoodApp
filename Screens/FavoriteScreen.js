import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const FavoriteScreen = (props) => {

  const favMeals = useSelector(state => state.meals.favoriteMeals);

  if(favMeals.length === 0 || !favMeals)
  {
    return <View style = {styles.c}><Text style={styles.txt}>No Favorite Items. Start Adding Some.</Text></View>
  }

  
  return <MealList listData={favMeals} navigation = {props.navigation} />;
}


FavoriteScreen.navigationOptions =  (navData) => {
  return {
  headerTitle: 'Favorite Items',
  headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName = "ios-menu" onPress={() => {
      navData.navigation.toggleDrawer();
    }}/>
  </HeaderButtons>
  };

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txt:{
    fontSize:20
  },
  c:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  }
});


export default FavoriteScreen;
