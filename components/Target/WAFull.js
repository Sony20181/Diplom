import React, { useState } from 'react';
import  { } from '../Store/TrainingSlice'
import Svg, { Circle } from 'react-native-svg';

export default function WAFull(){
    return (
      <Svg height="300" width="300">
        <Circle cx="150" cy="150" r="150" fill="#fff"  />
        <Circle cx="150" cy="150" r="136" fill="#f5f7f7"  />
        <Circle cx="150" cy="150" r="122" fill="#000"  />
        <Circle cx="150" cy="150" r="108" fill="#1a1c1c"  />
        <Circle cx="150" cy="150" r="94" fill="#07c1fa" />
        <Circle cx="150" cy="150" r="80" fill="#1cbaeb" />
        <Circle cx="150" cy="150" r="66" fill="#ff001e" />
        <Circle cx="150" cy="150" r="52" fill="#f00520" />
        <Circle cx="150" cy="150" r="38" fill="#ecf013" />
        <Circle cx="150" cy="150" r="24" fill="#fbff00" />
        <Circle cx="150" cy="150" r="10" fill="#f6fa2a" />
        <Circle cx="150" cy="150" r="5" fill="#000" />
        </Svg> 
    );

}