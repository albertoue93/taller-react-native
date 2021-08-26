import React, {Component} from 'react';
import { Text, View } from 'react-native';

class PaginaHome extends Component {
    render() {
        return(
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text>Página Principal</Text>
            </View>
          );
    }
}

export default PaginaHome;