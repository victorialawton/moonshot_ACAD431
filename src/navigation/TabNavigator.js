import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import TrackingScreen from '../screens/TrackingScreen';
import InsightsScreen from '../screens/InsightsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen 
        name="Tracking" 
        component={TrackingScreen}
        options={{
          tabBarLabel: 'Tracking',
        }}
      />
      <Tab.Screen 
        name="Insights" 
        component={InsightsScreen}
        options={{
          tabBarLabel: 'Insights',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator; 