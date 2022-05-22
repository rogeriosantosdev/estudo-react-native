import React from 'react'
import { Text } from 'react-native'
import estilo from './estilo'

export default (props) => {
    return (
        <Text style={estilo.txtGrande}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>
    )
}