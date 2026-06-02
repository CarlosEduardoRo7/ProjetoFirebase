import {View, Text, TextInput, Button, Alert} from 'react-native';
import {useState} from 'react';
import {database} from '../firebaseConfig';
import {doc, updateDoc} from 'firebase/firestore';

export default function EditProduct({ navigation, route }) {

    const {produto} = route.params;
    const [nome, setNome] = useState(produto.nome);
    const [valor, setValor] = useState(String(produto.valor));
    const [imagem, setImagem] = useState(produto.imagem);

    async function Salvar() {

        if (!nome || !valor || !imagem){
            Alert.alert("Preencha todos os campos!")
            return;
        }
        try {
            const produtoRef = doc(database, 'produtos', produto.id)
            await updateDoc(produtoRef, {
                nome: nome,
                valor: parseFloat(valor),
                imagem: imagem
            })
            Alert.alert('Produto atualizado com sucesso!')
        } catch (error) {
            console.log('erro ao atualizar', error)
        }
    }

    return(
        <View>

            <Text>EDITAR PRODUTO</Text>
            <TextInput placeholder="Nome" value={nome} onChangeText={setNome}/>

            <TextInput placeholder="Valor" value={valor} onChangeText={setValor}/>

            <TextInput placeholder="URL da imagem" value={imagem} onChangeText={setImagem}/>

            <Button title="Salvar Produto" color="#3e6925ff" onPress={Salvar}/>
            <Button title="Voltar" color="#3e6925ff" onPress={() => navigation.navigate('Home')} />

        </View>
    )
}