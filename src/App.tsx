import * as React from 'react';
import SplashScreen from './screens/SplashScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import Tabs from './screens/Tabs';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Tabs"
          screenOptions={{ 
            headerShown:false
           }}
          >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App
