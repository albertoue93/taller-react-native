import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PaginaNueva extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Página Nueva</Text>
      </View>
    );
  }
}

export default PaginaNueva;