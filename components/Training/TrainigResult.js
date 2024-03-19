import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTrainingById } from '../Store/TrainingSlice';
import { PDFDocument, rgb } from 'react-native-pdf-lib';
import { LinearGradient } from 'expo-linear-gradient';
import { getTotalScore } from '../../hooks';
import { getScoreStyle } from '../../hooks';

const calculateRoundScore = (round) => {
  let roundScore = 0;
  for (let series of round) {
    for (let data of series) {
      roundScore += data.score;
    }
  }
  return roundScore;
};



const TrainingResult = ({ route }) => {
  const { trainingId } = route.params;
  const training = useSelector((state) => selectTrainingById(state, trainingId));
  console.log("roundsToAdd", JSON.stringify(training.allRounds));
 
  return(
    <LinearGradient   
      colors={['#0f0c29', '#302b63', '#24243e']}
      style ={styles.main }
    >
      <Text style={styles.HeaderTrainingName}> {training.trainingName} {training.formattedDate} </Text>
      <View style={styles.column}>
      
        <Text style={styles.HeaderTraininOption}> Лук: {training.selectedBow} </Text>
        <Text style={styles.HeaderTraininOption}> Вид мишени: {training.selectedMenu} </Text>
        <Text style={styles.HeaderTraininOption}> Очки: {getTotalScore(training.allRounds)} / {training.rounds * training.countSeries * 30}({getTotalScore(training.allRounds)/ (training.rounds * training.countSeries * 30) * 100 }%) </Text>
        <Text style={styles.HeaderTraininOption}> Среднее: {getTotalScore(training.allRounds)/ (training.rounds * training.countSeries * 30) * 10 } </Text>
      
      </View>

      <View style ={styles.Table }>
      {training.allRounds.map((round, roundIndex) => (
        <View key={roundIndex}>
        
         <Text style ={styles.TableRounds }>{`Раунд ${roundIndex + 1} ${calculateRoundScore(round)}`}</Text>
          <Text style ={styles.TableSeriesName }>Серии</Text> 
          <View style ={styles.TableSeries }>
            {round.map((series, seriesIndex) => (
              <View key={seriesIndex}   >
                 <Text style ={styles.TableSeriesText } >{`${seriesIndex + 1} ( ${series.reduce((sum, data) => sum + data.score, 0)})`}</Text>
                {series.map((data, dataIndex) => (
                  <View style ={styles.TableSeriesPoint }>
                    <Text key={dataIndex} style={getScoreStyle(data.score)}>{data.score}</Text>
                  </View> 
                  
                ))}
              
              </View>
            ))}
          </View>
          
        </View>
      ))}
  </View> 

    </LinearGradient>
  );
    
};
    export default TrainingResult;
    
const styles = StyleSheet.create({
  main: {
    flex: 1, 
    
  },
  column: {
    alignItems: 'left',
    marginHorizontal: 10,
  
  },
  HeaderTrainingName:{
    fontSize:20,
    textAlign:"center",
    color:"white",
    paddingVertical:5,
  },
  HeaderTraininOption:{
    fontSize:18,
    color:"white",
    paddingBottom:5,
  },
  Table:{
    borderWidth: 1,
    borderColor:"white",
  },
  TableRounds:{
    color:"white",
    borderWidth: 1,
    borderColor:"white",
  },
  
  
  TableSeriesName:{
    color:"white",
    borderWidth: 1,
    borderColor:"white",
    textAlign:"center"
  },
  TableSeries:{
    flexDirection:"row",
    justifyContent:"left",
    borderColor:"white",
    textAlign:"center"
  },
  TableSeriesText:{
    color:"white",
    borderWidth: 1,
    borderColor:"white",
  },
  TableSeriesPoint:{
    borderWidth: 1,
    borderColor:"white",
  
  },
  })