import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../styles/Styles';

export default function AddTaskScreen() {
  const [texto, setTexto] = useState('');
  const [descripcion, setDescripcion] = useState("");

  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas');

    return guardadas
      ? JSON.parse(guardadas)
      : [
          { texto: 'tarea1', completada: false },
          { texto: 'tarea2', completada: false },
        ];
  });

  const agregarTarea = () => {
    if (texto.trim() === "") return;

    setTareas([
    ...tareas,
      {
        texto,
        descripcion,
        completada: false,
      },
    ]);

    setTexto("");
    setDescripcion("");
  };

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <View>

      <TextInput
        placeholder="Escribí tu tarea"
        value={texto}
        onChangeText={setTexto}
        style={{
          borderWidth: 2,
          marginBottom: 10,
          padding: 10,
        }}
      />

      <TextInput
        placeholder="Descripción de la tarea"
        value={descripcion}
        onChangeText={setDescripcion}
        style={{
          borderWidth: 2,
          marginBottom: 10,
          padding: 10,
        }}
      />

      <TouchableOpacity
        style={styles.card}
        onPress={agregarTarea}
      >
        <Text>Agregar tarea</Text>
      </TouchableOpacity>

    </View>
  );
}