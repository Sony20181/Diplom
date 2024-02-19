import { Text,View,Modal ,FlatList,TouchableOpacity, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import ArrowForm from "./ArrowForm";
import { removeArrow } from "../Store/ArrowSlice";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { gStyle } from "../../styles/style";

export default function Arrow({navigation}) {
  const [selectedArrow, setSelectedArrow] = useState("Добавить стрелу")
  const dispatch = useDispatch();
  const arrows = useSelector(state => state.arrow.arrow)
  const handleArrowClick = (id) => {
    navigation.navigate('ArrowInfo', { arrowId: id });
  };

  return (
    <LinearGradient   
    colors={['#a1ffce', '#ffffff']}
    style={gStyle.container}
    >
     
      <FlatList data = {arrows} renderItem={({item} )=> (
      <TouchableOpacity style ={gStyle.item } onPress={() => handleArrowClick(item.id)}>
          <View style ={gStyle.content }>
            <Text style ={gStyle.text} >{item.name}</Text>
            <MaterialCommunityIcons name="delete-empty-outline" size={24} color="black"  onPress={()=> dispatch(removeArrow(item.id))} />
          </View>
      </TouchableOpacity>
       
    )}/>
    <Ionicons name="add-circle" size={45}  style ={gStyle.openButton } onPress={() => navigation.navigate('ArrowForm',{setSelectedArrow})} />
    </LinearGradient>
  );

}


 