import React from "react";
//import { StyleSheet } from "react-native";
import MainNavigation from "./Navigation";
import store from "./components/Store/store";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from "./components/Store/store";
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <MainNavigation/>
      </PersistGate>
    </Provider>
      
  );
  
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
import React, {useRef} from 'react'; 
import { 
  SafeAreaView, 
  ScrollView, 
  Text, 
  StyleSheet, 
  View, 
  ImageBackground, 
  Animated, 
  useWindowDimensions, 
} from 'react-native'; 
 
const dates = ['March 2024', 'April 2024', 'May 2024', 'June 2024']; 
 
const App = () => { 
  const scrollX = useRef(new Animated.Value(0)).current; 
 
  const {width: windowWidth} = useWindowDimensions(); 
  return ( 
    <SafeAreaView style={styles.container1}> 
      <View style={styles.scrollContainer}> 
        <ScrollView 
          horizontal={true} 
          pagingEnabled 
          showsHorizontalScrollIndicator={false} 
          onScroll={Animated.event( 
            { 
              nativeEvent: { 
                contentOffset: { 
                  x: scrollX, 
                }, 
              }, 
            }, 
          )} 
          scrollEventThrottle={1}> 
          {dates.map((date, dateIndex) => { 
            return ( 
              <View style={{width: 150, height: 65}} key={dateIndex}> 
                <View style={styles.card}> 
                  <View style={styles.textContainer}> 
                    <Text style={styles.infoText}> 
                      {date} 
                    </Text> 
                  </View> 
                </View> 
              </View> 
            ); 
          })} 
        </ScrollView> 
        <View style={styles.indicatorContainer}> 
          {dates.map((date, dateIndex) => { 
            const width = scrollX.interpolate({ 
              inputRange:  [
                windowWidth * (dateIndex - 1), 
                windowWidth * dateIndex, 
                windowWidth * (dateIndex + 1), 
              ], 
              outputRange: [8, 16, 8], 
              extrapolate: 'clamp', 
            }); 
            return ( 
              <Animated.View 
                key={dateIndex} 
                style={[styles.normalDot, {width}]} 
              /> 
            ); 
          })} 
        </View> 
      </View> 
    </SafeAreaView> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container1: { 
    flex: 1, 
    marginTop:30,
    alignItems: 'center', 
   // justifyContent: 'center', 
  }, 
  scrollContainer: { 
    height:300, 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
  card: { 
    flex: 1, 
    marginVertical: 4, 
    marginHorizontal: 16, 
    borderRadius: 5, 
    overflow: 'hidden', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'lightblue', 
  }, 
  textContainer: { 
    backgroundColor: 'rgba(0,0,0, 0.7)', 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 5, 
  }, 
  infoText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
  }, 
  normalDot: { 
    height: 8, 
    width: 8, 
    borderRadius: 4, 
    backgroundColor: 'silver', 
    marginHorizontal: 4, 
  },
  indicatorContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
  },  
}); 
 
export default App;
*/