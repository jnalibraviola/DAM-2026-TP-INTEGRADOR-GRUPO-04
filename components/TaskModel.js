import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'tareas';

export const obtenerTareas = async () => {
  const datos = await AsyncStorage.getItem(KEY);
  return datos ? JSON.parse(datos) : [];
};

export const guardarTareas = async (tareas) => {
  await AsyncStorage.setItem(KEY, JSON.stringify(tareas));
};