import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MainModalMenu from './MainModalMenu';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Main({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const goToMain = () => {
    navigation.navigate('Главная')
    closeModal();
  };

  const goToProfile = () => {
    navigation.navigate('Профиль')
    closeModal();
  };
  const goToArrows = () => {
    navigation.navigate('Стрелы')
    closeModal();
  };
  const goToBow = () => {
    navigation.navigate('Лук')
    closeModal();
  };
  const goToWeather = () => {
    navigation.navigate('Погода')
    closeModal();
  };
  const goToNotes = () => {
    navigation.navigate('Заметки')
    closeModal();
  };

    return (
      <LinearGradient
      colors={['#0f0c29', '#302b63', '#24243e']}
    //  colors={['#a1ffce', '#ffffff']}
    // colors={['#93f9b9','#1d976c','#ffffff']}
      style={gStyle.main} 
      
     >
      <TouchableOpacity style={styles.MainOption}  onPress={() => navigation.navigate('Feed')}>
            <View style={styles.MainOptionBackIcon}>
            <Ionicons name="stats-chart-sharp" size={33} color="white" />
            </View>
            <Text style={styles.MainOptionText}>Статистика(feed)</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.MainOption}  onPress={() => navigation.navigate('Лук')}>
            <View style={styles.MainOptionBackIcon}>
            <MaterialCommunityIcons name="bow-arrow" size={33} color="white"  />
            </View>
            <Text style={styles.MainOptionText}>Лук</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.MainOption}  onPress={() => navigation.navigate('Стрелы')}>
            <View style={styles.MainOptionBackIcon}>
            <MaterialCommunityIcons name="arrow-projectile" size={33} color="white" />
            </View>
            <Text style={styles.MainOptionText}>Стрелы</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.MainOption}  onPress={openModal}>
            <View style={styles.MainOptionBackIcon}>
              <Ionicons name="list-circle-outline" size={33} color="white" />
            </View>
            <Text style={styles.MainOptionText}>Дополнительно</Text>
         </TouchableOpacity>
         <MainModalMenu
        visible={modalVisible}
        closeModal={closeModal}
        goToMain={goToMain}
        goToProfile={goToProfile}
        goToArrows={goToArrows}
        goToBow={goToBow}
        goToWeather={goToWeather}
        goToNotes={goToNotes}
      />
      
      </LinearGradient>
    );

  }


  const styles = StyleSheet.create({

    MainOptionBackIcon:{
      borderWidth: 2, 
      borderRadius: 5, 
      borderColor: 'white', 
      backgroundColor:'black',
      
    },

      MainOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      },
      MainOptionText: {
        marginLeft: 20,
        color:"white",
        fontSize: 20,
      },
   
  });