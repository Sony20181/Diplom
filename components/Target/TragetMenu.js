import React, { useState } from 'react';
import { View, TextInput,StyleSheet,TouchableOpacity,Image ,Text, ScrollView,TouchableWithoutFeedback, Button} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import  { } from '../Store/TrainingSlice'
import { addTraining} from '../Store/TrainingSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WA6Ring from './WA6Ring';
import WAFull from './WAFull';
import { useEffect } from 'react';


const TargetMenu = ({ route , navigation}) => {
   
    const { trainingName, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
      windDirection,weather,rounds,countSeries  } = route.params;

    const dispatch = useDispatch();
    const [points, setPoints] = useState([]);
    const [allPoints, setAllPoints] = useState([]);
    const [allRounds, setAllRounds] = useState([]);

   /* const roundsToAdd = [
      [
        [{"score": 1, "x": 136.6666717529297, "y": 218.6666717529297}], 
        [{"score": 1, "x": 143.3333282470703, "y": 215}]
      ],
      [
        [{"score": 2, "x": 136.6666717529297, "y": 218.6666717529297}], 
        [{"score": 2, "x": 143.3333282470703, "y": 215}]
      ]
    ];
    
    console.log("roundsToAdd", JSON.stringify(roundsToAdd));
    
    const firstRound = roundsToAdd[0];
    const secondRound = roundsToAdd[1];
    
    console.log("First round:", JSON.stringify(firstRound));
    console.log("Second round:", JSON.stringify(secondRound));*/

    let componentToRender = null;
    if (selectedMenu === 'WA Полный') {
      componentToRender = <WAFull />;
    } else if (selectedMenu === 'WA 6 колец') {
      componentToRender = <WA6Ring />;
    } else if (selectedMenu === 'WA 5 колец') {
      componentToRender = <WAFull />;
    }
    const addTrainigs = () => {
           
            dispatch(addTraining({trainingName,points, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
              windDirection,weather,rounds,allRounds }))
              navigation.navigate('Тренировки')
            
    };

    const handlePress = (event) => {
      const { locationX, locationY } = event.nativeEvent;
      if (points.length < 3 && allPoints.length < countSeries && allRounds.length < rounds  ){
    
        let score = 0;
        const distanceFromCenter = Math.sqrt(Math.pow(locationX - 150, 2) + Math.pow(locationY - 150, 2));
        if (selectedMenu === 'WA 6 колец') {
          if (distanceFromCenter <= 5) { // всмето 11 и 11 нужен крестик
            score= 11;
          } else if (distanceFromCenter > 5 && distanceFromCenter <= 18) {
            score= 11;
          } else if ( distanceFromCenter > 18 && distanceFromCenter <= 40) {
            score= 10;
          } else if ( distanceFromCenter > 40 && distanceFromCenter <= 62) {
            score= 9;
          } else if ( distanceFromCenter > 62 && distanceFromCenter <= 84) {
            score= 8;
          } else if ( distanceFromCenter > 84 && distanceFromCenter <= 106) {
            score= 7;
          } else if ( distanceFromCenter > 106 && distanceFromCenter <= 128) {
            score= 6;
          } else if ( distanceFromCenter > 128 && distanceFromCenter <= 150) {
            score= 5;
          } else {
            score= 0;
          }
         // setPoints([...points, { x: locationX, y: locationY, score }]);
          
        }
        else if (selectedMenu === 'WA Полный') {
          if (distanceFromCenter <= 5) {
            score= 12;
          } else if (distanceFromCenter > 5 && distanceFromCenter <= 10) {
            score= 11;
          } else if ( distanceFromCenter > 10 && distanceFromCenter <= 24) {
            score= 10;
          } else if ( distanceFromCenter > 24 && distanceFromCenter <= 38) {
            score= 9;
          } else if ( distanceFromCenter > 38 && distanceFromCenter <= 52) {
            score= 8;
          } else if ( distanceFromCenter > 52 && distanceFromCenter <= 66) {
            score= 7;
          } else if ( distanceFromCenter > 66 && distanceFromCenter <= 80) {
            score= 6;
          } else if ( distanceFromCenter > 80 && distanceFromCenter <= 94) {
            score= 5;
          } else if ( distanceFromCenter > 94 && distanceFromCenter <= 108) {
            score= 4;
          } else if ( distanceFromCenter > 108 && distanceFromCenter <= 122) {
            score= 3;
          } else if ( distanceFromCenter > 122 && distanceFromCenter <= 136) {
            score= 2;
          } else if ( distanceFromCenter > 136 && distanceFromCenter <= 150) {
            score= 1;
          } else {
            score= 0;
          }

         // setPoints([...points, { x: locationX, y: locationY, score }]);
        }
    
        setPoints([...points, { x: locationX, y: locationY, score }]);
      }
    };
   
    const handleClearPoints = () => {
      const updatedPoints = [...points];
      updatedPoints.pop();
      setPoints(updatedPoints);
    };
    
    const [currentSeria, setcurrentSeria] = useState(1);
    const [currentRound, setCurrentRound] = useState(1);
    const [stopSeries, setStopSeries] = useState(true);
    const [stopRound, setStopRound] = useState(true);

  const handleNextSeries = () => {
    
    
    if (currentSeria <= countSeries && stopSeries == true) {
      setAllPoints([...allPoints, points]);
      if (currentSeria == countSeries){setcurrentSeria(countSeries); setStopSeries(false)}
      else{setcurrentSeria(currentSeria+1);}
      setPoints([]);
      
    }
  };
  const handleNextRound = () => { 
    if (currentRound <= rounds && stopRound == true ) {
      setAllRounds([...allRounds, allPoints]);
      setStopSeries(true)
      setcurrentSeria(1)
      setAllPoints([]);
      if (currentRound == rounds){setCurrentRound(rounds); setStopRound(false)}
      else{setCurrentRound(currentRound+1);}
    }
    console.log(allRounds)
  };

  const handlePrev = () => {
    if (currentSeria > 0) {
      setcurrentSeria(currentSeria - 2);
    }
   
  };
  

    return (
        <LinearGradient   
            colors={['#a1ffce', '#ffffff']}
            style ={styles.main }
        >
          <View style ={styles.content }>
            <View style ={styles.contentTitle }>
                <Ionicons name="close-sharp" size={24} color="black" onPress={() => navigation.navigate('Тренировки')}/>
                <Text style = {styles.title}>{trainingName}</Text>
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={addTrainigs} />    
            </View>
            <View style ={styles.contentTitle }>
                <Text style = {styles.title}>Серия {currentSeria}/{countSeries}</Text>
                <Text style = {styles.title}>Раунд {currentRound} / {rounds} </Text>
                <Text style = {styles.title}>Среднее</Text>  
            </View>
            
         
          </View>
          <ScrollView>
          <MaterialCommunityIcons  style={styles.deleteButton} name="backspace-reverse-outline" size={35} color="black"  onPress={handleClearPoints} />
         
            <View style={styles.container2}>       
              <TouchableWithoutFeedback onPress={handlePress}>           
                <View style={styles.canvas}>     
                {componentToRender}
                  {points.map((point, index) => (
                    <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                  ))}
                  
                </View>
              </TouchableWithoutFeedback>
              <Text>Очки: {points.reduce((acc, point) => acc + point.score, 0)}</Text>
              <Text>Очки по точкам: {points.map((point, index) => (index === 0 ? '' : ', ') + point.score)}</Text>
            </View>
            <TouchableOpacity onPress={allPoints.length === countSeries ? handleNextRound : handleNextSeries}>
              <Text style={styles.Button1} >{allPoints.length === countSeries ? 'Следующий раунд' : 'Добавить'}</Text>
              
              
            </TouchableOpacity>
           
            
         {/**   <TouchableOpacity onPress={handlePrev}  >
              <Text  style={styles.Button1} >Предыдущая серия</Text>
            </TouchableOpacity> */}
       
    <View>
             
      {allPoints[currentSeria-1] && allPoints[currentSeria-1].map((points, index) => (
        <View key={index}>
          <Text>{`Score: ${points.score}`}</Text>
        </View>
      ))}
    </View>
    
   
     
            
             </ScrollView>  
       </LinearGradient>
   )
};

