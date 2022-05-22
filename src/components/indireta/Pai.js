import React,{ useState } from 'react'
import { Text } from 'react-native'
import estilo from '../estilo'
import Filho from './Filho'


export default props => {
    const [num, setNum] = useState(0)
    const [inicio, setInicio] = useState('')

    function exibirValor(numero, inicio){
        setNum(numero)
        setInicio(inicio)
    }

    return (
        <>
            <Text style={estilo.txtGrande}>{inicio}{num}</Text>
            <Filho min = {1} 
                max = {60}
                funcao={exibirValor}
            />
        </>
    )
}