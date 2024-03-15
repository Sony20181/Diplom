import React, { Component } from 'react';
import { View } from 'react-native';
import PieChart from 'react-native-pie-chart'
import { Text } from 'react-native-svg';

const data = [
  { color: 'red', count: 2, score: 7 },
  { color: 'red', count: 1, score: 8 },
  { color: 'yellow', count: 1, score: 9 },
  { color: 'green', count: 2, score: 10 },
];

class TrainingDiagramma extends Component {
  render() {
    if (!data || data.length === 0) {
      return null;
    }

    const chartData = data.map(item => ({ value: item.count, svg: { fill: item.color } }));

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PieChart
          style={{ height: 200, width: 200 }}
          data={chartData}
        />
        <Text x={100} y={100} textAnchor="middle">{data.reduce((acc, item) => acc + item.count, 0)}</Text>
      </View>
    );
  }
}

export default TrainingDiagramma;