import { View, Text ,StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from "./screens/Homescreen";
import Restaurantscreen from "./screens/Restaurantscreen"
import { Provider } from "react-redux";
import { store } from "./store";
import Basketscreen from "./screens/Basketscreen";
import Prepairingorderscreen from "./screens/preparingorderscreen"
import Finalscreen from "./screens/final";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Homescreen} />
          <Stack.Screen name="restaurant" component={Restaurantscreen} />
          <Stack.Screen name="basketscreen" component={Basketscreen} 
          options={{presentation:"modal", headerShown:false}}/>
          <Stack.Screen name="prepairingorder" component={Prepairingorderscreen}
          options={{headerShown:false,presentation:"fullScreenModal"}}/>
          <Stack.Screen name="final" component={Finalscreen}
          options={{headerShown:false,presentation:"fullScreenModal"}}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
  
