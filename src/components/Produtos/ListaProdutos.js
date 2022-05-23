import React from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

export default props => {
    function lista(){
        return produtos.map(p=>{
            return <Text key={p.id}>{p.id}) {p.nome} tem ${p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={estilo.txtGrande}> 
                Lista de Produtos
            </Text>
            {lista()}
        </>
    )
}