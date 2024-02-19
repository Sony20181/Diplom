import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';

const Target = () => {
  const [selectedPoint, setSelectedPoint] = useState([]);
 
  const handlePointPress = point => {
    setSelectedPoint(prevPoints => [...prevPoints, point]);
  };

 

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.ring, styles.outerRing]}
          onPress={() => handlePointPress(5)}
        />
        <TouchableOpacity
          style={[styles.ring, styles.middleRing]}
          onPress={() => handlePointPress(6)}
        />
        <TouchableOpacity
          style={[styles.ring, styles.innerRing]}
          onPress={() => handlePointPress(7)}
        />
        <TouchableOpacity
          style={[styles.ring, styles.innerRing1]}
          onPress={() => handlePointPress(8)}
        />
        <TouchableOpacity
          style={[styles.ring, styles.innerRin2]}
          onPress={() => handlePointPress(9)}
        />
        <TouchableOpacity
          style={[styles.centerCircle]}
          onPress={() => handlePointPress(10)}
        />
      </View>

      {selectedPoint.length > 0 && (
        <Text style={styles.selectedPointText}>{selectedPoint.join(', ')}</Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
  },
  ring: {
    position: 'absolute',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 125,
  },
  outerRing: {
    width: 250,
    height: 250,
    backgroundColor: 'blue',
  },
  middleRing: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  innerRing: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
  innerRing1: {
    width: 100,
    height: 100,
    backgroundColor: '#e4f52f',
  },
  innerRin2: {
    width: 50,
    height: 50,
    backgroundColor: '#e4f52f',
  },
  centerCircle: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'black',
  },
  selectedPointText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Target;
