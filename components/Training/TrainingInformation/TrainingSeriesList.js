import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

const TrainingSeriesList = ({ route,navigation }) => {
  const { round,trainingId } = route.params;
console.log(round)

  return (
    <View>

      {round.map((sublist, index) => (
              
                <TouchableOpacity key={index} onPress={() => navigation.navigate('TrainingPointsList', { sublist,trainingId })}>
                    <View>
                        <Text>{`Серия ${index + 1} `}</Text>
                        {sublist.map((item, i) => (
                            <Text key={i} style ={color="green" }>Score: {item.score}</Text>
                        ))}
                    </View>
                </TouchableOpacity>
            ))}
  
    </View>
    
  
  );
}

export default TrainingSeriesList;