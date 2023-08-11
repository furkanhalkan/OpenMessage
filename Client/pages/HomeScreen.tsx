import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import MessagesScreen from '../pages/Home/MessageSceen';
import FriendsScreen from '../pages/Home/FriendsScreen';
import SettingsScreen from '../pages/Home/SettingsScreen';
import ProfileScreen from '../pages/Home/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home'; 

            if (route.name === 'Messages') {
              iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            } else if (route.name === 'Friends') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4B44D4',
          tabBarInactiveTintColor: '#918FB7',
          tabBarStyle: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingBottom:7,
            paddingTop:7
          },
        })}
      >
        <Tab.Screen name="Messages" component={MessagesScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Friends" component={FriendsScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </SafeAreaView>
  );
}
