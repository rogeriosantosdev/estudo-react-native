import React, { Component } from 'react'
import {View, Text, TextInput, Button} from 'react-native'
import estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({qtdNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo 
    }

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qtdNumeros)
    //     .fill()
    //     .reduce(nums =>[...nums, this.gerarNumeroNaoContido(nums)], 
    //         [])
    //     .sort((a,b) => a - b)
    //     this.setState({numeros})
    // }

    gerarNumeros = () => {
        const { qtdNumeros } = this.state
        const numeros = []

        for(let i = 0; i < qtdNumeros; i++){
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a,b) => a - b)
        this.setState({numeros})
    }

    exibirNumeros = () =>{
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero num={num}/>
        })
    }

    render(){
        return (
            <>
                <Text style={estilo.txtGrande}>
                    Gerador de Mega-Sena 
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1}}
                    placeholder='Qtde de Números'
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </View>
                
            </>
        )
    }
}