import React, {Component} from 'react';
import { Text, View } from 'react-native';

class PaginaSearch extends Component {
    render() {
        return(
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