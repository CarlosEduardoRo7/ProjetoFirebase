import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

import { database } from '../firebaseConfig';
import CardProduct from '../Components/Card';
import { ScrollView } from 'react-native-web';

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

    async function ExcluirProdutos(id) {
        try {
            await deleteDoc(doc(database, 'produtos', id))
            setProdutos(prev => prev.filter(p => p.id !== id));
        } catch (error) {
            Alert.alert('error, não foi possível deletar o produto')
            console.log(error)
        }
    }

    function EditarProdutos(produto) {
        navigation.navigate('EditProduct', { produto })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Produtos</Text>
            
            <Button
                title="Add Produto"
                color="#1900ff"
                onPress={() => navigation.navigate('AddProdutos')}
            />

            <View style={styles.card}>
                <FlatList
                    data={produtos}
                    renderItem={({ item }) => (
                        <CardProduct
                            nome={item.nome}
                            valor={item.valor}
                            imagem={item.imagem}
                            Excluir={() => ExcluirProdutos(item.id)}
                            Editar={() => EditarProdutos(item)}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

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
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e1e1e1',
        padding: 16,
        marginVertical: 6,
        width: '100%',
    }
});