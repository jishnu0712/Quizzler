import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
}

export default MyStack