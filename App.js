import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import VideoScreen from './VideoScreen';
import AudioScreen from './AudioScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TV') {
              iconName = focused ? 'tv' : 'tv-outline';
            } else if (route.name === 'Radio') {
              iconName = focused ? 'headset' : 'headset-outline';
            }


            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="TV"
          component={VideoScreen}
          options={{ title: "TV IEADI" }} />
        <Tab.Screen
          name="Radio"
          component={AudioScreen}
          options={{ title: "Radio Vale Aleluia Music" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;