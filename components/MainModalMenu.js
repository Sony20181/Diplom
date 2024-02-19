/*import { StyleSheet, Text, View, Button, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../styles/style';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function MainModalMenu(){
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
        <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
    >
        <View style={gStyle.modalNavContainer}>
            <View style={gStyle.modalNavContent}>
                <Text style={gStyle.modalNavText}>
                    <Ionicons  name="md-home" size={24} color="black" style={gStyle.modalNavIcon}  />
                    Домашний экран
                </Text>  
                <TouchableOpacity
                        style={gStyle.modalNavButton}
                        onPress={() => {
                            navigation.navigate('Profile');
                            setModalVisible(false)
                        
                        }}>
                        <Text style={gStyle.modalNavButtonText} >Профиль</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                        style={gStyle.modalNavButton}
                        onPress={() => {
                            setModalVisible(false)
                            navigation.navigate('Target')
                        }}>
                        <Text style={gStyle.modalNavButtonText} >Статистика</Text>
                </TouchableOpacity>

                <TouchableOpacity style={gStyle.modalNavButton} onPress={() => setModalVisible(false)}>
                    <Text style={gStyle.modalNavButtonText}>Закрыть</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
    <AntDesign name="menu-fold" size={24} color="white" onPress={() => setModalVisible(true)} />
    </View>
    );
}*/

import React from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons';

const MainModalMenu = ({ visible, closeModal, goToMain, goToProfile,goToBow,goToWeather,goToNotes }) => {
  return (
    <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
        >
        <View style={gStyle.modalNavContainer}>
            <View style={gStyle.modalNavContent}>
                <Text style={gStyle.modalNavText} onPress={goToMain}>
                    <Ionicons  name="md-home" size={24} color="black" style={gStyle.modalNavIcon}  />
                    Дополнительно
                </Text>  
                
                <TouchableOpacity onPress={goToProfile} style={gStyle.modalNavButton}>
                    <Text style={gStyle.modalNavButtonText} >Профиль</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToWeather} style={gStyle.modalNavButton}>
                    <Text style={gStyle.modalNavButtonText} >Погода</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={goToNotes} style={gStyle.modalNavButton}>
                    <Text style={gStyle.modalNavButtonText} >Заметки</Text>
                </TouchableOpacity>

                <TouchableOpacity style={gStyle.modalNavButton} onPress={() => closeModal()}>
                    <Text style={gStyle.modalNavButtonText}>Закрыть</Text>
                </TouchableOpacity>
        
            </View>
        </View>
    </Modal>
  );
};

export default MainModalMenu;
