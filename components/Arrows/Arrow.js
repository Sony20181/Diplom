import { Text,View,Modal ,FlatList,TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import ArrowForm from "./ArrowForm";
import { removeArrow } from "../Store/ArrowSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gStyle } from "../../styles/style";

export default function Arrow({navigation}) {
  const [modalArrowVisible, setModalArrowVisible] = useState(false);
  const dispatch = useDispatch();
  const arrows = useSelector(state => state.arrow.arrow)
  const handleArrowClick = (id) => {
    navigation.navigate('ArrowInfo', { arrowId: id });
  };
  const handleArrowPress = (value) => {
    setModalArrowVisible(false)
  };

  return (
    <LinearGradient   
    colors={['#0f0c29', '#302b63', '#24243e']}
    style={gStyle.container}
    >
      <Modal  visible={modalArrowVisible}>
          <ArrowForm onSelectArrow = {handleArrowPress}/>
      </Modal>
     
      <FlatList data = {arrows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleArrowClick(item.id)}>
          <View style ={gStyle.content }>
            <Text style ={gStyle.text} >{item.name}</Text>
            <MaterialCommunityIcons name="delete-empty-outline" size={24} color="white"  onPress={()=> dispatch(removeArrow(item.id))} />
          </View>
      </TouchableOpacity>
       
    )}/>
    <Ionicons name="add-circle" size={45} color="white" style ={gStyle.openButton } onPress={() => setModalArrowVisible(true)} />
    </LinearGradient>
  );

}


 