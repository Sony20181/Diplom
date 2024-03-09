import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getScoreStyle } from '../../../hooks';

const TrainingSeriesList = ({ route,navigation }) => {
  const { round,trainingId, index } = route.params;
console.log(round)

  return (
    <LinearGradient   
      
      colors={['#0f0c29', '#302b63', '#24243e']}
      style ={styles.main }
    >
      <View style ={styles.HeaderSeries }>
     
        <Text style ={styles.HeaderSeresTitle }>{`Раунд ${index + 1}`}</Text>
      
      </View>

      {round.map((sublist, index) => (
              
                <TouchableOpacity key={index} onPress={() => navigation.navigate('TrainingPointsList', { sublist,trainingId })}>
                    <View style ={styles.ScoreRow }>
                        <Text style ={styles.ScoreRowSeries } >{`Серия ${index + 1}: `}</Text>
                        {sublist.map((item, i) => (
                          <View key={i} style={getScoreStyle(item.score)}>
                            <Text  >{item.score}</Text>
                          </View>
                            
                        ))}
                    </View>
                  
                </TouchableOpacity>
            ))}
  
  </LinearGradient>
    
  
  );
}

export default TrainingSeriesList;

const styles = StyleSheet.create({
  main: {
    flex: 1, 
  },
  HeaderSeries:{
    backgroundColor:"black",
    padding:20,
    marginBottom:5,
  },
  HeaderSeresTitle:{
    fontSize:22,
    color:'white',
    textAlign:"center",

  },
  ScoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:10,
    marginBottom:10,
    borderBottomColor:"white",
    borderBottomWidth:1,
  },
  ScoreRowSeries:{
    fontSize:20,
    color:'white',
  },
  ScoreRowSeriesItem:{
    fontSize:18,
    color:'white',
    padding:5,
    backgroundColor:"green",
    borderRadius:100,
    borderColor:"white",
    borderWidth:2,
  },
  
});

