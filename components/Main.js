
import { StyleSheet, Text, View, Button, TouchableOpacity,FlatList, Image, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';
import Target from './Target';
export default function Main({navigation}) {

    const [news, setnews] = useState([
        {name: "Google", annons: "google!!!!", full: "Goggle is cool", key: "1",img :'https://avatars.mds.yandex.net/i?id=5928f2b58c6f204d0e0c3a5c41c07e1315ddb837-10511855-images-thumbs&n=13'},
        {name: "Apple", annons: "Apple!!!!", full: "Apple is cool", key: "2", img: 'https://avatars.mds.yandex.net/i?id=5753da361355038984a1044e6d2f406455f07e2d-10105725-images-thumbs&n=13'},
        {name: "VK", annons: "VK!!!!", full: "VK is cool", key: "3", img:'https://avatars.mds.yandex.net/i?id=c29ae4471dc0b86ac490deb0901dca12bedea9b2-3602423-images-thumbs&n=13'}
    ])

    const [modalWindow, setModalWindow] = useState(false);

    const loadScreen = () => {
        navigation.navigate('FullInfo') //переадресация по имени
    }

    const addArtical = (artical) => {
      setnews(
        (list) => {
          artical.key = Math.random().toString();
        return [artical, ...list]
      });
      setModalWindow(false);
    }
    
  
  return (
    <View style={gStyle.main}>
      <Modal visible = {modalWindow}>
            <Ionicons name="close" size={24} color="red" onPress={() => setModalWindow(false)} />
            <View style={gStyle.main}>
              <Text style ={styles.title }>Форма добавления статей</Text>
              <Form addArtical = {addArtical}/>
            </View>
      </Modal>
      <Ionicons name="add-circle" size={45} color="black" onPress={() => setModalWindow(true)} />
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>

      <FlatList data = {news} renderItem={({item} )=> (
        <TouchableOpacity style ={styles.item } onPress={ () => navigation.navigate('FullInfo', item)}>
           <Image source={{
            width:'100%',
            height:200,
            uri: item.img
           }}
           />
            <Text style ={styles.title } >{item.name}</Text>
            <Text style ={styles.annons } >{item.annons}</Text>
        </TouchableOpacity>
      )}/>
      <Target/>
      <Button title = "Открыть страницу" onPress={loadScreen} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  header:{
    marginBottom:30,
  },
 item:{
  width:'100%',
  marginBottom:30,
 },
 title:{
  fontSize:22,
  textAlign:'center',
  marginTop:20,
  color:'#0d2910'
 },
 annons:{
  fontSize:16,
  textAlign:'center',
  marginTop:7,
  color:'#105e18'
 },

});
