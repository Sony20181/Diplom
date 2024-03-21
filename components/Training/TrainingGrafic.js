import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Line, G, Svg, Text as SVGText } from 'react-native-svg';

//const data = ["10.00", "10.00", "10.00", "10.00", "10.00", "10.00", "5.00", "5.00", "9.33", "8.67", "8.00", "7.67", "6.67", "5.67", "7.00", "7.33", "6.67", "6.00", "6.33", "5.33"];
export const TrainingGrafic = ({data}) => {
    const startPoint = 10;
    const xStep = 20;
    const yStep = 20;
    
    return (
        <View style={styles.graphContainer}>
            <Svg width="100%" height="200">
                <G scale="1">
                    {/* Ось X */}
                    <Line x1={startPoint} y1={200} x2={startPoint + data.length * xStep} y2={200} stroke="white" strokeWidth="2" />
                    {/* Ось Y */}
                    <Line x1={startPoint} y1={200} x2={startPoint} y2={0} stroke="white" strokeWidth="2" />

                    {/* Значения на осях X и Y */}
                    {data.map((point, index) => (
                        <SVGText
                            key={index}
                            x={startPoint + index * xStep}
                            y={200}
                            fill="white"
                            fontSize="10"
                        >
                            {index + 1}
                        </SVGText>
                    ))}
                    <SVGText
                        x={5}
                        y={10}
                        fill="white"
                        fontSize="10"
                    >
                        Score
                    </SVGText>

                    {/* Линии графика */}
                    {data.map((point, index) => (
                        <Line
                            key={index}
                            x1={startPoint + index * xStep}
                            y1={200 - parseInt(point) * yStep}
                            x2={startPoint + (index + 1) * xStep}
                            y2={200 - parseInt(data[index + 1]) * yStep}
                            stroke="blue"
                            strokeWidth="2"
                        />
                    ))}
                    
                </G>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    graphContainer: {
        alignItems: 'center',
        margin: 20,
    },
});