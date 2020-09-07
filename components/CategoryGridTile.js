
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity,TouchableNativeFeedback, ImageBackground} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryGridTile = (props) => {

    return (
       
        <ImageBackground source={{uri:props.image}} style={styles.screen}>    
        <TouchableNativeFeedback   onPress={props.onSelect}>
        
        
       
          <View style={{...styles.mystyle}}>
         
              <Text style={styles.title} numberofLines={2}>{props.title}</Text>
             
              </View>
            
           
             
              </TouchableNativeFeedback>
                </ImageBackground>
          
    
             
              

    );

};



const styles = StyleSheet.create({

    screen: {
        flex: 1,
        margin:20,
        height:150,
        borderRadius:10,
        justifyContent:'flex-end',
        overflow:'hidden',
        elevation:10,
        backgroundColor:'white'
        
    
     
      },
      
 
    mystyle:{
        flex:1,
        borderRadius:10,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15
       

        
    },
    title:{
        width:'100%',
        fontSize:14,
        backgroundColor:'rgba(0,0,0,0.65)',
        color:'white',
        paddingHorizontal:10,
        paddingVertical:5,
        textAlign:'center',
        borderRadius:10
        


    }

  });
  
  
  export default CategoryGridTile;
