import { Text } from "react-native";
import { gStyle } from "../styles/style";
import { LinearGradient } from 'expo-linear-gradient';

export default function Timer() {
  return (
    <LinearGradient
           
    colors={['#0f0c29', '#302b63', '#24243e']}
    style={gStyle.main} 
    
   >
       <Text>Таймер</Text> 
    </LinearGradient>
  );
}

