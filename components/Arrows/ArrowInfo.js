/*import React from 'react';
import { View, Text,Button , TextInput,StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { gStyle } from '../../styles/style';
import { selectArrowById, updateArrow } from '../Store/ArrowSlice';
import { useState } from 'react';

const ArrowInfo = ({navigation, route}) => {
  const { ArrrowId } = route.params;
  const dispatch = useDispatch();
  const arrow = useSelector((state) => selectArrowById(state, ArrrowId)); 
  
  const [updatedName, setUpdatedName] = useState(arrow.name);

  
  const loadScreen = () => {
      navigation.goBack() 
  }
  const handleUpdateBow = () => {
    const updatedArrow = {
      ...arrow,
      name: updatedName || arrow.name,
      
    };
    dispatch(updateArrow(updatedArrow));
    navigation.navigate('Стрелы');
  };
    
  return (
    <LinearGradient   
      colors={['#a1ffce', '#ffffff']}
      style ={styles.main }
    >
      <View style={styles.row}>
        <Text style={styles.text} >Название: </Text>       
        <TextInput style={styles.InputText}  value={updatedName} onChangeText={setUpdatedName} />
      </View>
      
      <Button title = "Вернутся" onPress={loadScreen} />
    </LinearGradient>
  );
  
};

export default ArrowInfo;


const styles = StyleSheet.create({
  main: {
    flex: 1,
   
  },
  content:{
    marginTop:30,
    //padding:5,
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
    fontSize: 16,
    paddingVertical:10,
    justifyContent:"center",
  },
  text: {
    fontSize: 16,
    width: "45%",
   
  },
  InputText: {
    flex: 1,
   // borderWidth: 1,
    borderBottomWidth:1,
    borderColor: 'black',
   // padding: 10,
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
    color:"#0c5733",
    fontSize:20,
},
});*/

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { selectBowById, updateBow } from '../Store/BowSlice';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { selectArrowById } from '../Store/ArrowSlice';
import { updateArrow } from '../Store/ArrowSlice';
import * as ImagePicker from 'expo-image-picker';

const ArrowInfo = ({navigation,route}) => {
 
  const { arrowId } = route.params;
  const arrows = useSelector((state) => selectArrowById(state, arrowId));
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const dispatch = useDispatch();
  const [updatedName, setUpdatedName] = useState(arrows.name || "");
  const [updatedNumber, setUpdatedNumber] = useState(arrows.Number || "");

  const [updatedLength, setupdatedLength] = useState(arrows.length);
    const [updatedMaterial, setupdatedMaterial] = useState(arrows.material);
    const [updatedSpine, setupdatedSpine] = useState(arrows.spine);
    const [updatedDiameter, setupdateDdiameter] = useState(arrows.diameter);
    const [updatedBoomWeight, setupdatedBoomWeight] = useState(arrows.boomWeight);
    const [updatedTipWeight, setupdatedTipWeight] = useState(arrows.tipWeight);
    const [updatedFeathers, setupdatedFeathers] = useState(arrows.feathers);
    const [updatedShank, setupdatedShank] = useState(arrows.shank);
    const [updatedComments, setupdatedComments] = useState(arrows.comments);
    const [updatedPhoto, setUpdatedPhoto] = useState(arrows.photo);
 

  const handleUpdateBow = () => {
    const updatedBow = {
      ...arrows,
      name: updatedName || arrows.name,
      Number: updatedNumber  || arrows.Number,
      length: updatedLength || arrows.length ,
      material: updatedMaterial || arrows.material,
      spine: updatedSpine || arrows.spine,
      diameter: updatedDiameter || arrows.diameter,
      boomWeight: updatedBoomWeight || arrows.boomWeight,
      tipWeight: updatedTipWeight || arrows.tipWeight,
      feathers: updatedFeathers || arrows.feathers,
      shank: updatedShank || arrows.shank,
      length: updatedComments || arrows.comments,
      photo: updatedPhoto,
    
    };
    dispatch(updateArrow(updatedBow));
    navigation.navigate('Стрелы');
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setUpdatedPhoto(result.assets[0].uri);
    }
  };
 

  return (
    <LinearGradient   
      colors={['#a1ffce', '#ffffff']}
      style ={styles.main }
    >
      <View style ={styles.content }>
                <Ionicons name="close-sharp" size={24} color="black" onPress={() => navigation.navigate('Стрелы')}/>
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={handleUpdateBow} />
      </View>
                
      <TouchableOpacity onPress={pickImage}  >
            {updatedPhoto ? (
              <Image source={{uri: updatedPhoto}} style={{width: "100%", height: 200,marginBottom:30}} />
            ) : (
              <Image source={ {uri: 'https://img.goodfon.ru/original/2560x1600/3/a0/luk-strela-vystrel.jpg'}} style={{width: "100%", height: 200,marginBottom:30}} />
            )}
        </TouchableOpacity>
      
      <ScrollView style={styles.container}>
        
        <View style={styles.row}>
          
          <Text style={styles.text} >Название: </Text>       
          <TextInput style={styles.InputText}  value={updatedName} onChangeText={setUpdatedName} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text} >Максимальный номер стрелы: </Text>       
          <TextInput style={styles.InputText}  value={updatedNumber} onChangeText={setUpdatedNumber} />
        </View>
       
        
        {showAdditionalFields && (
          <View>
            <View style={styles.row}>
              <Text style={styles.text} >Длина: </Text>       
              <TextInput style={styles.InputText}  value={updatedLength} onChangeText={setupdatedLength} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Материал: </Text>       
              <TextInput style={styles.InputText}  value={updatedMaterial} onChangeText={setupdatedMaterial} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Спайн: </Text>       
              <TextInput style={styles.InputText}  value={updatedSpine} onChangeText={setupdatedSpine} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Диаметр (мм): </Text>       
              <TextInput style={styles.InputText}  value={updatedDiameter} onChangeText={setupdateDdiameter} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Вес стрелы: </Text>       
              <TextInput style={styles.InputText}  value={updatedBoomWeight} onChangeText={setupdatedBoomWeight} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Вес наконечника: </Text>       
              <TextInput style={styles.InputText}  value={updatedTipWeight} onChangeText={setupdatedTipWeight} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Перья: </Text>       
              <TextInput style={styles.InputText}  value={updatedFeathers} onChangeText={setupdatedFeathers} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Хвостовик: </Text>       
              <TextInput style={styles.InputText}  value={updatedShank} onChangeText={setupdatedShank} />
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Комментарии: </Text>       
              <TextInput style={styles.InputText}  value={updatedComments} onChangeText={setupdatedComments} />
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

export default ArrowInfo;

const styles = StyleSheet.create({
  main: {
    flex: 1,
   
  },
  content:{
    marginTop:30,
    paddingVertical:5,
    paddingHorizontal:3,
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
  text: {
    fontSize: 16,
    width: "45%",
   
  },
  InputText: {
    flex: 1,
    borderBottomWidth:1,
    borderColor: 'black',
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
    color:"#0c5733",
    fontSize:20,
},
});

