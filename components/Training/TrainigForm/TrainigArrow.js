import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput,FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gStyle } from '../../../styles/style';
import { useState } from 'react';

import { useSelector } from 'react-redux';

const TrainingArrow = ({ onSelectArrow }) => {
  const arrows = useSelector(state => state.arrow.arrow)
  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
            style={gStyle.container}
    >
    <FlatList data = {arrows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => onSelectArrow(item.name)}>
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
