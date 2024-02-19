
import React from 'react';
import { View, Text, TextInput, StyleSheet,Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName, updateLastName, updateLicense,updateClub,updateBirthDate, updatePhoto ,updateImageLoaded} from '../Store/ProfileSlice';
import { LinearGradient } from 'expo-linear-gradient';
import { gStyle } from "../../styles/style";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

const ProfileForm = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
 // const [imageLoaded, setImageLoaded] = useState(false);

  const handleFirstNameChange = (text) => {
    dispatch(updateFirstName(text));
  };

  const handleLastNameChange = (text) => {
    dispatch(updateLastName(text));
  };

  const handleBirthDateChange = (text) => {
    dispatch(updateBirthDate(text));
  };
  const handleClubChange = (text) => {
    dispatch(updateClub(text));
  };
  const handleLicenseChange = (text) => {
    dispatch(updateLicense(text));
  };

  const pickImage = async () => {
    if (Constants.platform.ios) {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Разрешить приложениею Shooter доступ к галерее и камере?');
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
      dispatch(updatePhoto(result.assets[0].uri)); // Добавляем фото в Redux store
      //setImageLoaded(true);
      dispatch(updateImageLoaded(true))
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(updatePhoto(result.assets[0].uri)); // Добавляем фото в Redux store
      //setImageLoaded(true);
      dispatch(updateImageLoaded(true))
    }
  };
 

  return (
    <LinearGradient    //Это условное выражение, которое отображает компонент Image только в том случае, если переменная image содержит значение (т.е. если было выбрано или сделано фото). 

            colors={['#a1ffce', '#ffffff']}
            style={gStyle.main} 
        >
      <View style={styles.containerPhoto} >
        {profile.imageLoaded ? (
          <Image source={{ uri: profile.photo }} style={styles.image} />
        ) : (
          <Image source={{
            uri: 'https://sh-izhevskaya-r62.gosweb.gosuslugi.ru/netcat_files/9/67/Foto_7.jpg',
          }} style={styles.image} />
        )}
      </View>
      <View style={styles.containerIcon}>
        <FontAwesome name="camera-retro" size={24} color="green" onPress={takePhoto} />
        <Fontisto name="photograph" size={24} color="green" onPress={pickImage}  />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.Text}>Имя:</Text>
        <TextInput value={profile.firstName} onChangeText={handleFirstNameChange} style={styles.TextInput} />
      </View>
      <View style={styles.content}>
        <Text style={styles.Text}>Фамилия:</Text>
        <TextInput value={profile.lastName} onChangeText={handleLastNameChange} style={styles.TextInput} />
      </View>
      <View style={styles.content}>
        <Text style={styles.Text}>Дата рождения:</Text>
        <TextInput value={profile.birthDate} onChangeText={handleBirthDateChange} style={styles.TextInput} />
      </View>
      <View style={styles.content}>
        <Text style={styles.Text}>Клуб:</Text>
        <TextInput value={profile.club} onChangeText={handleClubChange} style={styles.TextInput} />
      </View>
      <View style={styles.content}>
        <Text style={styles.Text}>Лицензия:</Text>
        <TextInput value={profile.license} onChangeText={handleLicenseChange} style={styles.TextInput} />
      </View>

      
      
      
    </LinearGradient>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  content:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  Text:{
    fontSize: 18, 
   
    width: "40%",
  },

  TextInput:{
    borderColor: 'gray',
    padding: 5,
    fontSize: 18,
    width:200,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  },
  containerPhoto: {
    alignItems: 'center',   
  },
  containerIcon: {
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: 'center',
    //backgroundColor:"pink",
    marginHorizontal:"28%",
    marginBottom:20,
    marginTop:-30,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: "5%",
    borderRadius:100,
    
  },
 
});


