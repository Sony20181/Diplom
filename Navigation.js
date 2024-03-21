import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Main from './components/Main';
import Training from './components/Training/Training';
import Timer from './components/Timer';

import Bow from './components/Bows/Bow';
import Arrow from './components/Arrows/Arrow';
import Profile from './components/Profile/Profile';

import Statistics from './components/Statistics';
import Weather from './components/Weather/Weather';
import Notes from './components/Notes/Notes';
import ArrowInfo from './components/Arrows/ArrowInfo';
import ArrowForm from './components/Arrows/ArrowForm';
import BowForm from './components/Bows/BowForm';
import BowInfo from './components/Bows/BowInfo';
import TrainingBasicForm from './components/Training/TrainigForm/TrainingBasicForm';
import TrainingFreeForm from './components/Training/TrainigForm/TrainingFreeForm';
import TrainingInfo from './components/Training/TrainingInformation/TrainingInfo';
import DistancePickerScreen from './components/Training/TrainigForm/DistancePickerScreen';
import TrainingArrow from './components/Training/TrainigForm/TrainigArrow';
import TrainingBow from './components/Training/TrainigForm/TrainingBow';
import TargetMenu from './components/Target/TragetMenu';
import TrainingSeriesList from './components/Training/TrainingInformation/TrainingSeriesList';
import TrainingPointsList from './components/Training/TrainingInformation/TrainingPointsList';
import TrainingResult from './components/Training/TrainigResult';
import TrainingStatistic from './components/Training/TrainingStatistic';
function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Go to Root" onPress={() => navigation.navigate('Shooter')} />
      <Button
        title="Go to Root, Profile"
        onPress={() => navigation.navigate('Shooter', { screen: 'Тренировки' })}
      />
    </View>
  );
}
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Tab.Navigator useLegacyImplementation 
      activeColor="#aab9f2"
      inactiveColor="#213a91"
      barStyle={{ backgroundColor: 'black' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'Главная') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Тренировки') {
            iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
          }else if (route.name === 'Таймер') {
          iconName = focused ? 'timer' : 'timer-outline';
        }
         
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        
      })}
      >
      <Tab.Screen name="Главная" component={Main}/>
      <Tab.Screen name="Тренировки" component={Training} />
      <Tab.Screen name="Таймер" component={Timer} />
     
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Shooter" 
            component={Root}
            options={{
              title: "SHOOTER",
              headerStyle: { backgroundColor: "black", height:80 },
              headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
              headerTitleAlign: 'center',
            }} 
          />
        <Stack.Screen name="Feed" component={Feed} 
            options={{
              title: "Feed",
              headerStyle: { backgroundColor: "black", height: 80 },
              headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
              headerTitleAlign: 'center',
              headerTintColor: '#ffffff',
            }} />
        <Stack.Screen name="Главная" component={Main}
        options={{
          title: "Главная",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} />
        <Stack.Screen name="Лук" component={Bow} 
        options={{
          title: "Лук",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }}/>
        <Stack.Screen name="BowForm" component={BowForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="BowInfo" component={BowInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Стрелы" component={Arrow}
        options={{
          title: "Стрелы",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} />
        <Stack.Screen name="ArrowInfo" component={ArrowInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Профиль" component={Profile}
        options={{
          title: "Профиль",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} />
        <Stack.Screen name="Статистика" component={Statistics} 
        options={{
          title: "Статистика",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }}/>
        <Stack.Screen name="Погода" component={Weather}
        options={{
          title: "Погода",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }}
        />
         <Stack.Screen name="Заметки" component={Notes}
        options={{
          title: "Заметки",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }}
        />
        <Stack.Screen name="Свободная Тренировка" component={TrainingFreeForm}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Тренировка со стандартным раундом" component={TrainingBasicForm}
        options={{ headerShown: false }}
        />
         <Stack.Screen name="Информация о тренировке" component={TrainingInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TargetMenu" component={TargetMenu}
          options={{ headerShown: false }}
        />
      
         <Stack.Screen name="TrainingArrow" component={TrainingArrow}
        options={{
          title: "TrainingArrow",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} 
        />
        <Stack.Screen name="TrainingBow" component={TrainingBow}
        options={{
          title: "TrainingBow",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} 
        />
         <Stack.Screen name="ArrowForm" component={ArrowForm}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="TrainingSeriesList" component={TrainingSeriesList}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="TrainingPointsList" component={TrainingPointsList}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="TrainingResult" component={TrainingResult}
        options={{
          title: "TrainingArrow",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:25  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} 
        />
        <Stack.Screen name="TrainingStatistic" component={TrainingStatistic}
        options={{
          title: "Статистика по тренировке",
          headerStyle: { backgroundColor: "black", height: 80 },
          headerTitleStyle: { fontWeight: "500", color: "white", fontSize:18  },
          headerTitleAlign: 'center',
          headerTintColor: '#ffffff',
        }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

