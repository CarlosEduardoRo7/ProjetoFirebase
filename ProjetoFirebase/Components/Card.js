import {View, Text, StyleSheet, Image} from 'react-native'
import { Card } from 'react-native-paper';

export default function CardProduct({ nome, valor, imagem }) {
    return (
        <View>
            <Card>
                <Card.Cover source={{ uri: imagem }} />
                <Card.Content>
                    <Text>{nome}</Text>
                    <Text>R$ {valor}</Text>
                </Card.Content>
            </Card>
        </View>
    );
}