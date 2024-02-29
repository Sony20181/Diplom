import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput,FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gStyle } from '../../../styles/style';
import { useState } from 'react';

import { useSelector } from 'react-redux';
/*
const TrainingArrow = ({ navigation, route }) => {
  const setSelectedArrow = route.params.setSelectedArrow;
  const arrows = useSelector(state => state.arrow.arrow)
  const handleArrowClick = (value) => {
    setSelectedArrow(value);
    navigation.goBack();
  };

  
  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
            style={gStyle.container}
    >
        <FlatList data = {arrows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleArrowClick(item.name)}>
          <View style ={gStyle.content }>
            <Text style ={gStyle.text} >{item.name}</Text>
          </View>
      </TouchableOpacity>
       
    )}/>
  
  </LinearGradient>
  );
};

export default TrainingArrow;
*/


const TrainingArrow = ({ onSelect }) => {

  const arrows = useSelector(state => state.arrow.arrow)
  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
            style={gStyle.container}
    >
        <FlatList data = {arrows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => onSelect(item.name)}>
          <View style ={gStyle.content }>
            <Text style ={gStyle.text} >{item.name}</Text>
          </View>
      </TouchableOpacity>
       
    )}/>
  
  </LinearGradient>
   
  );
};

export default TrainingArrow;

const styles = StyleSheet.create({
 
});
