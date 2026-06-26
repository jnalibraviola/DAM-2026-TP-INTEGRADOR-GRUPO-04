import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles/Styles';


export default function HomeScreen({ navigation }) {

const [tareas, setTareas] = useState([]);

useEffect(() => {
  const guardadas = localStorage.getItem("tareas");

  if (guardadas) {
    setTareas(JSON.parse(guardadas));
  }
}, []);
const eliminarTarea = (index) => {
  const nuevasTareas = tareas.filter((_, i) => i !== index);

  setTareas(nuevasTareas);
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
};

const completarTarea = (index) => {
  const nuevasTareas = [...tareas];

  nuevasTareas[index].completada = !nuevasTareas[index].completada;

  setTareas(nuevasTareas);
  localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
};

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
            <View
                    key={index}
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 5,
                    }}
            >
                <Text
                style={{
                        flex: 1,
                        textDecorationLine: tarea.completada
                            ? "line-through"
                            : "none",
                    }}
                >
                {tarea.texto}
                </Text>

                <Button
                title={tarea.completada ? "Desmarcar" : "Completar"}
                onPress={() => completarTarea(index)}
                />

                <Button
                title="Eliminar"
                onPress={() => eliminarTarea(index)}
                />
            </View>
            ))}

        </View>
    );
}

