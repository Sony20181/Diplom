import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gStyle } from '../../../styles/style';
import { useState } from 'react';

import { useSelector } from 'react-redux';

const TrainingBow = ({ navigation, route }) => {
  let selectedBow = route.params.selectedBow;
 //const setSelectedBow = route.params.setSelectedBow;
  const bows = useSelector(state => state.bows.bows)
  const handleBowClick = (value) => {
    //setSelectedBow(value);
    selectedBow = value
    navigation.goBack();
  };
 
  
  return (
    <LinearGradient   
            colors={['#a1ffce', '#ffffff']}
            style={styles.container}
        >

<FlatList data = {bows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleBowClick(item.name)}>
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
