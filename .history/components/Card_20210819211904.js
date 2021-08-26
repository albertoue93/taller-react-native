import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

class Card extends Component {
    render() {
        return(
            <View style={{height:130,width:375,marginLeft:20,borderRadius:0.5}}>
              <Text>Página Notificacion</Text>
            </View>
          );
    }
}

export default Card;