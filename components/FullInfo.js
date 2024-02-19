
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { gStyle } from '../styles/style';

// через route получить все данные которые передаются на нашу страницу
export default function FullInfo({navigation, route}) {

    const loadScreen = () => {
        navigation.goBack() 
    }
  return (
    <View style={gStyle.main}>
       <Image source={{
            width:'100%',
            height:200,
            uri: route.params.img
           }}
           />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style ={styles.full }>{route.params.full}</Text>
      <Button title = "Вернутся" onPress={loadScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  full:{
    fontSize:16,
    textAlign:'center',
    marginTop:15,
    color:'#105e18'
   },
});
