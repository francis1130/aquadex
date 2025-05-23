import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddFishScreen from '../screens/AddFishScreen';
import FishDetailsScreen from '../screens/FishDetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0077b6' }, headerTintColor: '#fff' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddFish" component={AddFishScreen} />
        <Stack.Screen name="FishDetails" component={FishDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
