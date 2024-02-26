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
      windDirection,weather,rounds  } = route.params;

    const dispatch = useDispatch();
    const [points, setPoints] = useState([]);
    
    const [allPoints, setAllPoints] = useState([]);
    //const [allPoints, setAllPoints] = useState(Array.from({ length: 10 }, () => []));
    
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
              windDirection,weather,rounds,allPoints }))
              navigation.navigate('Тренировки')
            
    };

    const handlePress = (event) => {
      const { locationX, locationY } = event.nativeEvent;
      if (points.length < 3 ){
    
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
      
       // setAllPoints([...allPoints, points]);
      

    };
   
    const handleClearPoints = () => {
      const updatedPoints = [...points];
      updatedPoints.pop();
      setPoints(updatedPoints);
    };
    console.log(allPoints)
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    //console.log("points",points)
    //const updatedPoints = [...points]
    if (currentIndex < 10) {
   // if (currentIndex < allPoints.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAllPoints([...allPoints, points]);
      setPoints([]);
     // setAllPoints([...allPoints, points]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  console.log(allPoints)
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
                <Text style = {styles.title}>Серия {currentIndex+1}/10</Text>
                <Text style = {styles.title}>Раунд / {rounds} </Text>
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
            <TouchableOpacity onPress={handleNext}  >
              <Text style={styles.Button1} >Далее</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePrev}  >
              <Text  style={styles.Button1} >Предыдущая серия</Text>
            </TouchableOpacity>
       
    <View>
   {/*   <Button title="Назад" onPress={handlePrev} disabled={currentIndex === 0} />
      <Button title="Вперед" onPress={handleNext} disabled={currentIndex === allPoints.length - 1} />
      
       Отображение текущего подсписка */}
      {allPoints[currentIndex] && allPoints[currentIndex].map((points, index) => (
        <View key={index}>
          <Text>{`Score: ${points.score}, X: ${points.x}, Y: ${points.y}`}</Text>
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
 
 