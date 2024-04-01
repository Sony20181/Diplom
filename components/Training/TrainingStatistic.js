import React from 'react';
//import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';
import { selectTrainingById } from '../Store/TrainingSlice';
import { useSelector } from 'react-redux';
import WA6Ring from '../Target/WA6Ring';
import WAFull from '../Target/WAFull';

import TrainingDiagramma from './TrainingDiagramma';
import { TrainingGrafic } from './TrainingGrafic';
import { calculateAveragePoints } from '../../hooks';

const TrainingStatistic = ({ route }) => {
    const { trainingId } = route.params;
    const training = useSelector((state) => selectTrainingById(state, trainingId));
    
    console.log("allRoundssss", JSON.stringify(training.allRounds));

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



  data = calculateAveragePoints(training.allRounds)
    return (
    <LinearGradient   
        colors={['#0f0c29', '#302b63', '#24243e']}
        style ={styles.main }
    > 
        <ScrollView>
            <Text style={styles.NameTarget}>{training.selectedMenu}</Text>
            <Text>График</Text>
            <TrainingGrafic data = {data} />
            
            <View style={styles.Target}>
                    <TouchableWithoutFeedback>
                        <View style={styles.canvas}>
                            {componentToRender}
                            {training.allRounds.map(round => (
                                round.map(points => (
                                points.map(point => (
                                    <View
                                    key={`${point.x}-${point.y}`}
                                    style={[styles.point, { left: point.x, top: point.y }]}
                                    />
                                ))
                                ))
                            ))}
                        
                        </View>
                    </TouchableWithoutFeedback>    
            
            </View> 
          <TrainingDiagramma data = {training.allRounds}  selectedMenu = {training.selectedMenu}/>
        </ScrollView>
        
    
    </LinearGradient>
    );
    
};
    export default TrainingStatistic;

    const styles = StyleSheet.create({
        main: {
          flex: 1, 
        },
        NameTarget:{
            textAlign:"center",
            fontSize:18,
            paddingTop:10,
            paddingBottom:10,
            marginBottom:15,
            backgroundColor:"#a1ffce",
        },
        Target: {
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
          point: {
            width: 6,
            height: 6,
            backgroundColor: 'black',
            borderRadius: 3,
            position: 'absolute',
          },  
          DiagramaScore:{
            textAlign:"center",
            fontSize:18,
            color:"white",
          },
    })