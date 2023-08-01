// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './pages/WelcomeScreen';
import EnablePermissionsScreen from './pages/EnablePermissionsScreen';
import PhoneVerificationScreen from './pages/PhoneVerificationScreen';
import CodeVerificationScreen from './pages/CodeVerificationScreen';
import RegisterScreen from './pages/RegisterScreen';
import HomeScreen from './pages/HomeScreen';
import ChatScreen from './pages/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
      <Stack.Screen 
          name="EnablePermissions" 
          component={EnablePermissionsScreen} 
          options={{ headerShown: false }}
        />

        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CodeVerification" component={CodeVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
