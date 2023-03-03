import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Scanner from './Scanner';
import Qrscanner from './Qrscanner';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Login}
        options={{headerShown: false}}
        
      />
      <Stack.Screen name="Scanner"
       options={{headerShown: false}}
       component={Scanner} />
       <Stack.Screen name="qr"
       options={{headerShown: false}}
       component={Qrscanner} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes
