/*import React from "react";
import { Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectTrainingById } from "../Store/TrainingSlice";

export default function TrainingInfo({navigation,route}) {
    const { trainingId } = route.params;
    const training = useSelector((state) => selectTrainingById(state, trainingId));
    console.log(training)
    return (
      
<Text>hjfhsdjfhjk</Text>
     
        
    );
  }*/

  /*import React from 'react';
import { View, Text,Button , TextInput,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { gStyle } from '../../styles/style';
import { selectArrowById, updateArrow } from '../Store/ArrowSlice';
import { useState } from 'react';

const ArrowInfo = ({navigation, route}) => {
  const { ArrrowId } = route.params;
  const dispatch = useDispatch();
  const arrow = useSelector((state) => selectArrowById(state, ArrrowId)); 
  
  const [updatedName, setUpdatedName] = useState(arrow.name);

  
  const loadScreen = () => {
      navigation.goBack() 
  }
  const handleUpdateBow = () => {
    const updatedArrow = {
      ...arrow,
      name: updatedName || arrow.name,
      
    };
    dispatch(updateArrow(updatedArrow));
    navigation.navigate('Стрелы');
  };
    
  return (
    <LinearGradient   
      colors={['#a1ffce', '#ffffff']}
      style ={styles.main }
    >
      <View style={styles.row}>
        <Text style={styles.text} >Название: </Text>       
        <TextInput style={styles.InputText}  value={updatedName} onChangeText={setUpdatedName} />
      </View>
      
      <Button title = "Вернутся" onPress={loadScreen} />
    </LinearGradient>
  );
  
};

export default ArrowInfo;


const styles = StyleSheet.create({
  main: {
    flex: 1,
   
  },
  content:{
    marginTop:30,
    //padding:5,
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  TypeBow:{
    fontSize: 16,
    paddingVertical:10,
    justifyContent:"center",
  },
  text: {
    fontSize: 16,
    width: "45%",
   
  },
  InputText: {
    flex: 1,
   // borderWidth: 1,
    borderBottomWidth:1,
    borderColor: 'black',
   // padding: 10,
  },
  InputTextarea: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 100,
  },
  AddInput:{
    justifyContent: "center",
    color:"#0c5733",
    fontSize:20,
},
});*/

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';

import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { selectArrowById } from '../Store/TrainingSlice';
import { updateTraining } from '../Store/TrainingSlice';
import Svg, { Circle } from 'react-native-svg';

const TrainingInfo = ({navigation,route}) => {
 
  const { trainingId } = route.params;
  const training = useSelector((state) => selectArrowById(state, trainingId));
  const dispatch = useDispatch();
  const [updatedName, setUpdatedName] = useState(training.trainingName || "");

  

  const handleUpdateTraining = () => {
    const updatedTraining = {
      ...training,
      trainingName: updatedName || training.trainingName,
    
    
    };
    dispatch(updateTraining(updatedTraining));
    navigation.navigate('Тренировки');
  };
  

  return (
    <LinearGradient   
      colors={['#a1ffce', '#ffffff']}
      style ={styles.main }
    >
      <View style ={styles.content }>
                <Ionicons name="close-sharp" size={24} color="black" onPress={() => navigation.navigate('Тренировки')}/>
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={handleUpdateTraining} />
      </View>
      <View style={styles.row}>
          <Text style={styles.text} >Название: </Text>       
          <TextInput style={styles.InputText}  value={updatedName} onChangeText={setUpdatedName} />
        </View>
        <Text>{training.distance}</Text>
        <Text>{training.selectedArrow}</Text>
        <Text>{training.rounds}</Text>
        <Text>{training.selectedMenu}</Text>
        <Text>{training.windSpeed}</Text>
        <Text>{training.windDirection}</Text>
        <Text>{training.weather}</Text>

      <View style={styles.container}>
        <TouchableWithoutFeedback>
        
          <View style={styles.canvas}>
            <Svg height="300" width="300">
            <Circle cx="150" cy="150" r="150" fill="#08068c" style={{ borderColor: 'white', }} />
            <Circle cx="150" cy="150" r="128" fill="#2d2b94" />
            <Circle cx="150" cy="150" r="106" fill="#c22b3c" />
            <Circle cx="150" cy="150" r="84" fill="#bf2133" />
            <Circle cx="150" cy="150" r="62" fill="#fbff00" />
            <Circle cx="150" cy="150" r="40" fill="#ecf013" />
            <Circle cx="150" cy="150" r="18" fill="#fbff00" />
            <Circle cx="150" cy="150" r="3" fill="#000" />
            </Svg>
            
            {training.points.map((point, index) => (
              <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
            ))}
          </View>
        </TouchableWithoutFeedback>

      </View>
    
      
      <ScrollView style={styles.container}>
        <Text>Очки: {training.points.reduce((acc, point) => acc + point.score, 0)}</Text>
        <Text>Очки по точкам: {training.points.map((point, index) => (index === 0 ? '' : ', ') + point.score)}</Text>
      </ScrollView>
      
    </LinearGradient>
  );
};

export default TrainingInfo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
   
  },
  content:{
    marginTop:30,
    //padding:5,
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    width: "45%",
   
  },
  InputText: {
    flex: 1,
    borderBottomWidth:1,
    borderColor: 'black',
  },
  InputTextarea: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 100,
  },
  AddInput:{
    justifyContent: "center",
    color:"#0c5733",
    fontSize:20,
},

container11: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
},
point: {
  width: 6,
  height: 6,
  backgroundColor: 'black',
  borderRadius: 3,
  position: 'absolute',
},
});

