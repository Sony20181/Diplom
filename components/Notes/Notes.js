import { Text, TextInput,TouchableOpacity, StyleSheet,FlatList, View} from "react-native";
import { gStyle } from "../../styles/style";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, completeTodo } from "../Store/NotesSlice";

import Checkbox from 'expo-checkbox';

export default function Notes() {
 
    const[text,setText] = useState('');
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch();

    const addTask = () => {
        if (text.trim().length){
            dispatch(addTodo({text}))
            setText('')
        }
    };

    const [isChecked, setChecked] = useState(false);
    return (
        <LinearGradient   
            colors={['#a1ffce', '#ffffff']}
            style={gStyle.main} 
        >
            <View style={styles.form} >
                <TextInput
                    style={styles.input}
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={addTask}

                />
                <TouchableOpacity onPress={addTask} style={styles.button}>
                    <Text style={styles.button}>Добавить</Text>
                </TouchableOpacity>
            </View>
            

            <FlatList data = {todos} renderItem={({item} )=> (
                <View  style={styles.Text} >
                    <Checkbox
                        value={item.completed}
                        onValueChange={() => dispatch(completeTodo(item.id))}
                    />
                    <Text style={item.completed ? styles.completedText : styles.NocompletedText}>{item.text}</Text>
                    <Text style={styles.Delete} onPress={()=> dispatch(removeTodo(item.id))}>&times;</Text>
                </View>
                
            )}/>
        
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    form: {
        margin:"5%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    input: {
        width:"60%",
        borderRadius:5,
        borderWidth: 1,
        padding: 10,
        marginRight:"5%"
    },
    Text:{
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
       justifyContent:"flex-start",
        margin:5,
        borderBottomWidth:1,
        fontSize:16,
    },
    completedText: {
        padding:10,
        fontSize:16,
        textDecorationLine: "line-through",
      },
    NocompletedText: {
        fontSize:16,
        padding:10,
      },
    button:{
        padding:5,
        alignItems: 'center',
        backgroundColor: 'black',
        color:"white",
        borderRadius:5,
    },
    buttonText:{
        alignItems: 'center',
        color:"#fff",
        fontSize: 16,
    },
    Delete:{
        fontSize: 24,
    }

  });
  