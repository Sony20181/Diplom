import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView,  TextInput,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { selectBowById, updateBow } from '../Store/BowSlice';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const BowInfo = ({navigation,route}) => {
  const { bowId } = route.params;
  const bow = useSelector((state) => selectBowById(state, bowId));
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const dispatch = useDispatch();
  const [updatedName, setUpdatedName] = useState(bow.name || "");
  const [updatedManufacturer, setUpdatedManufacturer] = useState(bow.manufacturer || "");
  const [updatedHandlleLength, setUpdatedHandlleLength] = useState(bow.handlleLength || "");
  const [updatedTensionForse, setUpdatedTensionForse] = useState(bow.tensionForse || "");
  const [updatedShelf, setUpdatedShelf] = useState(bow.shelf || "");
  const [updatedVerticalposition, setUpdatedVerticalposition] = useState(bow.verticalposition || "");
  const [updatedHorizontalposition, setUpdatedHorizontalposition] = useState(bow.horizontalposition || "");
  const [updatedRigidity, setUpdatedRigidity] = useState(bow.rigidity || "");
  const [updatedUpperArmMode, setUpdatedUpperArmMode] = useState(bow.upperArmMode || "");
  const [updatedLowerShoulderMode, setUpdatedLowerShoulderMode] = useState(bow.lowerShoulderMode || "");
  const [updatedShoulders, setUpdatedShoulders] = useState(bow.shoulders || "");
  const [updatedAim, setUpdatedAim] = useState(bow.aim || "");
  const [updatedStabilizer, setUpdatedStabilizer] = useState(bow.stabilizer || "");
  const [updatedClicker, setUpdatedClicker] = useState(bow.clicker || "");
  const [updatedSaddle, setUpdatedSaddle] = useState(bow.saddle || "");
  const [updatedBowstring, setUpdatedBowstring] = useState(bow.bowstring || "");
  const [updatedPlunger, setUpdatedPlunger] = useState(bow.plunger || "");
  const [updatedDescription, setUpdatedDescription] = useState(bow.description || "");
  const [updatedPhoto, setUpdatedPhoto] = useState(null || bow.photo);
  

  const handleUpdateBow = () => {
    const updatedBow = {
      ...bow,
      name: updatedName || bow.name,
      manufacturer: updatedManufacturer ,
      handlleLength: updatedHandlleLength || bow.handlleLength,
      tensionForse: updatedTensionForse || bow.tensionForse,
      shelf: updatedShelf || bow.shelf,
      verticalposition: updatedVerticalposition || bow.verticalposition,
      horizontalposition: updatedHorizontalposition || bow.horizontalposition,
      rigidity: updatedRigidity || bow.rigidity,
      upperArmMode: updatedUpperArmMode || bow.upperArmMode,
      lowerShoulderMode: updatedLowerShoulderMode || bow.lowerShoulderMode,
      shoulders: updatedShoulders || bow.shoulders,
      aim: updatedAim || bow.aim,
      stabilizer: updatedStabilizer || bow.stabilizer,
      clicker: updatedClicker || bow.clicker,
      saddle: updatedSaddle || bow.saddle,
      bowstring: updatedBowstring || bow.bowstring,
      plunger: updatedPlunger || bow.plunger,
      description: updatedDescription || bow.description,
      photo: updatedPhoto,
    };
    dispatch(updateBow(updatedBow));
    navigation.navigate('Лук');
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
                <Ionicons name="close-sharp" size={24} color="black" onPress={() => navigation.navigate('Лук')}/>
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={handleUpdateBow} />
      </View>
      <TouchableOpacity onPress={pickImage} >
          {updatedPhoto ? (
            <Image source={{uri: updatedPhoto}} style={{width: "100%", height: 200}} />
          ) : (
            <Image source={ {uri: 'https://i.eurosport.com/2015/06/14/1614315-34283941-2560-1440.jpg'}} style={{width: "100%", height: 200}} />
          )}
      </TouchableOpacity>
      <ScrollView style={styles.container}>

      


        <Text style={styles.TypeBow} >Тип лука: {bow.selectedText}</Text>
        <View style={styles.row}>
          <Text style={styles.text} >Название: </Text>       
          <TextInput style={styles.InputText}  value={updatedName} onChangeText={setUpdatedName} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text} >Производитель:</Text>
          <TextInput style={styles.InputText} value={updatedManufacturer} onChangeText={setUpdatedManufacturer}/>
        </View>
        
        {showAdditionalFields && (
          <View>
            <View style={styles.row}>
              <Text style={styles.text} >Длина рукоятки:</Text>
              <TextInput style={styles.InputText} value={updatedHandlleLength} onChangeText={setUpdatedHandlleLength}/>
            </View>
            <View style={styles.row}>
              <Text style={styles.text} >Сила нятяжения:</Text>
              <TextInput style={styles.InputText} value={updatedTensionForse} onChangeText={setUpdatedTensionForse}/>
            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Полочка:</Text>
            <TextInput style={styles.InputText} value={updatedShelf} onChangeText={setUpdatedShelf}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Положение по вертикали:</Text>
            <TextInput style={styles.InputText} value={updatedVerticalposition} onChangeText={setUpdatedVerticalposition}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Положение по горизонтали:</Text>
            <TextInput style={styles.InputText} value={updatedHorizontalposition} onChangeText={setUpdatedHorizontalposition}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Жесткость:</Text>
            <TextInput style={styles.InputText} value={updatedRigidity} onChangeText={setUpdatedRigidity}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Режим верхнего плеча:</Text>
            <TextInput style={styles.InputText} value={updatedUpperArmMode} onChangeText={setUpdatedUpperArmMode}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Режим нижнего плеча:</Text>
            <TextInput style={styles.InputText} value={updatedLowerShoulderMode} onChangeText={setUpdatedLowerShoulderMode}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Плечи:</Text>
            <TextInput style={styles.InputText} value={updatedShoulders} onChangeText={setUpdatedShoulders}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Прицел:</Text>
            <TextInput style={styles.InputText} value={updatedAim} onChangeText={setUpdatedAim}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Стабилизатор:</Text>
            <TextInput style={styles.InputText} value={updatedStabilizer} onChangeText={setUpdatedStabilizer}/>
          
            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Кликер:</Text>
            <TextInput style={styles.InputText} value={updatedClicker} onChangeText={setUpdatedClicker}/>

           
            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Седло:</Text>
            <TextInput style={styles.InputText} value={updatedSaddle} onChangeText={setUpdatedSaddle}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text} >Тетива:</Text>
            <TextInput style={styles.InputText} value={updatedBowstring} onChangeText={setUpdatedBowstring}/>

            </View>
            
            <View style={styles.row}>
            <Text style={styles.text} >Плунжер:</Text>
            <TextInput style={styles.InputText} value={updatedPlunger} onChangeText={setUpdatedPlunger}/>

            </View>
            <View style={styles.row}>
            <Text style={styles.text}>Описание </Text>
            <TextInput style={styles.InputTextarea}  value={updatedDescription} multiline numberOfLines={4}  onChangeText={setUpdatedDescription}  />
      
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

export default BowInfo;

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
    fontWeight:"bold",
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
});
