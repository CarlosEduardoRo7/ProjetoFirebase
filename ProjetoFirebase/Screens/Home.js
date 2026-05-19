import {View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Database } from 'firebase/database';


export default function Home({ navigation }) {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProduto(){

            try {
               const querySnapshot = await getDocs(collection(database, 'produtos'))
               const lista = []
               querySnapshot.forEach((doc) => {
                lista.push({id: doc.id, ...doc.data()})
               })
               setProdutos(lista);

            } catch (error) {
                
            }
        }
    })

    return (

        <View style={styles.container}>

            <Text style={styles.txt}>Nome</Text>
            <FlatList
            data={produtos}
            renderItem={([item]) => ()} 
            />
            <Button title="Add Produto" color="#1900ffff"
            onPress={() => navigation.navigate('AddProdutos')}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
        gap: 20
    },
    txt: {
        fontSize: 20,
        textAlign: 'justify'
    },
    img: {
        width: 200,
        height: 200
    },
    card: {
        alignItems: 'center',

    },
    row:{
        
    padding: 10,
    gap: 43,
    flexDirection: 'row',
    justifyContent: 'space-around',
    }
})