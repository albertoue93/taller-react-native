import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import plus from './assets/plus.png';

import { FontAwesome5 } from '@expo/vector-icons';
import { userRef } from 'react';

export default function App() {

  const tabOffsetValue = userRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator TabBarOption={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal,
          bright: 60,
          borderRadiues: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            with:10,
            height:10
          },
          paddingHorizontal: 29,
        }
      }}>
        <Tab.Screen name={Home} component={PaginaHome} optioms={{
          tabBarIcon: ({ focused})=>(
            <View>
              
            </View>
          )
        }}>

        </Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
