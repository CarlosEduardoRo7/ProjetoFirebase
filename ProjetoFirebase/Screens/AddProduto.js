import {View, Text, TextInput, Button} from 'react-native';
import { database } from '../firebaseConfig';
import {useState} from 'react';

import { addDoc, collection } from 'firebase/firestore';

export default function AddProdutos() {

    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const CadastrarProdutos = async () => {
        try {
            await addDoc(collection(database, 'produtos'),{
                nome,
                valor: parseFloat(valor),
                imagem
            }
        )

            alert('Produto Cadastrado com sucesso!')

        } catch (error) {
            console.log('erro ao cadastrar', error)
        }
    }

    return(
        <View>

            <Text>ADICIONAR PRODUTOS</Text>
            <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            />

            <TextInput
            placeholder="Valor"
            value={valor}
            onChangeText={setValor}
            />

            <TextInput
            placeholder="URL do imagem"
            value={imagem}
            onChangeText={setImagem}
            />

            <Button title="Cadastrar Produtos"
                color="#3e6925ff"
                onPress={CadastrarProdutos}
            />

        </View>
    )
}