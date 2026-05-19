import { View, Text, Image, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native';
import { useState } from 'react';
import { firebaseConfig } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const auth = getAuth();

    const CriarConta = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed up
                console.log('conta criada!')
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                console.log(error)
                Alert.alert(error.message)
            });
    }

    const EntrarConta = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigation.navigate("Home")
                // ...
            })
            .catch((error) => {
                console.log(error)
                Alert.alert(error.message)
            });
    }

    return (

        <View style={styles.container}>

            <Image style={styles.imagem}
                source={require('../sources/avatar.jpg')} />

            <Text style={styles.txt_title}>

                Faça seu <Text style={styles.txt_title_vermelho}>
                    Login</Text>:</Text>

            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor={'#535353ff'}
                value={email}
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder='Senha'
                placeholderTextColor={'#535353ff'}
                value={senha}
                onChangeText={setSenha}
            />

            <View style={styles.row}>

                <Button title="Entrar"
                    color="#ff0000ff"
                    onPress={EntrarConta}/>

                <Button title="Criar Conta"
                    color="#ff0000ff"
                    onPress={CriarConta}
                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffffff',
    },
    view_image: {
        flexDirection: 'row',
        alignContent: 'space-around',
        gap: 30,
    },
    imagem: {
        height: 180,
        width: 180,
        borderRadius: 50,
    },
    txt_title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000ff',
    },
    txt_title_vermelho: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ff0000ff'
    },
    input: {
        height: 40,
        width: 180,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    row: {

        padding: 10,
        gap: 43,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})