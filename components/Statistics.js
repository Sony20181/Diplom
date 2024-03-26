import { View, Text, StyleSheet,ScrollView ,TouchableWithoutFeedback, FlatList,TouchableOpacity} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WA6Ring from "./Target/WA6Ring";
import WAFull from "./Target/WAFull";
import WAVertival3_X from "./Target/WAVertical3_X";


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
  console.log(time)
  if (time = "Утро"){
    return [5, 11]
  }
  else if (time = "День"){
    return [12, 16]
  }
 else if (time = " Вечер"){
    return [17,23]
  }

}

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
  
 

console.log(Uniquetime)
fromTime = getTimeInterval(selectedTimeItem)[0]
toTime = getTimeInterval(selectedTimeItem)[1]
console.log(fromTime,toTime)
  return (
   <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
      style ={styles.main }
   >

      <FlatList
        data={UniqueSelectedMenus}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemTargetPress(item)}>
            <Text>{item}</Text>
           </TouchableOpacity>
        )}
         keyExtractor={(item, index) => index.toString()}
      />
    <ScrollView>
    
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
      <Text style={styles.NameTarget}>{selectedTimeItem}</Text>
      <TouchableOpacity onPress={() => handleItemTimePress("Утро")}>
        <Text>Утро</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemTimePress("День")}>
        <Text>День</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleItemTimePress("Вечер")}>
        <Text>Вечер</Text>
      </TouchableOpacity>
      
      
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
    marginBottom:15,
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
 
});