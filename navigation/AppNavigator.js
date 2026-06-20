import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from '../screens/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function navigation(){
return (

    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
        />
        <Stack.Screen
            name="AddTaskScreen"
            component={AddTaskScreen}
        />
    </Stack.Navigator>


    </NavigationContainer>

 );

}