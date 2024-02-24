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
                <TouchableOpacity style={gStyle.modalNavHome}  onPress={goToMain}>
                    <Ionicons  name="md-home" size={24} color="black" style={gStyle.modalNavIcon}  />
                    <Text style={gStyle.modalNavText}>Дополнительно</Text>
                </TouchableOpacity>
              
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
