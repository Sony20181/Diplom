import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { gStyle } from "../styles/style";
import { LinearGradient } from 'expo-linear-gradient';

import { Audio } from 'expo-av';

export default function Timer() {
  const [timer, setTimer] = useState(90);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
  };


const stopTimer = () => {
  clearInterval(intervalRef.current);
  setIsRunning(false);
};

const handleStart = () => {
  startTimer();
};
const handleSkip = () => {
  clearInterval(intervalRef.current);
  setIsRunning(false);
  setTimer(30);
};

const timerStyle = {
  backgroundColor: isRunning ? '#4fe368ec' : '#ccf55dec',
};
const [sound, setSound] = React.useState();

const playSound = async () => {
   const { sound } = await Audio.Sound.createAsync(
       require('../assets/BTS_-_MIC_Drop_48701173.mp3')
   );
   setSound(sound);
   await sound.playAsync();
}

const stopSound = async () => {
   await sound.stopAsync()
}

React.useEffect(() => {
   return sound
       ? () => {
           sound.unloadAsync();
       }
       : undefined;
}, [sound]);
  return (
    <View style={[styles.timerContainer, timerStyle]}>
      <Text style={styles.timerText}>{timer}</Text>
      
      {!isRunning && (
        <View>
          
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startButtonText}>Старт</Text>
        </TouchableOpacity>
        
      </View>
      )}
       {isRunning && (
        <View>
          
        <TouchableOpacity style={styles.startButton} onPress={stopTimer}>
          <Text style={styles.startButtonText}>Стоп</Text>
        </TouchableOpacity>
        <Button title="Play Sound" onPress={playSound} />
            <View style={{ marginTop:10 }}>
                <Button title="Stop Sound" onPress={stopSound} />
            </View>
      </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
  },
  
  startButton: {
    backgroundColor: '#1f7012ec',
    marginTop:20,
    padding: 10,
    paddingHorizontal:30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  startButtonText: {
    color: 'black',
    fontSize: 20,
  },
});