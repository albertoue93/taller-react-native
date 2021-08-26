import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Animated, Dimensions, Image, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import plus from './assets/plus.png';

import { FontAwesome5 } from '@expo/vector-icons';
import { userRef } from 'react';
import { white } from 'ansi-colors';

export default function App() {

  const tabOffsetValue = userRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer>
      <Tab.Navigator TabBarOption={{
        showLabel: false,
        style: {
          backgroundColor: 'white',
          position: 'absolute',
        }
      }}/>
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
