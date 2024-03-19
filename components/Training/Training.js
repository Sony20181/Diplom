import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTrainig } from "../Store/TrainingSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gStyle } from "../../styles/style";

import { View, Text, Modal, TouchableOpacity, StyleSheet, Animated, FlatList,Image } from 'react-native';

import { getTotalScore } from '../../hooks';

export default function Training({navigation}) {
  const dispatch = useDispatch();
  const training = useSelector(state => state.trainings.trainings)
  
  const handleTrainingClick = (id) => {
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
  /*
  const getTotalScore = (mas) => {
    return mas.reduce((total, round) => {
        return total + round.reduce((roundTotal, shots) => {
            return roundTotal + shots.reduce((shotTotal, shot) => {
                return shotTotal + shot.score;
            }, 0);
        }, 0);
    }, 0);
}; */

  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
    style={styles.container}
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
              
              <Image source={require('../../assets/icon.png')} style={{width: 40, height: 40, marginRight:10, borderRadius:100}} />
              <Text style={gStyle.buttonText}>Тренировка со стандартным рауном</Text>
             
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButtonTraining} onPress={() => handleAddTrainingFree()}>
            <Image source={require('../../assets/icon.png')} style={{width: 40, height: 40, marginRight:10, borderRadius:100}} />
              <Text style={gStyle.buttonText}>Свободная тренировка</Text>
            </TouchableOpacity>
          

          </Animated.View>
          {!openButtonVisible && (
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButtonTraining}>
            <Ionicons name="close-circle" size={45} color="white"  />
          </TouchableOpacity>
          )}
        </View>
       
      </Modal>
     
      <FlatList data = {training} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleTrainingClick(item.id)}>
          <View style ={gStyle.content }>
            <View style ={styles.TrainingInfo}>
              <Text style ={ gStyle.text} >{item.trainingName}</Text>
              <Text style ={gStyle.text} >{item.formattedDate}</Text>
            </View>
            <Text style ={gStyle.text}>{getTotalScore(item.allRounds)} / {item.rounds * item.countSeries * 30}</Text>
            <MaterialCommunityIcons name="delete-empty-outline" size={24} color="white"  onPress={()=> dispatch(removeTrainig(item.id))} />
          </View>
      </TouchableOpacity>
       
    )}/>
     {openButtonVisible && (
        <TouchableOpacity onPress={handleOpenModal} style={gStyle.openButton}>
          <Ionicons name="add-circle" size={45}  color="white"  /> 
        </TouchableOpacity>
      )}
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  closeButtonTraining: {
    borderRadius: 5,
    marginLeft:10,
    marginBottom: 75,
    color:"white",
   
  },
  modalButtonTraining: {
    flexDirection:"row",
    marginLeft:10,
    marginVertical: 5,
    alignItems:"center",
   
  },
  TrainingInfo:{
    flexDirection: 'column',
  }
});

 







