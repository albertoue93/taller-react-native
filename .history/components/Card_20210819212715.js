import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';

class Card extends Component {
    render() {
        return(
            <View style={{height:130,width:375,marginLeft:20,borderRadius:0.5}}>
                <View style={{flex:2}}>
                    <Image source={require("../assets/a.png")} style={{
                    flex:1,width:null,height:null,resizeMode:'cover'
                    }}/>
                </View>
                <View style={{flex:1, paddingLeft:10,paddingTop:10}}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
          );
    }
}

export default Card;