export default TargetMenu;




const styles = StyleSheet.create({
   main: {
       flex: 1,
      
     },
     content:{
       paddingTop:20,
       backgroundColor: "#b4dbc8",
       
     },
     contentTitle:{
       paddingTop:10,
       flexDirection: "row",
       justifyContent:"space-between",
     },
     title:{
       fontSize:20,
       color:"white",
     },
     container: {
       paddingHorizontal: 20,
     },
     row: {
       flexDirection: 'row',
       alignItems: 'center',
       marginHorizontal: 20,
       marginBottom:10,
     },
    
     text: {
       fontSize: 16,
       //width: "40%",
       padding:10,
     },
     InputText: {
       flex: 1,
       borderWidth:1,
       paddingVertical: 5,
       paddingHorizontal:10,
       
     },
    
     AddInput:{
       justifyContent: "center",
       color:"#0c5733",
       fontSize:20,
   },


////// new
container2: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 
},
canvas: {
 width: 300,
 height: 300,
// backgroundColor: 'lightgray',
//borderRadius: 150,
 alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

},
point: {
 position: 'absolute',
 width: 4,
 height: 4,
 backgroundColor: 'pink',
 borderRadius: 2,
 
},
deleteButton: {
  padding: 10,
  marginTop: 10,
  
},
Button1:{
  fontSize:20,
  color:"black",
  padding: 10,
  marginTop: 10,
},

 });
 
 