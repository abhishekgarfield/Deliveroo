import { View, Text ,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./screens/Homescreen";
import Restaurantscreen from "./screens/Restaurantscreen"
import {Provider} from "react-redux";
import Store from "./store";
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider Store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Homescreen} />
          <Stack.Screen name="restaurant" component={Restaurantscreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
  
