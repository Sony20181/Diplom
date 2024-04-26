import React from 'react';
import  { } from '../Store/TrainingSlice'
import Svg, { Circle, Polygon  } from 'react-native-svg';

export default function T3DIBO(){
      

    return (
      <Svg height="300" width="300">
      <Circle cx="150" cy="150" r="150" fill="#401c03ec" style={{ borderColor: 'white', }} />
      <Circle cx="165" cy="165" r="115" fill="#c7b8adec" />
      <Circle cx="160" cy="170" r="80" fill="#1c35b0ec" />
      <Circle cx="160" cy="170" r="20" fill="#eb1515ec" />
      <Circle cx="160" cy="170" r="10" fill="#b02727ec" />
      
      
    </Svg> 
    );

}