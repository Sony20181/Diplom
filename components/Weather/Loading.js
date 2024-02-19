import React from 'react'

import { StyleSheet,View, Text } from 'react-native'

export default function Loading(){
    return(
        <View style = {styles.Loading}>
            <Text style = {styles.LoadingText} >Загрузка...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Loading: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"black",
    },
    LoadingText: {
        fontSize:20,
        textAlign:"center",
        color:"white",
    }

})