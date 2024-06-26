import React, { useState } from 'react';
import { View, TextInput,StyleSheet,TouchableOpacity,Text,Modal,ScrollView, Button } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import DistancePickerScreen from './DistancePickerScreen';
import TrainingArrow from './TrainigArrow';
import ArrowForm from '../../Arrows/ArrowForm';
import TrainingBow from './TrainingBow';
import TrainingBowForm from './TrainingBowForm';
import  { } from '../../Store/TrainingSlice'

const TrainingFreeForm = ({navigation}) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const arrows = useSelector(state => state.arrow.arrow)
    const bows = useSelector(state => state.bows.bows)
    const[name,setName] = useState('Тренировка');
    const [distance, setDistance] = useState(10);
    const [selectedArrow, setSelectedArrow] = useState( arrows[0] ? arrows[0].name : "добавить стрелу");
    
    const [selectedBow, setSelectedBow] = useState( bows[0] ? bows[0].name : "добавить лук");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('WA Полный');
    const [windSpeed, setWindSpeed] = useState("Нет");
    const [windDirection, setWindDirection] = useState("Нет");
    const [weather, setWeather] = useState("Солнечно");
    let hours = new Date().getHours() ; 
    let minute = new Date().getMinutes() ; 
    const [rounds, setRounds] = useState("1");
    const [countSeries, setcountSeries] = useState(1);

 
    const addTrainigs = () => {
        if (name.trim().length){
            navigation.navigate('TargetMenu', {trainingName : name, formattedDate,distance,selectedArrow,selectedBow,selectedMenu,windSpeed,
              windDirection,weather,hours, minute, rounds,countSeries })
           
        }
    };
 
    const handleMenuSelect = (menu) => {
      setSelectedMenu(menu);
      setIsModalVisible(false)
    };
   
    const [modalDistanceVisible, setModalDistanceVisible] = useState(false);
    const [modalArrowVisible, setModalArrowVisible] = useState(false);
    const [modalBowVisible, setModalBowVisible] = useState(false);
    
    const handleArrowPress = (value) => {
      setSelectedArrow(value)
      setModalArrowVisible(false)
    };
    const renderModalContentArrow = () => {
      if (selectedArrow != "добавить стрелу") {
        return <TrainingArrow onSelectArrow={handleArrowPress} />;
      } else {
        return <ArrowForm onSelectArrow={handleArrowPress} />;
      }
    };
   
    const handleSelectsetDistance = (value) => {
      setDistance(value);
      setModalDistanceVisible(false);
    };
    const handleBowPress = (value) => {
      setSelectedBow(value)
      setModalBowVisible(false)
    };
    const renderModalContentBow = () => {
      if (selectedBow != "добавить лук") {
        return <TrainingBow onSelectBow={handleBowPress} />;
      } else {
        return <TrainingBowForm onSelectBow={handleBowPress} />;
        
      }
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
      
            <Modal visible={modalDistanceVisible}>
              <DistancePickerScreen onSelect={handleSelectsetDistance} />
            </Modal>
            <Modal visible={modalArrowVisible}>
              {renderModalContentArrow()}
            </Modal>
            <Modal visible={modalBowVisible}>
              {renderModalContentBow()}
            </Modal>
       
            
    
            <Text style={styles.label} onPress={() => setModalDistanceVisible(true)}>Дистанция: {distance} м</Text> 

           
            <Text style={styles.label} onPress={() => setIsModalVisible(true) }>Вид мишени: {selectedMenu}</Text>
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
                  <TouchableOpacity onPress={() => handleMenuSelect('WA вертикальный 3-х')} style={styles.menuItem}>
                    <Text style={styles.menuText}>WA вертикальный 3-х</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleMenuSelect('3DIBO')} style={styles.menuItem}>
                  <Text style={styles.menuText}>3DIBO</Text>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </TouchableOpacity>
                </View>
              </View>
            </Modal>
            <View style={styles.Slider}>
              <Text style={styles.labelText} >Количество серий:   {countSeries}</Text>
              <Slider
                style={{ padding:10 }}
                minimumValue={1}
                maximumValue={24}
                step={1}
                value={countSeries}
                onValueChange={value => setcountSeries(value)}
                minimumTrackTintColor="#212421"
                maximumTrackTintColor="#000000"
              />
            </View>
            <View style={styles.labelRound}>
            <Text style={styles.labelRoundText} >Количество раундов:</Text>
              <TextInput
                style={styles.labelRoundTextInput}
                onChangeText={(text) => setRounds(text)}
                value={rounds}
              />       
            </View>
            <Text style={styles.label} onPress={() => setModalArrowVisible(true) }>{selectedArrow}</Text>
            <Text style={styles.label} onPress={() => setModalBowVisible(true) }>{selectedBow}</Text>
            <Text style={styles.label} >Время: {hours}:{minute}</Text>
           
           {/** <Text style={styles.label} onPress={handleBowPress}>{selectedBow}</Text> */}
            
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
};

export default TrainingFreeForm;



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
  
  label: {
    fontSize: 16,
    color: '#666',
    textTransform: 'uppercase',
    justifyContent: "center",
    letterSpacing: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding:20,
  },
  labelText:{
    fontSize: 14,
    color: '#666',
    textTransform: 'uppercase',
    marginLeft:10,
  },
  labelEnvironment:{
    fontSize: 16,
    color: '#666',
    textTransform: 'uppercase', 
    marginBottom:10, 
  },
  labelRound:{
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding:20,
    
  },
  labelRoundText:{
    fontSize: 16,
    color: '#666',
    textTransform: 'uppercase', 
  },
  labelRoundTextInput:{
    fontSize: 16,
    width:"30%",
    paddingHorizontal:20,
  },
  input:{
    backgroundColor:'#ccc',
    padding:10,
    margin:10,
  },
  Slider:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical:20,
    paddingHorizontal:10,
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
 
 