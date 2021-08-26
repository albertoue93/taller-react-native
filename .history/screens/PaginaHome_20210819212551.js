import React, {Component} from 'react';
import { Text, View, ScrollView, FlatList, ScrollView } from 'react-native';

class PaginaHome extends Component {

    state = {
        data:[]
    }

    async componentWillMount(){
        await this.retornarEmp()
    }

    async retornarEmp(){
        const res = await fetch('https://zm3x36i1inftpll-listica.adb.us-phoenix-1.oraclecloudapps.com/ords/smart_log/smart/empleados')
        const data = await res.json()

        this.setState({ data })
    }

    render() {
        const { data } = this.state;
        console.log(data);
        return(
            <View style={{
              flex:1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
                <ScrollView style={{ width:"100%",height:"75%"}} contentContainerStyle={{flexWrap:"wrap",justifyContent:"center"}}>
                    <FlatList data={data.items} 
                    keyExtractor={{id},index => id}
                    renderItem={({item }) => (
                        <Text>{item,nombre}</Text>
                    )}/>

                </ScrollView>
            </View>
          );
    }
}

export default PaginaHome;