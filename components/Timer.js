import { Text } from "react-native";
import { gStyle } from "../styles/style";
import { LinearGradient } from 'expo-linear-gradient';

export default function Timer() {
  return (
    <LinearGradient
           
    colors={['#52c234', '#061700', '#ffffff']}
    style={gStyle.main} 
    
   >
       <Text>Таймер</Text> 
    </LinearGradient>
  );
}

