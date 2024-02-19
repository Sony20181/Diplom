import React from "react";
import Main from "./components/Main";
import FullInfo from "./components/FullInfo";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();

export default function Navigate(){ /* описание наших экранов*/
    return <NavigationContainer> 
        <stack.Navigator>
            <stack.Screen 
            name = 'Main' //основной экран
            component={Main}
            options={{
                title: "Главная",
                headerStyle: { backgroundColor:"black", height:90, },
                headerTitleStyle: {fontWeight: "400", color:"white"}
            }}
            />
            <stack.Screen 
            name = 'FullInfo'
            component={FullInfo}
            options={{title: "Статья"}}
            />

           
        </stack.Navigator>
    </NavigationContainer>
}