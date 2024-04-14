
import React from "react";
import propTypes from "prop-types";
import { StyleSheet,View, Text, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from "@expo/vector-icons";
const weatherOptions  = {
    Rain: {
		title: 'Дождь',
		icon: 'rainy',
        gradient:['#000046','#1CB5E0']
	},
	Clear: {
		title: 'Солнечно',
		icon: 'sunny',
        gradient:['#FFFFFF','#6DD5FA', '#2980B9']
	},
	Thunderstorm: {
		title: 'Гроза',
		icon: 'thunderstorm',
        gradient:['#20002c','#cbb4d4']
	},
	Clouds: {
		title: 'Облачно',
		icon: 'partly-sunny',
        gradient:['#bdc3c7', '#2c3e50']
	},

	Snow: {
		title: 'Снег',
		icon: 'snow',
        gradient:['#E0EAFC', '#CFDEF3']
	},
	Drizzle: {
		title: 'Моросящий дождь',
		icon: 'rainy-outline',
        gradient:['#1CB5E0', '#000046']
	},
	Haze: {
		title: 'Лугкий туман',
		icon: 'cloud-outline',
        gradient:['#757f9a', '#d7dde8']
	},
	Mist: {
		title: 'Туман',
		icon: 'cloudy',
        gradient:['#000000', '#434343']
	}
}

export default function WeatherConditions({temp, condition,humidity,deg,gust, speed,name}){

    let windDirection = "";

    if (deg > 0 && deg < 90) {
        windDirection = "С-В";
    } else if (deg > 90 && deg < 180) {
        windDirection = "Ю-В";
    }else if (deg > 180 && deg < 270) {
        windDirection = "Ю-З";
    }else if (deg > 270 && deg < 360) {
        windDirection = "С-З";
    } else if (deg === 0 || deg === 360 ) {
        windDirection = "С";
    } else if (deg === 90) {
        windDirection = "В";
    }else if (deg === 180) {
        windDirection = "Ю";
    }else if (deg === 270) {
        windDirection = "З";
    }

    return (
    
        <LinearGradient
           
            colors={weatherOptions[condition].gradient}
            style={styles.Weather}>
            <StatusBar barStyle={"light-content"}/>
            <View style ={styles.halfContainer}>
                <Ionicons name = {weatherOptions[condition].icon }  size = {96} color={"white"}/>
                <Text style ={styles.TextName}>{name}</Text>
                <Text style ={styles.Text}>{temp}°</Text>
            </View>
            <View style ={styles.halfContainer}>
                <Text style ={styles.Text}>{weatherOptions[condition].title}</Text>
                <Text style ={styles.Text}>Влажность: {humidity}%</Text>
                <Text style ={styles.Text}>Направление вестра: {windDirection} </Text>
                <Text style ={styles.Text}>Порыв ветра: {gust} м/с</Text>
                <Text style ={styles.Text}>Скорость ветра: {speed} м/с</Text>
            </View>
        </LinearGradient>
      
  );
}

WeatherConditions.propTypes = {
  temp : propTypes.number.isRequired,
  condition: propTypes.oneOf([ "Rain", "Clear","Thunderstorm","Clouds","Snow","Drizzle","Haze","Mist"]).isRequired
}

const styles = StyleSheet.create({
  Weather: {
     flex:1,
     justifyContent:"center",
     alignItems:"center",
     color:"#dbffee"
  },
  halfContainer:{
    flex:1,
     justifyContent:"center",
     alignItems:"center",   
  },
  TextName:{
    fontSize:32,
    color:"#fff"
  },
  Text:{
    fontSize:20,
    color:"#fff"
  }
})