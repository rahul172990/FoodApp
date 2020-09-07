import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';




const CategoriesScreen = (props) => {

  const renderGrid = (itemData) => {
    return  <CategoryGridTile image={itemData.item.image} color={itemData.item.color} title={itemData.item.title} onSelect={() => {
      props.navigation.navigate({routeName:'Screen', params:{
        categoryId: itemData.item.id
      
      }
    })
    }}/>;
    };

  return (
 <FlatList keyExtractor={(item,index) => item.id} data={CATEGORIES} renderItem={renderGrid} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions =  (navData) => {
  return {
  headerTitle: 'Meals',
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
    margin:50,
    height:150

 
  },
  txt:{
    fontSize:20
  }
});


export default CategoriesScreen;
