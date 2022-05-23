import React, { Component } from 'react'
import {Text, TextInput} from 'react-native'
import estilo from '../estilo'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtdNumeros: qtde})
    }

    render(){
        return (
            <>
                <Text style={estilo.txtGrande}>
                    Gerador de Mega-Sena 
                    {this.state.qtdNumeros}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtde de Números'
                    value={this.state.qtdNumeros}
                    onChangeText={this.alterarQtdeNumero}
                />
            </>
        )
    }
}