import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
class PaginaSearch extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Text>Página Buscar</Text>
              </View>
        );
    }
}

export default PaginaSearch;