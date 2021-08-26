import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PaginaConfig extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Página Configuracion</Text>
      </View>
    );
  }
}

export default PaginaConfig;