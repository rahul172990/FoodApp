import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealScreen from '../Screens/CategoryMealScreen';
import MealDetailsScreen from '../Screens/MealDetailsScreen';
import FavoriteScreen from '../Screens/FavoriteScreen';
import FiltersScreen from '../Screens/FiltersScreen';


const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
  
    Screen:CategoryMealScreen,
   
    MealDetail:MealDetailsScreen
},{
    

    defaultNavigationOptions:{

    
    headerStyle: {
        backgroundColor:'royalblue'
      },
      headerTintColor:'white'
    }
});


const favNavigator = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail:MealDetailsScreen

},{
    

    defaultNavigationOptions:{

    
    headerStyle: {
        backgroundColor:'royalblue'
      },
      headerTintColor:'white'
    }
});


const tabScreen = {
    Meals: {screen:MealsNavigator, navigationOptions:{
        tabBarIcon : (tabInfo) => {
            return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        }
    }},
    Favorites:{screen: favNavigator, navigationOptions:{
        tabBarIcon : (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        } 
        
    }
    }
};

const BottomTabNavigator = 
Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabScreen, {
    activeColor:'red',
 barStyle:{
     backgroundColor:'black'
 }
})
 : 
 createBottomTabNavigator(tabScreen,{

tabBarOptions : {
    activeTintColor:'red'
}
    // Meals : MealsNavigator,
    // Favorite:FavoriteScreen

}

// defaultNavigationOptions: ({ navigation }) => ({
//     tabBarIcon: (tabInfo) => {
      
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'Meals') {
//             iconName = `ios-restaurant`;		
//         } else if (routeName === 'Favorite') {
//             iconName = `ios-star`;
//         }
//         return <Ionicons name={iconName} size={25} color={tabInfo.tintColor} />;
//     }
// }),
);

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},{
    defaultNavigationOptions:{

    
        headerStyle: {
            backgroundColor:'royalblue'
          },
          headerTintColor:'white'
        }
});

const mainNavigator = createDrawerNavigator({
    MealsFav : {screen : BottomTabNavigator,navigationOptions:{
        drawerLabel:'Meals'
    }},
    Filters: FiltersNavigator
},{

    contentOptions:{
        activeTintColor:'purple',
        
     
        labelStyle:{
     
           

        }
    }
});
   


export default createAppContainer(mainNavigator);