import React from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback,TextInput, TouchableOpacity } from 'react-native';
import WA6Ring from '../../Target/WA6Ring';
import WAFull from '../../Target/WAFull';
import WAVertival3_X from '../../Target/WAVertical3_X';
import { useSelector } from 'react-redux';
import { selectTrainingById } from '../../Store/TrainingSlice';
import { LinearGradient } from 'expo-linear-gradient';
import { getScoreStyle } from '../../../hooks';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

const TrainingPointsList = ({ navigation, route }) => {
    const { sublist,trainingId } = route.params;
    const training = useSelector((state) => selectTrainingById(state, trainingId));
    console.log(sublist)
    const canvasStyle = training.selectedMenu === 'WA вертикальный 3-х' 
    ? { width: 400, height: 400 }
    : { width: 300, height: 300 };
    let componentToRender = null;
    let scoreStyleTraget = null;
    if (training.selectedMenu === 'WA Полный') {
      componentToRender = <WAFull />;
      scoreStyleTraget = 'WA Полный';
    } else if (training.selectedMenu === 'WA 6 колец') {
      componentToRender = <WA6Ring />;
      scoreStyleTraget = 'WA 6 колец';
    } else if (training.selectedMenu === 'WA вертикальный 3-х') {
      componentToRender = <WAVertival3_X />;
      scoreStyleTraget = 'WA вертикальный 3-х';
    }
 
    return (
        <LinearGradient   
            colors={['#a1ffce', '#ffffff']}
            style ={styles.main }
        >
          <View style={styles.PointListHeader}>
            <Ionicons name="arrow-back-outline" size={30} color="black" onPress={() => handleClearPoints()}/>
            <Ionicons name="home-sharp" size={30} color="black"  onPress={() => navigation.navigate('Тренировки') }/>
          </View>
            
            <View style={styles.Target}>
                <TouchableWithoutFeedback>
                    <View style= {[styles.canvas, canvasStyle]}>
                        {componentToRender}
                        {sublist.map((point, index) => (
                            <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                        ))}
                    </View>
                </TouchableWithoutFeedback>
                <View style= {styles.PointRow}>
                {sublist.map((point, index) => (
                  <View  key={index} style={getScoreStyle(point.score, scoreStyleTraget)}>
                    <Text>{point.score}</Text>
                  </View>
                ))}
              </View>
            </View> 
        </LinearGradient>
  
    );
};

export default TrainingPointsList;
/*
const TrainingPointsList = ({ navigation, route }) => {
  const { sublist, trainingId } = route.params;
  const training = useSelector((state) => selectArrowById(state, trainingId));
  
  const [editableSublist, setEditableSublist] = useState(sublist);
  
  useEffect(() => {
      if (editableSublist !== sublist) {
          // Update the sublist parameter when editableSublist changes
          navigation.setParams({ sublist: editableSublist });
      }
  }, [editableSublist, sublist, navigation]);
  
  let componentToRender = null;
  let scoreStyleTarget = null;
  
  if (training.selectedMenu === 'WA Полный') {
      componentToRender = <WAFull />;
      scoreStyleTarget = 'WA Полный';
  } else if (training.selectedMenu === 'WA 6 колец') {
      componentToRender = <WA6Ring />;
      scoreStyleTarget = 'WA 6 колец';
  } else if (training.selectedMenu === 'WA 5 колец') {
      componentToRender = <WAFull />;
      scoreStyleTarget = 'WA 5 колец';
  }

  const handleClearPoints = () => {
      const updatedPoints = [...editableSublist];
      updatedPoints.pop();
      setEditableSublist(updatedPoints);
  };
  const updatePointList = () => {
    // Here you can update the sublist with new points or any modifications
    // For example, you can add a new point to the sublist
    const newPoint = { x: 10, y: 10, score: 5 };
    setEditableSublist([...editableSublist, newPoint]);
  };

  return (
      <LinearGradient
          colors={['#a1ffce', '#ffffff']}
          style={styles.main}
      >
          <View style={styles.PointListHeader}>
              <Ionicons name="arrow-back-outline" size={30} color="black" onPress={handleClearPoints} />
              <Ionicons name="home-sharp" size={30} color="black" onPress={() => navigation.navigate('Тренировки')} />
          </View>
      
          <View style={styles.Target}>
              <TouchableWithoutFeedback>
                  <View style={styles.canvas}>
                      {componentToRender}
                      {editableSublist.map((point, index) => (
                          <View key={index} style={[styles.point, { left: point.x, top: point.y }]} />
                      ))}
                  </View>
              </TouchableWithoutFeedback>
              
              <View style={styles.PointRow}>
                  {editableSublist.map((point, index) => (
                      <View key={index} style={getScoreStyle(point.score, scoreStyleTarget)}>
                          <Text>{point.score}</Text>
                      </View>
                  ))}
              </View>
              <TouchableOpacity onPress={updatePointList}>
                <Text>
                  Добавить
                </Text>
              </TouchableOpacity>
          </View>
      </LinearGradient>
  );
};

export default TrainingPointsList;*/

const styles = StyleSheet.create({
    main: {
        flex: 1,  
    },   
    PointListHeader:{
      paddingTop:30,
      paddingBottom:10,
      paddingHorizontal:10,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#497f5b"
    },
    point: {
      width: 6,
      height: 6,
      backgroundColor: 'black',
      borderRadius: 3,
      position: 'absolute',
    },  
    Target: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',    
    },
    canvas: {
      width: 300,
      height: 300,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    PointRow:{
      flexDirection: 'row',
      alignItems: 'center',
     
    },
  
  });
  
  