import React, { useState } from 'react';
import { View, TextInput,StyleSheet,TouchableOpacity,Image ,Text, ScrollView,TouchableWithoutFeedback} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import  { } from '../Store/TrainingSlice'
import { addTraining} from '../Store/TrainingSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WA6Ring from './WA6Ring';
import WAFull from './WAFull';


const TargetMenu = ({ route , navigation}) => {
   
    const { trainingName, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
      windDirection,weather  } = route.params;

    const dispatch = useDispatch();
    const [points, setPoints] = useState([]);
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
              windDirection,weather }))
            navigation.navigate('Тренировки')
    };

    const handlePress = (event) => {
      const { locationX, locationY } = event.nativeEvent;
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

        setPoints([...points, { x: locationX, y: locationY, score }]);
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

        setPoints([...points, { x: locationX, y: locationY, score }]);
      }
        
    };
    const handleClearPoints = () => {
      const updatedPoints = [...points];
      updatedPoints.pop();
      setPoints(updatedPoints);
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
                <Text style = {styles.title}>Серия</Text>
                <Text style = {styles.title}>Раунд</Text>
                <Text style = {styles.title}>Среднее</Text>  
            </View>
            
         
          </View>
          <ScrollView>
          <MaterialCommunityIcons  style={styles.deleteButton} name="backspace-reverse-outline" size={35} color="black"  onPress={handleClearPoints} />
         
        
            <View style={styles.container2}>
                
            
              <TouchableWithoutFeedback onPress={handlePress}>           
                <View style={styles.canvas}>
              {/*    <Svg height="300" width="300">
                    <Circle cx="150" cy="150" r="150" fill="#08068c" style={{ borderColor: 'white', }} />
                    <Circle cx="150" cy="150" r="128" fill="#2d2b94" />
                    <Circle cx="150" cy="150" r="106" fill="#c22b3c" />
                    <Circle cx="150" cy="150" r="84" fill="#bf2133" />
                    <Circle cx="150" cy="150" r="62" fill="#fbff00" />
                    <Circle cx="150" cy="150" r="40" fill="#ecf013" />
                    <Circle cx="150" cy="150" r="18" fill="#fbff00" />
                    <Circle cx="150" cy="150" r="4" fill="#000" />
                  </Svg>  
                   <WAFull/>*/}
                  
                {componentToRender}
                  {points.map((point, index) => (
                    <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                  ))}
                </View>
              </TouchableWithoutFeedback>
              <Text>Очки: {points.reduce((acc, point) => acc + point.score, 0)}</Text>
              <Text>Очки по точкам: {points.map((point, index) => (index === 0 ? '' : ', ') + point.score)}</Text>
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

 });
 
 