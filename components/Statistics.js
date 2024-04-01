import { View, Text, StyleSheet,ScrollView ,TouchableWithoutFeedback, FlatList,TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WA6Ring from "./Target/WA6Ring";
import WAFull from "./Target/WAFull";
import WAVertival3_X from "./Target/WAVertical3_X";
import { calculateAveragePoints } from "../hooks";
import { TrainingGrafic } from "./Training/TrainingGrafic";
import TrainingDiagramma from "./Training/TrainingDiagramma";

const getUniqueSelectedMenus = (trainings) => {
  const uniqueSelectedMenus = new Set();
  
  trainings.forEach(training => {
      uniqueSelectedMenus.add(training.selectedMenu);
  });
  
  return Array.from(uniqueSelectedMenus);
}
const getUniquetime = (trainings) => {
  const uniqueSelectedtime = new Set();
  
  trainings.forEach(training => {
      uniqueSelectedtime.add(training.hours);
  });
  
  return Array.from(uniqueSelectedtime);
}
const getTimeInterval = (time) => {
  let numbers = [];

  if (time === 'Утро') {
    numbers = [5, 11];
  } else if (time === 'День') {
    numbers = [12, 16];
  } else if (time === 'Вечер') {
    numbers = [17, 23];
  }

  return numbers;

}

const calculateAveragePoint = (allRounds) => {
  const countpoint = []
  allRounds.forEach(item => {
    if (item.allRounds && item.allRounds.length > 0) {
      countpoint.push(calculateAveragePoints(item.allRounds))
    }
  });

 
  return countpoint.flat();
}

const filterDataByHours = (data, fromTime, toTime) => {
  const filteredRounds = [];
  data.forEach(item => {
    if (item.hours >= fromTime && item.hours <= toTime) {
      item.allRounds.forEach(round => {
        filteredRounds.push(round);
      });
    }
  });
  
  return filteredRounds;
};
const filterDataByHoursGrafic = (filteredRounds) => {
 
  const countpoint = [];
  
  filteredRounds.forEach(object => {

    object.forEach(round => {
      count = 0; 
      round.forEach((points) => {
       count  += (points.score === "X" ? 10 : parseInt(points.score, 10));
      }); 
      countpoint.push((count / round.length).toFixed(2));
      count = 0
    });
  });
  return countpoint;
};
const filterDataByHoursTarget = (filteredRounds) => {
 
  const countpoint = [];
  
  filteredRounds.forEach(object => {

    object.forEach(round => {
      count = 0; 
      round.forEach((points) => {
        countpoint.push(points)
      }); 
     
    });
  });
  return countpoint;
};


export default function Statistics({navigation}) {

  const training = useSelector(state => state.trainings.trainings)
  const [selectedTargetItem, setSelectedItem] = useState('');
  const [selectedTimeItem, setselectedTimeItem] = useState('');

  const UniqueSelectedMenus = getUniqueSelectedMenus(training);
  

  const handleItemTargetPress = (item) => {
    setSelectedItem(item);
  };
  const handleItemTimePress = (item) => {
    setselectedTimeItem(item);
  };

  const canvasStyle = selectedTargetItem === 'WA вертикальный 3-х' 
  ? { width: 400, height: 400 }
  : { width: 300, height: 300 };
  let componentToRender = null;
  let scoreStyleTraget = null;
  if (selectedTargetItem === 'WA Полный') {
    componentToRender = <WAFull />;
    scoreStyleTraget = 'WA Полный';
  } else if (selectedTargetItem === 'WA 6 колец') {
    componentToRender = <WA6Ring />;
    scoreStyleTraget = 'WA 6 колец';
  } else if (selectedTargetItem === 'WA вертикальный 3-х') {
    componentToRender = <WAVertival3_X />;
    scoreStyleTraget = 'WA вертикальный 3-х';
  }


  const trainingTargetInfo = training.filter(item => item.selectedMenu === selectedTargetItem);
  const Uniquetime = getUniquetime(trainingTargetInfo);
  let allValues = [];
  trainingTargetInfo.forEach(item => {
    if (item.allRounds && item.allRounds.length > 0) {
      item.allRounds.forEach(round => {
        round.forEach(series => {
          series.forEach(point => {
           allValues.push(point)
          });
        });
      });
    }
  });
  fromTime = getTimeInterval(selectedTimeItem)[0]
  toTime = getTimeInterval(selectedTimeItem)[1]
  const filterDataByHour = (filterDataByHours(trainingTargetInfo,fromTime,toTime))
  const filterDataGrafic  = filterDataByHoursGrafic(filterDataByHour)
  const filterDataTraget  = filterDataByHoursTarget(filterDataByHour)
  
 
  const data = [] 
  trainingTargetInfo.forEach(item => {
    if (item.allRounds && item.allRounds.length > 0) {
     
      //console.log(item.allRounds)
      item.allRounds.forEach(round => {
        data.push(round)
       /* round.forEach(series => {
          series.forEach(point => {
           allValues.push(point)
          });
        });*/
      });
    }
  });
  console.log(data)
  return (
   <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style ={styles.main }
   >

      
    <ScrollView>
    <FlatList
        data={UniqueSelectedMenus}
        renderItem={({ item }) => (
          <View style={styles.ContainerSelectedTimeItem}>
          <TouchableOpacity onPress={() => handleItemTargetPress(item)} style={styles.SelectedTimeItem} >
            <Text>{item}</Text>
           </TouchableOpacity>
           </View>
        )}
         keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.NameTarget}>{selectedTargetItem}</Text>
      <View style={styles.Target}>
                <TouchableWithoutFeedback>
                    <View style= {[styles.canvas, canvasStyle]}>
                   
                    {componentToRender}
                        {allValues.map((point, index) => (
                            <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                        ))}
                    </View>
                </TouchableWithoutFeedback>        
      </View>
      <Text style={styles.NameTarget}></Text> 
      <TrainingDiagramma data = {data} selectedMenu = {UniqueSelectedMenus} />
      <Text style={styles.NameTarget}>Средний результат одного выстрела за серию</Text> 
      <TrainingGrafic data = {calculateAveragePoint(trainingTargetInfo)} />
      <Text style={styles.NameTarget}>{selectedTimeItem}</Text>
      
      <View style={styles.ContainerSelectedTimeItem}>
      <TouchableOpacity style={styles.SelectedTimeItem} onPress={() => handleItemTimePress("Утро")}>
        <Text>Утро</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SelectedTimeItem} onPress={() => handleItemTimePress("День")}>
        <Text>День</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SelectedTimeItem} onPress={() => handleItemTimePress("Вечер")}>
        <Text>Вечер</Text>
      </TouchableOpacity>
      
    </View>
    <View style={styles.Target}>
                <TouchableWithoutFeedback>
                    <View style= {[styles.canvas, canvasStyle]}>
                   
                    {componentToRender}
                        {filterDataTraget.map((point, index) => (
                            <View key={index} style={[styles.point, { left: point.x, top: point.y }]}/>
                        ))}
                    </View>
                </TouchableWithoutFeedback>        
      </View>
    <TrainingGrafic data = {filterDataGrafic} />
      
    </ScrollView>
     
    
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,   
   
  },
  NameTarget:{
    textAlign:"center",
    fontSize:18,
    paddingTop:10,
    paddingBottom:10,
    marginVertical:15,
    backgroundColor:"#a1ffce",
},
  Target: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
  },
  canvas: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  point: {
    width: 6,
    height: 6,
    backgroundColor: 'black',
    borderRadius: 3,
    position: 'absolute',
  },  
  ContainerSelectedTimeItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  SelectedTimeItem: {
    padding: 10 ,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
 
});