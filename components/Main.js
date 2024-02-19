import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
      
         <Text style={styles.MainOption}  onPress={() => navigation.navigate('Feed')}>
            <Ionicons name="stats-chart-sharp" size={33} color="black" style={styles.MainIcon}  />
            Статистика(feed)
        </Text>
         <Text style={styles.MainOption}  onPress={() => navigation.navigate('Лук')}>
            <MaterialCommunityIcons name="bow-arrow" size={33} color="black" style={styles.MainIcon} />
            Лук
        </Text>

        <Text style={styles.MainOption}  onPress={() => navigation.navigate('Стрелы')}>
            <MaterialCommunityIcons name="arrow-projectile" size={33} color="black" style={styles.MainIcon}/>
            Стрелы
        </Text>
        <Text style={styles.MainOption}  onPress={openModal}>
            <Ionicons name="list-circle-outline" size={33} color="black" style={styles.MainIcon} />
            Дополнительно
        </Text>
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
    MainOption: {
        height:"8%",
        fontSize: 23,
        marginVertical:10,
        color:'#fff'
        
    },
    MainIcon: {
        borderWidth: 2, // Толщина ободка
        borderRadius: 5, // Скругление углов
        marginRight:20, 
        borderColor: 'white', 
        backgroundColor:'black',
        color:'#fff',
    },
   
    button: {
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
      },
   
  });