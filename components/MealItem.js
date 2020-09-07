
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity,TouchableNativeFeedback,ImageBackground} from 'react-native';
import {CATEGORIES,MEALS} from '../data/dummy-data';

const MealItem = (props) => {

    return (
        
        <View style={styles.mealItem}>
        <TouchableOpacity   onPress={props.onSelectMeal}>
              <View>

         
     
              <View style={{...styles.mealRow,...styles.mealHeader}}>
                  <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                <Text  style={styles.title} numberOfLines={1}>{props.title}</Text>
                </ImageBackground>

              
              </View>
              <View style={{...styles.mealRow,...styles.mealDetail}}>
                 <Text>{props.duration}m</Text>
                 <Text>{props.complexity.toUpperCase()}</Text>
                 <Text>{props.afford.toUpperCase()}</Text>

              </View>
              </View>
              
              </TouchableOpacity>
             </View>
    );

};



const styles = StyleSheet.create({
    mealItem: {
      height:200,
      width:"100%",
      backgroundColor:'#ccc',
      borderRadius:10,
      overflow:'hidden',
      marginTop:10,
      
      
    },
    mealRow:{
        flexDirection:'row',
        
    },
    mealHeader:{
        height:"85%"
    },
    mealDetail:{
    
        justifyContent:'space-between',
        paddingHorizontal:15,
        height:"15%",
        alignItems:'center'
    },
    bgImage:{
        height:'100%',
        width:"100%",
        justifyContent:'flex-end'
    },
    title:{
      
        fontSize:20,
        backgroundColor:'rgba(0,0,0,0.6)',
        color:'white',
        textAlign:'center',
        paddingHorizontal:10,
        paddingVertical:5
    }


  });
  
  
  export default MealItem;
