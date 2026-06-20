import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect } from 'react';


export default function HomeScreen({ navigation }) {

const [tareas, setTareas] = useState([]);

useEffect(() => {
  const guardadas = localStorage.getItem("tareas");

  if (guardadas) {
    setTareas(JSON.parse(guardadas));
  }
}, []);

    return (
        <View>


            <Text>Home Screen</Text>



            <Button
                title="creacion de tarea"
                onPress={() => {
                navigation.navigate('AddTaskScreen');
                }}
            />

            {tareas.map((tarea, index) => (
                <Text key={index}>{tarea.texto}</Text>
            ))}
        </View>
    );
}

