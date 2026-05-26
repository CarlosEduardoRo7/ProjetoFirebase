import { View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import { database } from '../firebaseConfig';
import CardProduct from '../Components/Card';

export default function Home({ navigation }) {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProduto() {
            try {

                const querySnapshot = await getDocs(collection(database, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({ id: doc.id, ...doc.data() });
                });
                setProdutos(lista);
            } catch (error) {
                console.log("Erro ao buscar produtos: ", error);
            }
        }

        carregarProduto();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Produtos</Text>
            <View style={styles.card}>
                <FlatList
                    data={produtos}
                    renderItem={({ item }) => (
                        <CardProduct
                            nome={item.nome}                                                        
                            valor={item.valor}
                            imagem={item.imagem}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <Button
                title="Add Produto"
                color="#1900ff"
                onPress={() => navigation.navigate('AddProdutos')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        gap: 20,
        paddingTop: 40
    },
    txt: {
        fontSize: 20,
        textAlign: 'justify'
    },
    card: {
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%'
    }
});