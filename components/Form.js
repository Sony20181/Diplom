
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({addArtical}) {

  return (
    <View style={gStyle.main}>
       <Formik initialValues={{name:'', annons:'', full: '', img:''}} onSubmit={(values, action)=>{
           addArtical(values);
           action.resetForm();
       }}>
            {(props) =>(
                <View>
                    <TextInput 
                    style = {styles.input}
                     value={props.values.name}
                     placeholder='Введите название' 
                     onChangeText={props.handleChange('name')} />
                     <TextInput 
                      style = {styles.input}
                     value={props.values.annons}
                     multiline
                     placeholder='Введите анонс' 
                     onChangeText={props.handleChange('annons')} />
                     <TextInput 
                      style = {styles.input}
                     value={props.values.full}
                     multiline 
                     placeholder='Введите статью' 
                     onChangeText={props.handleChange('full')} />
                     <TextInput 
                      style = {styles.input}
                     value={props.values.img}
                     placeholder='Введите фото' 
                     onChangeText={props.handleChange('img')} />
                     <Button title='Добавить' onPress={props.handleSubmit}/>
                </View>            
            )}
       </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 2,
        marginTop:20,
        padding:15,
        borderColor:"black",
        borderRadius:5,
        marginBottom:20,
    }
});
