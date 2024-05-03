import React, { useState } from 'react';
import { View,StyleSheet,TouchableOpacity, Text, ScrollView,TouchableWithoutFeedback, PanResponder,Animated  } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import  { } from '../Store/TrainingSlice'
import { addTraining} from '../Store/TrainingSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WA6Ring from './WA6Ring';
import WAFull from './WAFull';
import WAVertival3_X from './WAVertical3_X';
import { useEffect } from 'react';
import {  getScoreStyle } from '../../hooks/hooks';
import T3DIBO from './T3DIBO.js';

const TargetMenu = ({ route , navigation}) => {


    const { trainingName, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
      windDirection,weather,hours, minute,rounds,countSeries  } = route.params;

    const dispatch = useDispatch();
    const [points, setPoints] = useState([]);
    const [allPoints, setAllPoints] = useState([]);
    const [allRounds, setAllRounds] = useState([]);
   
    const canvasStyle = selectedMenu === 'WA вертикальный 3-х' 
    ? { width: 400, height: 640 }
    : { width: 300, height: 300 };

    let componentToRender = null;
    let scoreStyleTraget = null;
    if (selectedMenu === 'WA Полный') {
      componentToRender = <WAFull />;
      scoreStyleTraget = 'WA Полный';
    } else if (selectedMenu === 'WA 6 колец') {
      componentToRender = <WA6Ring />;
      scoreStyleTraget = 'WA 6 колец';
    } else if (selectedMenu === 'WA вертикальный 3-х') {
      componentToRender = <WAVertival3_X />;
      scoreStyleTraget = 'WA вертикальный 3-х';
    }
    else if (selectedMenu === '3DIBO') {
    componentToRender = <T3DIBO />;
    scoreStyleTraget = '3DIBO';
  }
     
    const addTrainigs = () => {
            dispatch(addTraining({trainingName,points, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
              windDirection,weather,hours, minute,rounds,allRounds,countSeries }))
              navigation.navigate('Тренировки')
            
    };

    const handlePress = (event) => {
      const { locationX, locationY } = event.nativeEvent;
      if (points.length < 3 && allPoints.length < countSeries && allRounds.length < rounds  ){
    
        let score = 0;
        //const distanceFromCenter = Math.sqrt(Math.pow(locationX - 150, 2) + Math.pow(locationY - 150, 2));
        if (selectedMenu === 'WA 6 колец') {
          const distanceFromCenter = Math.sqrt(Math.pow(locationX - 150, 2) + Math.pow(locationY - 150, 2));
          if (distanceFromCenter <= 5) {
            score= "X";
          } else if (distanceFromCenter > 5 && distanceFromCenter <= 18) {
            score= "X";
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
        }
        else if (selectedMenu === 'WA Полный') {
          const distanceFromCenter = Math.sqrt(Math.pow(locationX - 150, 2) + Math.pow(locationY - 150, 2));
          if (distanceFromCenter <= 5) {
            score= "X";
          } else if (distanceFromCenter > 5 && distanceFromCenter <= 10) {
            score= "X";
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
        }
          else if (selectedMenu === 'WA вертикальный 3-х') {
         const distanceFromCenter = Math.sqrt(Math.pow(locationX - 200, 2) + Math.pow(locationY - 100, 2));
         const distanceFromCenter2 = Math.sqrt(Math.pow(locationX - 200, 2) + Math.pow(locationY - 310, 2));
         const distanceFromCenter3 = Math.sqrt(Math.pow(locationX - 200, 2) + Math.pow(locationY - 520, 2));
        
         if (distanceFromCenter <= 5 || distanceFromCenter2 <= 5 || distanceFromCenter3 <= 5 ) {
            score= 12;
          } else if ( (distanceFromCenter > 5 && distanceFromCenter <= 10) || (distanceFromCenter2 > 5 && distanceFromCenter2 <= 10) ||  (distanceFromCenter3 > 5 && distanceFromCenter3 <= 10)) {
            score= 10;
          } else if ((distanceFromCenter > 10 && distanceFromCenter <= 25) || (distanceFromCenter2 > 10 && distanceFromCenter2 <= 25) || (distanceFromCenter3 > 10 && distanceFromCenter3 <= 25)) {
            score= 9;
          } else if ( (distanceFromCenter > 25 && distanceFromCenter <= 40) || (distanceFromCenter2 > 25 && distanceFromCenter2 <= 40) || (distanceFromCenter3 > 25 && distanceFromCenter3 <= 40) ) {
            score= 8;
          } else if ( (distanceFromCenter > 55 && distanceFromCenter <= 70) || (distanceFromCenter2 > 55 && distanceFromCenter2 <= 70) || (distanceFromCenter3 > 55 && distanceFromCenter3 <= 70) ) {
            score= 7;
          } else if ( (distanceFromCenter > 70 && distanceFromCenter <= 85) ||(distanceFromCenter2 > 70 && distanceFromCenter2 <= 85) || (distanceFromCenter3 > 70 && distanceFromCenter3 <= 85)) {
            score= 6;
          } else if ( (distanceFromCenter > 85 && distanceFromCenter <= 100) || (distanceFromCenter2 > 85 && distanceFromCenter2 <= 100) || (distanceFromCenter3 > 85 && distanceFromCenter3 <= 100) ) {
            score= 5;
          } else {
            score= 0;
          }

         // setPoints([...points, { x: locationX, y: locationY, score }]);
        }
        else if (selectedMenu === '3DIBO') {
          if (Math.sqrt((locationX - 150) ** 2 + (locationY - 150) ** 2) <= 150 && Math.sqrt((locationX - 160) ** 2 + (locationY - 170) ** 2) >= 115 ) {
            score=5;
          } else if (Math.sqrt((locationX - 165) ** 2 + (locationY - 165) ** 2) <= 115 && Math.sqrt((locationX - 160) ** 2 + (locationY - 170) ** 2) >= 80 ) {
            score= 8;
          } else if (Math.sqrt((locationX - 160) ** 2 + (locationY - 170) ** 2) <= 80 && Math.sqrt((locationX - 160) ** 2 + (locationY - 170) ** 2) >= 20) {
            score= 9;
          } else {
            score= 10;
          }
        }
        
    
       // setPoints([...points, { x: locationX , y: locationY, score }]);
      
      /* if(isPressed) {
        setScale(1.19); // Увеличиваем масштаб при движении пальцем
        setPoints([...points, { x: locationX  , y: locationY, score }]);
      }
      else{
        setPoints([...points, { x: locationX / scale, y: locationY / scale, score }]);
      }*/
      if (isPressed) {  
        setPoints([...points, { x: locationX, y: locationY, score }]);  
      } else {  
        const scaledX = isWithinSelectedArea(locationX) ? (locationX - selectedAreaX) * selectedAreaScale + selectedAreaX : locationX / scale;  
        const scaledY = isWithinSelectedArea(locationY) ? (locationY - selectedAreaY) * selectedAreaScale + selectedAreaY : locationY / scale;
        
        setPoints([...points, { x: scaledX, y: scaledY, score }]);  
      }  
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
  };

 /*const [isPressed, setIsPressed] = useState(false);
  const [scale, setScale] = useState(1);

  const handlePressIn = () => {
    setIsPressed(true);
  };
  
  const handlePressOut = () => {
    setIsPressed(false);
    setScale(1); // Возвращаем к нормальному масштабу при отпускании
  };*/
  const isWithinSelectedArea = (x, y) => {
    const x1 = selectedAreaX;
    const y1 = selectedAreaY;
    const x2 = selectedAreaX + selectedAreaWidth; // Предполагаем, что selectedAreaWidth и selectedAreaHeight - ширина и высота области
    const y2 = selectedAreaY + selectedAreaHeight;
  
    return x >= x1 && x <= x2 && y >= y1 && y <= y2;
  };
  
  const [isPressed, setIsPressed] = useState(false);  
  const [scale, setScale] = useState(1);  
  const [selectedAreaScale, setSelectedAreaScale] = useState(1);  
  const [selectedAreaX, setSelectedAreaX] = useState(0); // координаты левого верхнего угла области 
  const [selectedAreaY, setSelectedAreaY] = useState(0);  
    
  const handlePressIn = (event) => {  
    setIsPressed(true);
  
    // Устанавливаем координаты и масштаб выбранной области
    setSelectedAreaX(event.nativeEvent.locationX);
    setSelectedAreaY(event.nativeEvent.locationY);
    setSelectedAreaScale(1.6);
  };  
      
  const handlePressOut = () => {  
    setIsPressed(false);  
    setSelectedAreaScale(1);  
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
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={() => addTrainigs()} />    
            </View>
            <View style ={styles.contentTitle }>
              <View style ={styles.AllScore}>
                <Text style = {styles.title}>Серия {currentSeria}/{countSeries}</Text>
               
                <Text  style = {styles.title}>
                  {points.reduce((acc, point) => {
                    if (point.score === "X") {
                      return acc + 10;
                    } else {
                      return acc + parseInt(point.score, 10);
                    }
                  }, 0)} / 30
                </Text>
              </View>
              <View style ={styles.AllScore}>
                <Text style = {styles.title}>Раунд {currentRound} / {rounds} </Text>
                <Text style={styles.title}>
                  {allPoints.reduce((acc, current) => {
                    current.forEach((point) => {
                      acc += point.score === "X" ? 10 : parseInt(point.score, 10);
                    });
                    return acc;
                  }, 0)} / {30 * countSeries}
                </Text>
                                 
              </View>
              <View style ={styles.AllScore}>
                <Text style = {styles.title}>Среднее </Text>  
                <Text style = {styles.title}>
                  {allPoints.reduce((acc, current) => {
                        current.forEach((point) => {
                          acc = (acc + point.score === "X" ? 10 : parseInt(point.score, 10)) / 10;
                          //acc = Number(((acc + point.score) / (30 * countSeries)).toFixed(2));
                        });
                    return acc; }, 0)}</Text> 
                
              </View>
                
              
            </View>
            
         
          </View>
          
          <ScrollView>
          <MaterialCommunityIcons  style={styles.deleteButton} name="backspace-reverse-outline" size={35} color="black"  onPress={handleClearPoints} />
         
           <View style={styles.container2}>       
             {/**  <TouchableWithoutFeedback onPress={handlePress}>           
                <View  style= {[styles.canvas, styles.canvasStyle]}>     
                {componentToRender}
                  {points.map((point, index) => (
                    <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                  ))} 
                  
                </View> 
              </TouchableWithoutFeedback> 
              <TouchableWithoutFeedback onPressIn={handlePressIn} onPress={handlePress} onPressOut={handlePressOut}>
              <View style={[{ transform: [{ scale: scale }] },styles.canvas, styles.canvasStyle ]}>
                {componentToRender}
                {points.map((point, index) => (
                            <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                          ))} 
              </View>
              </TouchableWithoutFeedback>*/}
              <TouchableWithoutFeedback onPressIn={handlePressIn} onPress={handlePress} onPressOut={handlePressOut}>
    <View style={[{ transform: [{ scale: selectedAreaScale }] }, styles.canvas, styles.canvasStyle ]}>
      {componentToRender}  
      {points.map((point, index) => (  
        <View key={index} style={[styles.point, { left: point.x, top: point.y }]} />  
      ))}   
    </View>  
  </TouchableWithoutFeedback>

   
              <Text style ={styles.PointText }>
              Очки:{" "}
              {points.reduce((acc, point) => {
                if (point.score === "X") {
                  return acc + 10;
                } else {
                  return acc + parseInt(point.score, 10);
                }
              }, 0)}
            </Text>
             
              <View style= {styles.PointRow}>
                {points.map((point, index) => (
                  <View  key={index} style={getScoreStyle(point.score, scoreStyleTraget)}>
                    <Text>{point.score}</Text>
                  </View>
                ))}
              </View>
              
            </View> 
       
              <TouchableOpacity onPress={allPoints.length === currentSeria ? () => handleNextRound() : allRounds.length == currentRound ? () => addTrainigs() : () => handleNextSeries()}> 
                <Text style={styles.Button1}>
                    {allPoints.length == currentSeria ? 'Следующий раунд' : allRounds.length == currentRound ? 'Завершить' : 'Добавить'}
                </Text> 
              </TouchableOpacity>
             
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
       paddingHorizontal:5,
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
   AllScore:{
    flexDirection: 'column',
    
   },


////// new
  container2: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  
  },
  canvas: {
   // width: 300,
   // height: 300,
  
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

  },
  PointRow:{
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  point: {
  position: 'absolute',
  width: 4,
  height: 4,
  backgroundColor: 'black',
  borderRadius: 2,
  
  },
  PointText:{
    marginTop:50,
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
 
 