import { View, Text, StyleSheet, Image, Button } from 'react-native'
import { Card } from 'react-native-paper';

export default function CardProduct({ nome, valor, imagem, Excluir, Editar }) {
    return (
        <View style={styles.botoes}>
            <Card style={styles.card}>
                <Card.Cover source={{ uri: imagem }} style={styles.imagem} />
                <Card.Content>
                    <Text style={styles.txt}>{nome}</Text>
                    <Text style={styles.txt}>R$ {valor}</Text>
                </Card.Content>
                <View style={styles.botoes}>
                    <Button title="Editar" onPress={Editar} color="#41802aff" />
                    <Button title="Excluir" onPress={Excluir} color="#ff0000ff" />
                </View>
            </Card>
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
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        paddingVertical: 10
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
    },
    imagem: {
        height: 250,
        width: 250,
        borderRadius: 50
    }
});