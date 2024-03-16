import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTrainingById } from '../Store/TrainingSlice';
import { PDFDocument, rgb } from 'react-native-pdf-lib';
import { LinearGradient } from 'expo-linear-gradient';

const data = [
  { name: 'Мишень 1', type: 'Круглая', distance: '100 м' },
  { name: 'Мишень 2', type: 'Прямоугольная', distance: '50 м' },
  { name: 'Мишень 3', type: 'Звезда', distance: '200 м' },
];

const TrainingResult = ({ route }) => {
  const { trainingId } = route.params;
  const training = useSelector((state) => selectTrainingById(state, trainingId));
  console.log(training.allRounds)
  return(
    <LinearGradient   
      //colors={['#a1ffce', '#ffffff']}
      colors={['#0f0c29', '#302b63', '#24243e']}
      style ={styles.main }
    >
       <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Text style={{ flex: 1 }}>{item.type}</Text>
            <Text style={{ flex: 1 }}>{item.distance}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>

    </LinearGradient>
  );
    
};
    export default TrainingResult;
    
const styles = StyleSheet.create({
  main: {
    flex: 1, 
  },
  })