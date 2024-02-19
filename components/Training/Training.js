import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTrainig } from "../Store/TrainingSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gStyle } from "../../styles/style";

import { View, Text, Modal, TouchableOpacity, StyleSheet, Animated, FlatList,Button } from 'react-native';



export default function Arrow({navigation}) {
  const dispatch = useDispatch();
  const training = useSelector(state => state.trainings.trainings)
  
  const handleArrowClick = (id) => {
    navigation.navigate('Информация о тренировке', { trainingId: id });
  };


  const [modalVisible, setModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [openButtonVisible, setOpenButtonVisible] = useState(true);
  const handleAddTrainingStandart = () => {
      setModalVisible(false);
      setOpenButtonVisible(true);
      navigation.navigate('Тренировка со стандартным раундом');
  };
  const handleAddTrainingFree = () => {
    setModalVisible(false);
    setOpenButtonVisible(true);
    navigation.navigate('Свободная Тренировка');
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
    colors={['#a1ffce', '#ffffff']}
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

            <TouchableOpacity style={styles.modalButtonTraining} onPress={() => handleAddTrainingStandart()}>
              <Ionicons name="close-circle" size={45} color="white"/>
              <Text style={gStyle.buttonText}>Тренировка со стандартным рауном</Text>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonTraining} onPress={() => handleAddTrainingFree()}>
              <Ionicons name="close-circle" size={45} color="white"/>
              <Text style={gStyle.buttonText}>Свободная тренировка</Text>
            </TouchableOpacity>
          

          </Animated.View>
          {!openButtonVisible && (
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButtonTraining}>
            <Ionicons name="close-circle" size={45} color="black"  />
          </TouchableOpacity>
          )}
        </View>
       
      </Modal>
     
      <FlatList data = {training} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleArrowClick(item.id)}>
          <View style ={gStyle.content }>
            <Text style ={ gStyle.text} >{item.trainingName}</Text>
            <Text style ={gStyle.text} >{item.formattedDate}</Text>
            <MaterialCommunityIcons name="delete-empty-outline" size={24} color="black"  onPress={()=> dispatch(removeTrainig(item.id))} />
          </View>
      </TouchableOpacity>
       
    )}/>
     {openButtonVisible && (
        <TouchableOpacity onPress={handleOpenModal} style={gStyle.openButton}>
          <Ionicons name="add-circle" size={45} /> 
        </TouchableOpacity>
      )}
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  closeButtonTraining: {
    borderRadius: 5,
    marginLeft:10,
    marginBottom: 75,
   
  },
  modalButtonTraining: {
    flexDirection:"row",
    marginLeft:10,
    marginVertical: 5,
    alignItems:"center",
  
  },
});

 







