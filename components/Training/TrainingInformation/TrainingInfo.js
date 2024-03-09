import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';

import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { selectArrowById } from '../../Store/TrainingSlice';
import { updateTraining } from '../../Store/TrainingSlice';
import Svg, { Circle } from 'react-native-svg';
import WA6Ring from '../../Target/WA6Ring';
import WAFull from '../../Target/WAFull';

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
 
  /*let componentToRender = null;
    if (training.selectedMenu === 'WA Полный') {
      componentToRender = <WAFull />;
    } else if (training.selectedMenu === 'WA 6 колец') {
      componentToRender = <WA6Ring />;
    } else if (training.selectedMenu === 'WA 5 колец') {
      componentToRender = <WAFull />;
    }
  
    console.log(training.allRounds)*/
    console.log("roundsToAdd", JSON.stringify(training.allRounds));
    console.log(training.allRounds.length)
    const getTotalScore = (mas) => {
      return mas.reduce((total, round) => {
          return total + round.reduce((roundTotal, shots) => {
              return roundTotal + shots.reduce((shotTotal, shot) => {
                  return shotTotal + shot.score;
              }, 0);
          }, 0);
      }, 0);
  }; 
  console.log(getTotalScore(training.allRounds));
 
  return (
    <LinearGradient   
      //colors={['#a1ffce', '#ffffff']}
      colors={['#0f0c29', '#302b63', '#24243e']}
      style ={styles.main }
    >
        <LinearGradient colors={['#0f0c29', '#302b63', '#24243e']}  style ={styles.headerTraining }>
      <View style ={styles.Headercontent }>
                <Ionicons name="close-sharp" size={24} color="white" onPress={() => navigation.navigate('Тренировки')}/>
      <View style={styles.Headercontainer}> 
        <Text style={styles.HeaderTime}>{training.hours}: {training.minute}</Text>       
        <TextInput style={styles.HeaderinputText}  value={updatedName} onChangeText={setUpdatedName} />
        <Text style={styles.HeaderWind}>Ветер</Text>
        <View style={styles.Headerrow}>
          <Text style={styles.Headertext}>Скорость: {training.windSpeed} </Text>
          <Text style={styles.Headertext}>Напрвление: {training.windDirection} </Text>
        </View>
          <Text style={styles.Headertext}>Погода: {training.weather}</Text>
          <Text style={styles.Headertext}>Лук: {training.selectedBow}</Text>
          <Text style={styles.Headertext}>Стрела:{training.selectedArrow } </Text>
          <Text style={styles.Headertext}>Дистаниция: {training.distance} м</Text>
          <Text style={styles.Headertext}>Вид мишени: {training.selectedMenu}</Text>
        </View>
        <Ionicons name="checkmark-done-sharp" size={24} color="white" onPress={handleUpdateTraining} />
      </View>
     
      
      </LinearGradient>
    <View >
    {training.allRounds.map((round, index) => (
        <TouchableOpacity key={index} onPress={() => navigation.navigate('TrainingSeriesList', { round,trainingId, index })}>
          <View style={styles.roundContent}>
          <Text style={styles.roundText}>{`Раунд ${index + 1}`}</Text>
          <Text style={styles.roundText}>{round.flat().reduce((acc, item) => acc + item.score, 0)}/{training.countSeries * 30}</Text>
          </View>
          
        </TouchableOpacity>
      ))} 
    </View>
        
     
      
    </LinearGradient>
  );
};

export default TrainingInfo;

const styles = StyleSheet.create({
  main: {
    flex: 1, 
  },
  headerTraining:{
   // backgroundColor: "#393563",
    borderBottomColor:"white",
    borderBottomWidth:1,
  },
  Headercontainer: {
    padding: 20,
   // backgroundColor: '#423c7d',
    borderRadius: 10,
    marginTop: 10,
  },
  HeaderinputText: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color:"white",
  },
  Headerrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    
  },
  Headertext: {
    fontSize: 16,
    marginBottom: 5,
    color:"white",
  },
  HeaderTime:{
    fontSize: 16,
    marginBottom: 5,
    color:"white",
    textAlign:"center",
  },
  HeaderWind:{
    fontSize: 16,
    marginBottom: 5,
    color:"white",
    textAlign:"center",
  },
  Headercontent:{
    marginTop:30,
    paddingHorizontal:5,
    flexDirection: "row",
    justifyContent:"space-between",
    
  },
  roundContent:{
    paddingLeft:20,
    paddingRight:20,
    flexDirection: "row",
    justifyContent:"space-between",
    borderBottomColor:"white",
    borderBottomWidth:1,
  },
  roundText: {
    fontSize:18,
    margin: 15,
    color:"white",
    
   
  },

  
});

