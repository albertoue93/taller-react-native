import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

class Card extends Component {
    render() {
        return(
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text>Página Notificacion</Text>
            </View>
          );
    }
}

export default Card;