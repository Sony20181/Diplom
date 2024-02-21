import React, { useState } from 'react';
import { View, TextInput,StyleSheet,TouchableOpacity,Text,Modal,ScrollView } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

import  { } from '../../Store/TrainingSlice'

export default function TrainingBasicForm({navigation}) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const arrows = useSelector(state => state.arrow.arrow)
  const bows = useSelector(state => state.bows.bows)
  const[name,setName] = useState('Тренировка');
  const [distance, setDistance] = useState("10");
  const [selectedArrow, setSelectedArrow] = useState( arrows[0] ? arrows[0].name : "добавить стрелу");
  
  const [selectedBow, setSelectedBow] = useState( bows[0] ? bows[0].name : "добавить лук");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('WA Полный');
  const [windSpeed, setWindSpeed] = useState("Нет");
  const [windDirection, setWindDirection] = useState("Нет");
  const [weather, setWeather] = useState("Солнечно");
  const [rounds, setRounds] = useState("1");
  const [sliderValueArrow, setSliderValueArrow] = useState(0);


  const addTrainigs = () => {
      if (name.trim().length){
          navigation.navigate('TargetMenu', {trainingName : name, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
            windDirection,weather,rounds,sliderValueArrow })
         
      }
  };
  const handleDistancePress = () => {
    navigation.navigate('Дистанция', { setDistance });
   
    
  };
  const handleArrowPress = () => {
    if (arrows[0]) {
      // Переход на страницу с выбранной стрелой
      navigation.navigate('TrainingArrow', {setSelectedArrow});
    } else {
      // Переход на форму для заполнения стрелы
      navigation.navigate('ArrowForm',{setSelectedArrow});
      
    }
  };
  const handleBowPress = () => {
    if (bows[0]) {
      // Переход на страницу с выбранной стрелой
      navigation.navigate('TrainingBow', { setSelectedBow });
      setSelectedBow(selectedBow)
    } else {
      // Переход на форму для заполнения стрелы
      navigation.navigate('BowForm',{setSelectedBow});
      
    }
  };
  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
    setIsModalVisible(false)
  };
 

  return (
      <LinearGradient   
          colors={['#a1ffce', '#ffffff']}
          style ={styles.main }
      >
        <View style ={styles.content }>
          <View style ={styles.contentTitle }>
              <Ionicons name="close-sharp" size={24} color="black" onPress={() => navigation.navigate('Тренировки')}/>
              <Text style = {styles.title}>Новая тренировка</Text>
            
            <Feather name="arrow-right" size={24} color="black" onPress={addTrainigs}/>     
          </View>
          <View style={styles.row}>
                  <Text style={styles.text} >Название:</Text>
                  <TextInput
                      style={styles.InputText}
                      value={name}
                      onChangeText={setName}
                  />
                  <Text>{ formattedDate}</Text>
          </View>
        </View >
        <ScrollView style={styles.FormContent}>
          
          <View >
          <Text  style={styles.labelSelectedMenu} onPress={() => setIsModalVisible(true) }>{selectedMenu}</Text>
          <Text style={styles.label} onPress={() => setIsModalVisible(true) }>Изменить вид мишени</Text>
          </View>
          
          <Modal visible={isModalVisible} transparent>
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <TouchableOpacity onPress={() => handleMenuSelect('WA Полный')} style={styles.menuItem}>
                  <Text style={styles.menuText}>WA Полный</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuSelect('WA 6 колец')} style={styles.menuItem}>
                  <Text style={styles.menuText}>WA 6 колец</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleMenuSelect('WA 5 колец')} style={styles.menuItem}>
                  <Text style={styles.menuText}>WA 5 колец</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <Text style={styles.label} onPress={handleArrowPress}>{selectedArrow}</Text>
          <Text style={styles.label} onPress={handleBowPress}>{selectedBow}</Text>
          
          <View style={styles.label}>
            <Text  style={styles.labelEnvironment}>Окружение</Text>
            <Text  style={styles.labelText}>Погода</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setWeather(text)}
              value={weather}
            />
            <Text  style={styles.labelText}>Скорость ветра</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setWindSpeed(text)}
              value={windSpeed}
            />
            <Text style={styles.labelText} >Направление ветра</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setWindDirection(text)}
              value={windDirection}
            />
          </View>
       
         </ScrollView>
      </LinearGradient>
 )
  }

  
const styles = StyleSheet.create({
  main: {
      flex: 1,
     
    },
  
    content:{
      paddingTop:20,
      backgroundColor: "#b4dbc8",
      
    },
    contentTitle:{
      paddingTop:10,
      flexDirection: "row",
      justifyContent:"space-between",
    },
    title:{
      fontSize:20,
      color:"white",
    },
    container: {
      paddingHorizontal: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      marginBottom:10,
    },
   
    text: {
      fontSize: 16,
      padding:10,
    },
    InputText: {
      flex: 1,
      borderWidth:1,
      paddingVertical: 5,
      paddingHorizontal:10,
      marginRight:10,
      
    },
    AddInput:{
      justifyContent: "center",
      color:"#0c5733",
      fontSize:20,
    },
     FormContent: {
       flex: 1,
     },
     labelSelectedMenu:{
      textTransform: 'uppercase',
      justifyContent: "center",
      fontSize: 14,
      letterSpacing: 2,
      paddingHorizontal:20,
      paddingTop:10
     },
 
 label: {
   textTransform: 'uppercase',
   justifyContent: "center",
   fontSize: 16,
   letterSpacing: 2,
   borderBottomColor: '#ccc',
   borderBottomWidth: 1,
   padding:20,
 },
 labelText:{
   fontSize: 14,
   textTransform: 'uppercase',
   marginLeft:10,
 },
 labelEnvironment:{
   fontSize: 16,
   color: '#666',
   textTransform: 'uppercase', 
   marginBottom:10, 
 },
 
 input:{
   backgroundColor:'#ccc',
   padding:10,
   margin:10,
 },
 modalBackground: {
   flex: 1,
   backgroundColor: 'rgba(225, 245, 227, 1)',
   justifyContent: 'center',
   alignItems: 'center',
 },
 modalContainer: {
   padding: 20,
   width: '80%',
   alignItems: 'center',
 },
 menuItem: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingVertical: 10,
   borderBottomWidth: 1,
   borderBottomColor: 'lightgray',
   width: '100%',
 },
 menuText: {
   fontSize: 18,
   color: 'black',
 },


});

