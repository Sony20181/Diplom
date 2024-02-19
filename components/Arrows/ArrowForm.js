import React, { useState } from 'react';
import { View, TextInput,StyleSheet,TouchableOpacity,Image ,Text, ScrollView} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { addArrow } from '../Store/ArrowSlice';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const ArrowForm = ({navigation,route}) => {
   
    const setSelectedArrow = route.params.setSelectedArrow;

    const [showAdditionalFields, setShowAdditionalFields] = useState(false);
    const dispatch = useDispatch();
    
    const[name,setName] = useState('Моя Стрела');
    const[Number,setNumber] = useState('12');
    const [length, setlength] = useState('');
    const [material, setmaterial] = useState('');
    const [spine, setspine] = useState('');
    const [diameter, setdiameter] = useState('');
    const [boomWeight, setboomWeight] = useState('');
    const [tipWeight, setipWeight] = useState('');
    const [feathers, setfeathers] = useState('');
    const [shank, setshank] = useState('');
    const [comments, setcomments] = useState('');
    const [photo, setPhoto] = useState(null);

    const addArrows = () => {
        if (name.trim().length){
            dispatch(addArrow({name,Number,length,material,spine,diameter,boomWeight,tipWeight,feathers,shank,comments,photo}))
            setSelectedArrow(name);
            navigation.goBack();
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
                <Ionicons name="close-sharp" size={24} color="black" onPress={() =>  navigation.goBack()}/>
                <Ionicons name="checkmark-done-sharp" size={24} color="black" onPress={addArrows} />
            </View>
            <ScrollView style={styles.container} >
                <TouchableOpacity onPress={pickImage}>
                    {photo ? (
                        <Image source={{uri: photo}} style={{width: "100%", height: 200}} />
                    ) : (
                        <Image source={ {uri: 'https://img.goodfon.ru/original/2560x1600/3/a0/luk-strela-vystrel.jpg'}} style={{width: "100%", height: 200}} />
                    )}
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.text} >Название:</Text>
                    <TextInput
                        style={styles.InputText}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Максимальный номер стрелы:</Text>
                    <TextInput
                        style={styles.InputText}
                        value={Number}
                        onChangeText={setNumber}
                    />
                </View>
                {showAdditionalFields && (
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Длина:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={length}
                                onChangeText={setlength}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Материал:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={material}
                                onChangeText={setmaterial}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Спайн:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={spine}
                                onChangeText={setspine}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Диаметр (мм):</Text>
                            <TextInput
                                style={styles.InputText}
                                value={diameter}
                                onChangeText={setdiameter}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Вес стрелы:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={boomWeight}
                                onChangeText={setboomWeight}
                            />
                        </View>
                        <View style={styles.row}>
                        <Text style={styles.text}>Вес наконечника:</Text>
                                <TextInput
                                    style={styles.InputText}
                                    value={tipWeight}
                                    onChangeText={setipWeight}
                                />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Перья:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={feathers}
                                onChangeText={setfeathers}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Хвостовик:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={shank}
                                onChangeText={setshank}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Комментарии:</Text>
                            <TextInput
                                style={styles.InputText}
                                value={comments}
                                onChangeText={setcomments}
                            />
                        </View>
                    </View>
                )}
                <Text style ={styles.AddInput} onPress={() => setShowAdditionalFields(!showAdditionalFields)}> 
                    {showAdditionalFields ? 'Скрыть дополнительные поля' : 'Дополнительно'} 
                </Text>
                
                
            </ScrollView>
           
        </LinearGradient>
    )
};

export default ArrowForm;


const styles = StyleSheet.create({
    main: {
        flex: 1,
       
      },
      content:{
       // marginTop:30,
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
  