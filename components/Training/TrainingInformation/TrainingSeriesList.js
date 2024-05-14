import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getScoreStyle } from '../../../hooks/hooks';

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


  container1: { 
    flex: 1, 
    marginTop:30,
    alignItems: 'center', 
   // justifyContent: 'center', 
  }, 
 /* scrollContainer: { 
    height:300, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, */
  card: { 
    flex: 1, 
    marginVertical: 4, 
    marginHorizontal: 16, 
    borderRadius: 5, 
    overflow: 'hidden', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'lightblue', 
  }, 
  textContainer: { 
    backgroundColor: 'rgba(0,0,0, 0.7)', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 5, 
  }, 
  infoText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 
  normalDot: { 
    height: 8, 
    width: 8, 
    borderRadius: 4, 
    backgroundColor: 'silver', 
    marginHorizontal: 4, 
  },
  /*indicatorContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },  */
  
});

