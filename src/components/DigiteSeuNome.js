import React, {useState} from 'react'
import { View, TextInput, Text } from 'react-native'
import estilo from './estilo'
export default props => {
    const[ nome, setNome ] = useState('Teste')
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder='Digite seu nome'
                value={nome} //Se o valor for nulo seria um componente não controlado
                onChangeText={nome=> setNome(nome)}
            />
        </View>
    )
}