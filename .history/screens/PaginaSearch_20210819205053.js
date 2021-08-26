import React, {Component} from 'react';
import { Text, View, SafeAreaView, TextInput, Platform } from 'react-native';

class PaginaSearch extends Component {
    render() {
        return(
            <SafeAreaView style={{flex:1}}>
                <View style={{flex1}}>
                    <View style={{
                        flexDirection: 'row', padding:10,
                        backgroundColor: 'white', marginHorizontal: 20,
                        shadowOffset: {width:0,height:0},
                        shadowColor: 'black',
                        shadowOpacity: 0.2,
                        elevation: 1,
                        marginTop: Platform.OS == "android" ? 30 : null
                    }}>

                    </View>
                </View>
            </SafeAreaView>
          );
    }
}

export default PaginaSearch;