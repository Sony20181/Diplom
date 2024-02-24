
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBow } from '../Store/BowSlice';
import { View,TextInput,Text,StyleSheet,Image ,ScrollView, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Constants from 'expo-constants';


const BowForm = ({route, navigation}) => {

  const dispatch = useDispatch();
  const { selectedText } = route.params;
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const [name, setName] = useState('Мой лук');
  const [manufacturer, setManufacturer] = useState('');
  const [handlleLength, setHandlleLength] = useState('');
  const [tensionForse, setTensionForse] = useState('');
  const [shelf, setShelf] = useState('');
  const [verticalposition, setVerticalposition] = useState('');
  const [horizontalposition, setHorizontalposition] = useState('');
  const [rigidity, setRigidity] = useState('');
  const [upperArmMode, setUpperArmMode] = useState('');
  const [lowerShoulderMode, setLowerShoulderMode] = useState('');
  const [shoulders, setShoulders] = useState('');
  const [aim, setAim] = useState('');
  const [stabilizer, setStabilizer] = useState('');
  const [clicker, setClicker] = useState('');
  const [saddle, setSaddle] = useState('');
  const [bowstring, setBowstring] = useState('');
  const [plunger, setPlunger] = useState('');
  const [description, setDescription] = useState('');  
  const [photo, setPhoto] = useState(null);
  

  const handleSubmit = () => {
    if (name.trim().length){
      dispatch(addBow({selectedText, name, manufacturer, handlleLength,tensionForse,shelf,verticalposition,horizontalposition,
        rigidity,upperArmMode,lowerShoulderMode,shoulders,aim, stabilizer,clicker,saddle,bowstring,plunger,description,photo}));
      navigation.navigate('Лук')
    }
  };
  const pickImage = async () => {
    if (Constants.platform.ios) {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Разрешить приложениею Shooter доступ к галерее?');
        return;
      }
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };


  return (
    <LinearGradient   
      colors={['#a1ffce', '#ffffff']}
      style ={styles.main }
    >
      <View style ={styles.content }>
                <Ionicons name="close-sharp" size={24} color="black" onPress={() => navigation.navigate('Лук')}/>
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={handleSubmit} />
      </View>
      <TouchableOpacity onPress={pickImage}>
          {photo ? (
            <Image source={{uri: photo}} style={{width: "100%", height: 200}} />
          ) : (
            <Image source={ {uri: 'https://i.eurosport.com/2015/06/14/1614315-34283941-2560-1440.jpg'}} style={{width: "100%", height: 200}} />
          )}
        </TouchableOpacity>
      <ScrollView style={styles.container}>
      

        <Text style={styles.TypeBow} >Тип лука:{selectedText} </Text>
        <View style={styles.row}>
            <Text style={styles.text}>Название:</Text>
            <TextInput style={styles.InputText} value={name} onChangeText={setName} placeholder="Название" />
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Производитель: </Text>
            <TextInput style={styles.InputText} value={manufacturer} onChangeText={setManufacturer} placeholder="Производитель" />
        </View>
        
        
        {showAdditionalFields && (
          <View>
            <View style={styles.row}>
              <Text style={styles.text}>Длина рукоятки</Text>  
              <TextInput style={styles.InputText} value={handlleLength}  onChangeText={setHandlleLength}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Сила нятяжения </Text>   
              <TextInput style={styles.InputText} value={tensionForse}  onChangeText={setTensionForse}  /> 
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Полочка</Text> 
              <TextInput style={styles.InputText} value={shelf}  onChangeText={setShelf}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Положение по вертикали</Text> 
              <TextInput style={styles.InputText} value={verticalposition}  onChangeText={setVerticalposition}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Положение по горизонтали</Text>  
              <TextInput style={styles.InputText} value={horizontalposition}  onChangeText={setHorizontalposition}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Жесткость</Text> 
              <TextInput style={styles.InputText} value={rigidity} onChangeText={setRigidity}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Режим верхнего плеча</Text> 
              <TextInput style={styles.InputText} value={upperArmMode}  onChangeText={setUpperArmMode}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Режим нижнего плеча</Text> 
              <TextInput style={styles.InputText} value={lowerShoulderMode}  onChangeText={setLowerShoulderMode}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Плечи</Text>  
              <TextInput style={styles.InputText} value={shoulders}  onChangeText={setShoulders}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Прицел</Text>
              <TextInput style={styles.InputText} value={aim}  onChangeText={setAim}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Стабилизатор</Text>
              <TextInput style={styles.InputText} value={stabilizer}  onChangeText={setStabilizer}  />            
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Кликер</Text>
              <TextInput style={styles.InputText} value={clicker}  onChangeText={setClicker}  />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Седло</Text> 
              <TextInput style={styles.InputText} value={saddle}  onChangeText={setSaddle}  />
              </View>
            <View style={styles.row}>
              <Text style={styles.text}>Тетива</Text>  
              <TextInput style={styles.InputText} value={bowstring}  onChangeText={setBowstring}  />
            </View>
            
            <View style={styles.row}>
              <Text style={styles.text}>Плунжер</Text>
              <TextInput style={styles.InputText} value={plunger} onChangeText={setPlunger} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Описание</Text>
              <TextInput style={styles.InputTextarea} value={description} multiline numberOfLines={4} onChangeText={setDescription}/>
            </View>
          </View>
          
          )}
        <Text style ={styles.AddInput } onPress={() => setShowAdditionalFields(!showAdditionalFields)}> 
          {showAdditionalFields ? 'Скрыть дополнительные поля' : 'Дополнительно'} 
        </Text>

      </ScrollView>
    
    </LinearGradient>
  );
};

export default BowForm;


const styles = StyleSheet.create({
  main: {
    flex: 1,
   
  },
  content:{
    marginTop:30,
    padding:5,
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  TypeBow:{
    fontSize: 17,
    paddingVertical:10,
    justifyContent:"center",
    fontWeight:"bold",
  },
  text: {
    fontSize: 18,
    width: "45%",
   
  },
  InputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  },
  InputTextarea: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 100,
  },
  AddInput:{
    justifyContent: "center",
    alignItems:"center",
    color:"#0c5733",
    fontSize:20,
},
});
