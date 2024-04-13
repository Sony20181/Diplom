import React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,FlatList,ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { selectTrainingById } from '../Store/TrainingSlice';
import { PDFDocument, rgb } from 'react-native-pdf-lib';
import { LinearGradient } from 'expo-linear-gradient';
import { getTotalScore } from '../../hooks/hooks';
import { getScoreStyle } from '../../hooks/hooks';

const calculateRoundScore = (round) => {
  let roundScore = 0;
  for (let series of round) {
    for (let data of series) {
      roundScore += (data.score === "X" ? 10 : parseInt(data.score, 10));
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
        <Text style={styles.HeaderTraininOption}> Очки: {getTotalScore(training.allRounds)} / {training.rounds * training.countSeries * 30}  ({(getTotalScore(training.allRounds)/ (training.rounds * training.countSeries * 30) * 100).toFixed(2) }%) </Text>
        <Text style={styles.HeaderTraininOption}> Среднее: {(getTotalScore(training.allRounds)/ (training.rounds * training.countSeries * 30) * 10 ).toFixed(2)} </Text>
      
      </View>

      <ScrollView >
        <View style ={styles.Table }>

       
      {training.allRounds.map((round, roundIndex) => (
        <View key={roundIndex}>
          <View style ={styles.TableRoundsView }>
          <Text style ={styles.TableRounds } >{`Раунд ${roundIndex + 1}`}</Text>
          <Text style ={styles.TableRounds } >{`Итог: ${calculateRoundScore(round)}`}</Text>
          </View>
         
          <Text style ={styles.TableSeriesName }>Серии</Text> 
          <View style ={styles.TableSeries }>
            {round.map((series, seriesIndex) => (
              <View key={seriesIndex} style ={styles.TableSeriesRow }   >
                 <Text style ={styles.TableSeriesText } >{`${seriesIndex + 1}`}</Text>
                {series.map((data, dataIndex) => (
                  <View  key={dataIndex} style ={styles.TableSeriesPoint }>
                    <Text  style={[getScoreStyle(data.score),styles.TableSeriesPointText ]}>{data.score}</Text>
                  </View> 
                  
                ))}
              <Text style ={styles.TableSeriesText } >{`Итог: ${series.reduce((sum, data) => sum + (data.score === "X" ? 10 : parseInt(data.score, 10)), 0)}`}</Text>
              </View>
            ))}
          </View>
          
        </View>
      ))}
       </View>
  </ScrollView> 

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
    margin:10,
    
  },
  TableRoundsView:{
    flexDirection:"row",
    justifyContent:"space-between", 
    borderWidth: 1,
    borderColor:"white",
    padding:10,
  },
  TableRounds:{
    color:"white",
    fontSize:19,
   
  },
  
  
  TableSeriesName:{
    color:"white",
    borderWidth: 1,
    borderColor:"white",
    textAlign:"center",
    fontSize:18,
    paddingVertical:5,
  },
  TableSeries:{
    borderColor:"white",
    textAlign:"center"
  },
  TableSeriesRow:{
    justifyContent:"space-between",
    flexDirection:"row",
    
  },
  TableSeriesText:{
    padding:10,
    fontSize:18,
    color:"white",
    borderWidth: 1,
    borderColor:"white",
    
  },
  TableSeriesPoint:{
    borderWidth: 1,
    borderColor:"white",
    textAlign:"center",
    width:"21%",
  },
  TableSeriesPointText:{
   
    textAlign:"center"
  },
  })