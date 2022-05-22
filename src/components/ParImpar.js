import React from 'react'
import { View, Text } from 'react-native'
import estilo from './estilo'
export default ({num = 0 })=> {
        return (
        <View>
            <Text style={estilo.txtGrande}>O resultado é:</Text>
            { num % 2 === 0
                ?   <Text style={estilo.txtGrande}>Par</Text>
                :   <Text style={estilo.txtGrande}>Impar</Text>
            }
            
        </View>
    )
}