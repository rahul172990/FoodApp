import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {useSelector} from 'react-redux';

import MealItem from './MealItem';


const MealList = (props) => {

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);


    
  const renderMealItem = (itemData) => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

    return <MealItem image={itemData.item.imageUrl} complexity={itemData.item.complexity} afford={itemData.item.affordability} duration={itemData.item.duration} title={itemData.item.title} onSelectMeal={()=>{
      props.navigation.navigate({routeName:'MealDetail',params:{
        mealId:itemData.item.id,
        mealTitle:itemData.item.title,
        isFav:isFavorite
      }})
    }}/>;
    };
  



  return  <View style={styles.list}>
  <FlatList style={{width:'95%'}} data={props.listData} keyExtractor={(item,index) => item.id} renderItem={renderMealItem} />
</View>;
};


const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
});


export default MealList;
