import React,{useState, useEffect,useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { StyleSheet, Text, View, Switch} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {setFilters} from '../store/actions/meals';



const FilterSwitch = (props) => {
  return (
  
    <View style={styles.filterContainer}>
  <Text>{props.label}</Text>
    <Switch trackColor={{true:'black'}} thumbColor='blue' value={props.state} onValueChange={props.onChange}/>
  </View>




  );

};

const FiltersScreen = (props) => {

 const {navigation} = props;

  const [isGlutenFree,setIsGlutenFree] = useState(false);
  const [isLactoseFree,setIsLactoseFree] = useState(false);
  const [isVegan,setIsVegan] = useState(false);
  const [isVeg,setIsVeg] = useState(false);
  const dispatch = useDispatch();

  const saveFilters = useCallback((props) => {
    const appliedFilters = {
      glutenFree : isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan:isVegan,
      veg:isVeg
    };
    dispatch(setFilters(appliedFilters));
  },[isGlutenFree,isLactoseFree,isVeg,isVegan]);

  useEffect(() => {
    props.navigation.setParams({save:saveFilters});

  },[saveFilters]);

  return (
    <View style={styles.screen}>
    <Text style={styles.title}>Available Filters / Restriction</Text>
    <FilterSwitch label="Gluten-Free" state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)}/>
    <FilterSwitch label="Lactose-Free" state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>

    <FilterSwitch label="Vegan" state={isVegan} onChange={newValue => setIsVegan(newValue)}/>

    <FilterSwitch label="Vegetarian" state={isVeg} onChange={newValue => setIsVeg(newValue)}/>


</View>
  );
};



FiltersScreen.navigationOptions =  (navData) => {
  return {
  headerTitle: 'Filtered Items',
  headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName = "ios-menu" onPress={() => {
      navData.navigation.toggleDrawer();
    }}/>
  </HeaderButtons>,

  headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title="Save" iconName = "ios-save" onPress={navData.navigation.getParam('save')}/>
</HeaderButtons>,


  };

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title:{
    fontSize:22,
    margin:20,
    textAlign:'center'
  },
  filterContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    width:'80%',
    marginVertical:10
   

    
  }

});


export default FiltersScreen;
