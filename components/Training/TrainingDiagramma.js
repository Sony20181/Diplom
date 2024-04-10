import React, { Component } from 'react';
import { View } from 'react-native';
import PieChart from 'react-native-pie-chart'
import { Text } from 'react-native-svg';
import { Svg, Rect } from 'react-native-svg';
import { getScoreColor, functionScoreCounts } from '../../hooks';


const TrainingDiagramma = ({data, selectedMenu}) => {

  const  scoreCounts = functionScoreCounts(data,selectedMenu)
  const barWidth = 30;
  const chartHeight = 150;
  
  return (
    <View style={{ flex: 1, paddingHorizontal: "15%", paddingVertical:10}}> 
    <Svg height={chartHeight} width="100%" > 
        {scoreCounts.map((item, index) => ( 
            <React.Fragment key={index}>
                <Rect 
                    x={index * (barWidth + 5)} 
                    y={chartHeight - item.value * 5} 
                    width={barWidth} 
                    height={item.value * 5} 
                    fill={item.color} 
                /> 
                <Text 
                    x={index * (barWidth + 5) + barWidth / 2} 
                    y={chartHeight - item.value * 5 - 10} 
                    fill="white" 
                    fontSize="12" 
                    textAnchor="middle"
                >
                    {item.label}
                </Text>
            </React.Fragment>
        ))} 
    </Svg> 
</View> 
  );
    
};

export default TrainingDiagramma;