/*import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=your_city&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!weather) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{weather.name}</Text>
      <Text style={styles.text}>Temperature: {weather.main.temp}°C</Text>
      <Text style={styles.text}>Humidity: {weather.main.humidity}%</Text>
      <Text style={styles.text}>Wind Speed: {weather.wind.speed} m/s</Text>
      <Text style={styles.text}>Pressure: {weather.main.pressure} hPa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    //fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default WeatherApp;
*/


import React from "react";
import * as Location from 'expo-location';
import Loading from "./Loading";
import { Alert } from "react-native";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";

const API_KEY = '3797329128c1ec0fe25fa16bdc92fc63';

export default class Weather extends React.Component{
  state = {
    isLoading: true,
  }

  getWeather = async (latitude,longitude) => {
    const {data: {main:{temp, humidity}, weather ,wind:{deg,gust,speed}, name}} =await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`)
    this.setState({ 
      isLoading:false, 
      temp:temp, 
      condition:weather[0].main,
      humidity:humidity,
      deg:deg,
      gust:gust,
      speed:speed,
      name:name
    });
  }


  getLocation = async() =>{
    try{
      
    // Geolocation.getCurrentPosition(info => console.log(info));
     // const response =await  Location.requestForegroundPermissionsAsync();
     // console.log(response);
     const {coords: {latitude,longitude}} = await Location.getCurrentPositionAsync();
    
     this.getWeather(latitude,longitude)
     
    }catch(error){
      Alert.alert("Местоположение неизвестно",'Попробуйте снова');
    }
  }

  componentDidMount(){
    this.getLocation();
  }
  render()
  {
    const {isLoading, temp, condition,humidity,deg,gust, speed,name} = this.state
    return(
    isLoading ? <Loading/> : <WeatherConditions temp = {Math.round(temp)} condition = {condition} humidity= {humidity} deg = {deg} gust={gust} speed = {speed} name = {name}/>
    )
  }
}