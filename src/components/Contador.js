import React, { useState, Component } from 'react'
import {Text, Button, View} from 'react-native'
import estilo from './estilo'

export default props => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(props.inicial)
    
    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)

    function executar(){
        console.warn('AAAAAAAAAAAAA')
    }

    return(
        <>
            <Text style={estilo.txtGrande}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
            <Button
        title="Executar #03!"
        onPress={() => {
          console.warn('Exec #03!!!');
        }}
      />
        </>
    )
}