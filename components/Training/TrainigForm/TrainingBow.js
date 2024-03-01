import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gStyle } from '../../../styles/style';
import { useState } from 'react';

import { useSelector } from 'react-redux';

const TrainingBow = ({ navigation, onSelectBow }) => {
  
  const bows = useSelector(state => state.bows.bows)
 
 
  
  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
    style={gStyle.container}
        >

<FlatList data = {bows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => onSelectBow(item.name)}>
          <View style ={gStyle.content }>
            <Text style ={gStyle.text} >{item.name}</Text>
          </View>
      </TouchableOpacity>
       
    )}/>
  
    
    
  
  </LinearGradient>
  );
};

export default TrainingBow;


const styles = StyleSheet.create({
 
});
