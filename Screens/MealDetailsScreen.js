import React, { useEffect, useCallback } from 'react';
import { StyleSheet, Text, View ,Image,ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { toggleFavorite } from '../store/actions/meals';



const MealDetailsScreen = (props) => {

  const availabelMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
  
  
  const selectedMeal = availabelMeals.find(meal => meal.id == mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  },[dispatch,mealId]);
     
  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  },[toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav:currentMealIsFavorite});
  },[currentMealIsFavorite]);

  return (
    <ScrollView>   
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
                 <Text>{selectedMeal.duration}m</Text>
                 <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                 <Text>{selectedMeal.affordability.toUpperCase()}</Text>

              </View>
              <Text style={styles.title}>Ingredients</Text>
             {selectedMeal.ingredients.map(ingredient => <Text style={styles.step} key={ingredient}>{ingredient}</Text>)}

             <Text style={styles.title}>Steps</Text>
             {selectedMeal.steps.map(step =>  <Text style={styles.step} key={step}>{step}</Text>)}
      
      

    </ScrollView>

  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  
  // const mealId = navigationData.navigation.getParam('mealId');
  // const selectedMeal = MEALS.find(meal => meal.id == mealId);

  const toggleFavorite = navigationData.navigation.getParam('toggleFav');

  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const isFavorite = navigationData.navigation.getParam('isFav');
  
  return {
    headerTitle: mealTitle,
    headerRight: () =>  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item  title="Favorite" iconName={isFavorite ? 'ios-star' : "ios-star-outline"} onPress={toggleFavorite}/>


    </HeaderButtons>

    // headerRight: <Text>Fav</Text>
  };


};

const styles = StyleSheet.create({
  image: {
 width:'100%',
 height:200
  },
  details:{
    flexDirection:'row',
    padding:15,
    justifyContent:"space-around"
  },
  title:{
    textAlign:'center',
    fontSize:22,
    fontStyle:"italic",
    color:'purple'
  },
  step:{
    
  borderColor:'grey',
  borderWidth:1,
  margin:10,
  padding:10,
  fontSize:16

   
    

  }
});


export default MealDetailsScreen;
