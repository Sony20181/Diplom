import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Animated,FlatList ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { LinearGradient } from 'expo-linear-gradient';
import { removeBow } from '../Store/BowSlice';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gStyle } from '../../styles/style';


export default function  Bow ({ navigation }) {

  const dispatch = useDispatch();
  const bows = useSelector(state => state.bows.bows)
  const [modalVisible, setModalVisible] = useState(false);
  
    
  const [animation] = useState(new Animated.Value(0));
  const [openButtonVisible, setOpenButtonVisible] = useState(true);
 
  const handleBowPress = (value) => {
    setModalBowVisible(false)
  };
  const handleBowClick = (id) => {
    navigation.navigate('BowInfo', { bowId: id });
  };

  const handleAddBowClick = (text) => {
      setModalVisible(false);
      setOpenButtonVisible(true);
       navigation.navigate('BowForm', { selectedText: text });
  };

  const handleOpenModal = () => {
    setModalVisible(true);
    setOpenButtonVisible(false);
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setOpenButtonVisible(true);
    });
  };

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });


  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
    style={gStyle.container}
    >
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      > 
        <View style={gStyle.modalContainer}>
          <Animated.View style={[gStyle.modalContent, { transform: [{ translateY }] }]}>

            <TouchableOpacity style={gStyle.modalButton} onPress={() => handleAddBowClick("Азиатский традиционный лук")}>
              <Image source={require('../../assets/азиатский лук.jpg')} style={{width: 45, height: 45, marginRight:10}} />
              <Text style={gStyle.buttonText}>Азиатский традиционный лук</Text>
             
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.modalButton} onPress={() => handleAddBowClick("Короткий традиционный лук")}>
              <Image source={require('../../assets/традиционный лук.jpg')} style={{width: 45, height: 45, marginRight:10}} />
              <Text style={gStyle.buttonText}>Короткий традиционный лук</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.modalButton} onPress={() => handleAddBowClick("Длинный английский лук")}>
              <Image source={require('../../assets/английский лук.jpg')} style={{width: 45, height: 45, marginRight:10}} />
              <Text style={gStyle.buttonText}>Длинный английский лук</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.modalButton} onPress={() => handleAddBowClick("Классический лук без обвесов")}>
              <Image source={require('../../assets/классический лук без обвесов.jpg')} style={{width: 45, height: 45, marginRight:10}} />
              <Text style={gStyle.buttonText}>Классический лук без обвесов</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.modalButton} onPress={() => handleAddBowClick("Блочный лук")}>
              <Image source={require('../../assets/блочный лук.jpg')} style={{width: 45, height: 45, marginRight:10}} />
              <Text style={gStyle.buttonText}>Блочный лук</Text>
            </TouchableOpacity>
            <TouchableOpacity style={gStyle.modalButton} onPress={() => handleAddBowClick("Спортивный классический лук")}>
              <Image source={require('../../assets/sport bow.jpg')} style={{width: 45, height: 45, marginRight:10}} />
              <Text style={gStyle.buttonText}>Спортивный классический лук</Text>
            </TouchableOpacity>

          </Animated.View>
          {!openButtonVisible && (
          <TouchableOpacity onPress={handleCloseModal} style={gStyle.closeButton}>
            <Ionicons name="close-circle" size={45} color="white" />
          </TouchableOpacity>
          )}
        </View>
      </Modal>

      <FlatList data = {bows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleBowClick(item.id)}>
          <View style ={gStyle.content }>
            <Text style ={gStyle.text} >{item.name}</Text>
            <MaterialCommunityIcons name="delete-empty-outline" size={24} color="white"  onPress={()=> dispatch(removeBow(item.id))} />
          </View>
      </TouchableOpacity>
    )}/>

      {openButtonVisible && (
        <TouchableOpacity onPress={handleOpenModal} style={gStyle.openButton}>
          <Ionicons name="add-circle" size={45} color="white" /> 
        </TouchableOpacity>
      )}
    
    </LinearGradient>
  );
};

