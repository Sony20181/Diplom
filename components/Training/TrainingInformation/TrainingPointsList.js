import React from 'react';
import { View, Text,StyleSheet,TouchableWithoutFeedback } from 'react-native';
import WA6Ring from '../../Target/WA6Ring';
import WAFull from '../../Target/WAFull';
import { useSelector } from 'react-redux';
import { selectArrowById } from '../../Store/TrainingSlice';
import { LinearGradient } from 'expo-linear-gradient';
import { getScoreStyle } from '../../../hooks';

const TrainingPointsList = ({ route }) => {
    const { sublist,trainingId } = route.params;
    const training = useSelector((state) => selectArrowById(state, trainingId));
    console.log(sublist)
    let componentToRender = null;
    let scoreStyleTraget = null;
    if (training.selectedMenu === 'WA Полный') {
      componentToRender = <WAFull />;
      scoreStyleTraget = 'WA Полный';
    } else if (training.selectedMenu === 'WA 6 колец') {
      componentToRender = <WA6Ring />;
      scoreStyleTraget = 'WA 6 колец';
    } else if (training.selectedMenu === 'WA 5 колец') {
      componentToRender = <WAFull />;
      scoreStyleTraget = 'WA 5 колец';
    }
    return (
        <LinearGradient   
            colors={['#a1ffce', '#ffffff']}
            style ={styles.main }
        >
            <View style={styles.Target}>
                <TouchableWithoutFeedback>
                    <View style={styles.canvas}>
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

const styles = StyleSheet.create({
    main: {
        flex: 1,  
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
  
  