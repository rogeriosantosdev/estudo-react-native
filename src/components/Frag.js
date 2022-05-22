import React, {Fragment} from 'react'
import {View, Text} from 'react-native'
import estilo from './estilo'


export default props => (
    <Fragment>
        <Text style={estilo.txtGrande}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </Fragment>
)