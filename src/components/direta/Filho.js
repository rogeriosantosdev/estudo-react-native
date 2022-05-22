import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
export default props => {
    return (
        <>
            <Text style={estilo.txtGrande}>{props.b}</Text>
            <Text style={estilo.txtGrande}>{props.a}</Text>
        </>
    )
}