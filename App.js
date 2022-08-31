import { View, Text ,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./screens/Homescreen";
import Restaurantscreen from "./screens/Restaurantscreen"
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Homescreen} />
        <Stack.Screen name="restaurant" component={Restaurantscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
