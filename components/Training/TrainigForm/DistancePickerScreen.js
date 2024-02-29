import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput,Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const DistancePickerScreen = ({ onSelect }) => {
  const [customDistance, setCustomDistance] = useState('');
  const distances = [10, 15, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 90];



  const handleCustomDistance = () => {
    if (customDistance !== '' && !isNaN(customDistance)) {
      onSelect(parseInt(customDistance));
    }
  };

  return (
    <LinearGradient   
            colors={['#a1ffce', '#ffffff']}
            style={styles.container}
        >
        
    
    <View style={styles.buttonContainer}>
        {distances.map((distance) => (
          <TouchableOpacity
            key={distance}
            style={styles.button}
            onPress={() => onSelect(distance)}
          >
            <Text style={styles.buttonText}>{distance}</Text>
          </TouchableOpacity>
        ))}
      </View>

    <TextInput
      style={styles.input}
      placeholder="Введите свою дистанцию"
      onChangeText={(text) => setCustomDistance(text)}
      value={customDistance}
      keyboardType="numeric"
    />

    <TouchableOpacity style={styles.customButton} onPress={handleCustomDistance}>
      <Text style={styles.buttonText}>Добавить свою дистанцию</Text>
    </TouchableOpacity>
  
  </LinearGradient>
  );
};

export default DistancePickerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    //backgroundColor: '#f0f0f0',
    backgroundColor: '#007bff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  customButton: {
    backgroundColor: '#007bff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
