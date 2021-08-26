import React, { Component } from 'react';
import { Text, View, SafeAreaView, TextInput, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
class PaginaSearch extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row', padding: 10,
                        backgroundColor: 'white', marginHorizontal: 20,
                        shadowOffset: { width: 0, height: 0 },
                        shadowColor: 'black',
                        shadowOpacity: 0.2,
                        elevation: 1,
                        marginTop: Platform.OS ==  'android' ? 30 : null
                    }}>
                        <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="¿Que desea Buscar?"
                            placeholderTextColor="gray"
                            style={{ flex: 1, fontSize: '700', backgroundColor: 'white' }} />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default PaginaSearch;