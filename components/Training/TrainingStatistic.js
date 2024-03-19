import React from 'react';
//import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image,TouchableWithoutFeedback } from 'react-native';
import { selectTrainingById } from '../Store/TrainingSlice';
import { useSelector } from 'react-redux';
import WA6Ring from '../Target/WA6Ring';
import WAFull from '../Target/WAFull';
//import Svg, { G, Path, Text as SvgText } from 'react-native-svg';
import PieChart from 'react-native-pie-chart'
import { Circle, G, Text as SVGText } from 'react-native-svg';
/*
const data = [
    { value: 30, color: 'red' },
    { value: 20, color: 'green' },
    { value: 50, color: 'blue' },
  ];
  
  const radius = 100;
  const strokeWidth = 30;
  const centerX = 150;
  const centerY = 150;
*/
import TrainingDiagramma from './TrainingDiagramma';
const TrainingStatistic = ({ route }) => {
    const { trainingId } = route.params;
    const training = useSelector((state) => selectTrainingById(state, trainingId));
    
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
   // let cumulativePercent = 0;
   const data = [
    { color: 'red', count: 2, score: 7 },
    { color: 'red', count: 1, score: 8 },
    { color: 'yellow', count: 1, score: 9 },
    { color: 'green', count: 2, score: 10 }
  ];
  const pieData = data.map(item => ({
    value: item.count,
    svg: { fill: item.color },
    key: item.score
  }));
console.log(pieData)
const chartData = data.map(item => ({ value: item.count, svg: { fill: item.color } }));
console.log(chartData)
const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#fbd203', '#ffb300', '#ff9100', '#ff6c00', '#ff3c00']

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
           
 {/**
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
      </Svg> */}

<View style={{ flex: 1 }}>
      {/**   <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        sliceColor={sliceColor}
        coverRadius={0.45}
        coverFill={'#FFF'}
      >
      <G>
          {pieData.map((item, index) => (
            <Circle
              key={index}
              cx={150}
              cy={150}
              r={80}
            //  fill={item.svg.fill}
            />
          ))}
        </G> 
      </PieChart>*/}
     <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {data.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
            <View style={{ width: 10, height: 10, backgroundColor: item.color, marginRight: 5 }} />
            <Text>{item.score}</Text>
          </View>
        ))}
      </View> 
    </View>
  

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