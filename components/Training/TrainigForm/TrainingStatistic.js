import React from 'react';
//import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';
import { selectArrowById } from '../../Store/TrainingSlice';
import { useSelector } from 'react-redux';
import WA6Ring from '../../Target/WA6Ring';
import WAFull from '../../Target/WAFull';
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';

const data = [
    { value: 30, color: '#FF6347' },
    { value: 20, color: '#4682B4' },
    { value: 50, color: '#7FFF00' },
  ];
  
  const radius = 100;
  const strokeWidth = 30;
  const centerX = 150;
  const centerY = 150;

const TrainingStatistic = ({ route }) => {
    const { trainingId } = route.params;
    const training = useSelector((state) => selectArrowById(state, trainingId));
    
    console.log("allRounds", JSON.stringify(training.allRounds));

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
/*
    const scores = training.allRounds.flat().map(round => round.map(point => point.score));
    const scoreCounts = scores.flat().reduce((acc, score) => {
      acc[score] = (acc[score] || 0) + 1;
      return acc;
    }, {});
  
    const totalScores = Object.values(scoreCounts).reduce((acc, count) => acc + count, 0);*/
    let cumulativePercent = 0;

    return (
    <LinearGradient   
        colors={['#0f0c29', '#302b63', '#24243e']}
        style ={styles.main }
    > 
        <ScrollView>
            <Text style={styles.NameTarget}>{training.selectedMenu}</Text>
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
       {/**     <View style={{ alignItems: 'center', padding: 10 }}>
                <Svg height="200" width="200">
                        {Object.entries(scoreCounts).map(([score, count], index) => {
                        const angle = (count / totalScores) * 360;
                        const prevAngles = Object.values(scoreCounts).slice(0, index).reduce((acc, c) => acc + (c / totalScores) * 360, 0);
                        return (
                            <Circle
                            key={score}
                            cx="100"
                            cy="100"
                            r="80"
                            fill="transparent"
                            stroke="blue"
                            strokeWidth="20"
                            strokeDasharray={`${angle} ${360 - angle}`}
                            strokeDashoffset={prevAngles}
                            />
                        );
                        })}
                        {Object.entries(scoreCounts).map(([score, count]) => (
                        <Text key={score} style={styles.DiagramaScore} >{`${score}: ${count}`}</Text>
                        ))}
                </Svg>
            </View> */}
       <Svg height="300" width="300">
      {data.map((item, index) => {
        const { value, color } = item;
        const percent = value / 100;

        const circle = (percent * 2 * Math.PI * radius);
        const dashArray = [circle * percent, circle * (1 - percent)];

        const pathData = `
          M ${centerX},${centerY}
          m 0,-${radius}
          a ${radius},${radius} 0 ${percent > 0.5 ? 1 : 0} 1 0,${2 * radius}
          a ${radius},${radius} 0 ${percent > 0.5 ? 1 : 0} 1 0,-${2 * radius}
        `;

        const rotate = cumulativePercent * 360;

        cumulativePercent += percent;

        return (
          <G key={index} origin={`${centerX},${centerY}`}>
            <Path
              d={pathData}
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDasharray={dashArray}
            />
          </G>
        );
      })}
    </Svg>

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