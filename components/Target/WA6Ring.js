import React from 'react';
import  { } from '../Store/TrainingSlice'
import Svg, { Circle } from 'react-native-svg';

export default function WA6Ring(){
      

    return (
      <Svg height="300" width="300">
      <Circle cx="150" cy="150" r="150" fill="#08068c" style={{ borderColor: 'white', }} />
      <Circle cx="150" cy="150" r="128" fill="#2d2b94" />
      <Circle cx="150" cy="150" r="106" fill="#c22b3c" />
      <Circle cx="150" cy="150" r="84" fill="#bf2133" />
      <Circle cx="150" cy="150" r="62" fill="#fbff00" />
      <Circle cx="150" cy="150" r="40" fill="#ecf013" />
      <Circle cx="150" cy="150" r="18" fill="#fbff00" />
      <Circle cx="150" cy="150" r="2" fill="#000" />
    </Svg> 
    );

}