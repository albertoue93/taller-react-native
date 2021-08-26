import React, {Component} from 'react';
import { Text, View, ScrollVie, FlatList } from 'react-native';

class PaginaHome extends Component {

    state = {
        data:[]
    }

    async retornarEmp(){
        const res = await fetch('https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/smart_log/smart/empleados')
        const data = await res.json()

        this.setState({ data })
    }

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