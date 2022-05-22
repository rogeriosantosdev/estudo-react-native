import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
// import Filho from './components/indireta/Filho'
// import Primeiro from './components/Primeiro'
// import X, { Comp2, Comp3} from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/aleatorio'
// import Frag from './components/Frag'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/indireta/Pai'
// import ContadorV2 from './components/contador/ContadorV2'
// import Diferenciar from './components/Diferenciar'
import ParImpar from './components/ParImpar'


export default () => (
    <SafeAreaView style={style.App}>

        <ParImpar num={2}/>

        {/*<MinMax min={1} max={209}/>
        <Diferenciar/>
        <ContadorV2/>
        <Pai/>
        <Contador inicial={100} passo={13}/>
        <Botao/>
        <Frag principal="Cadastro" secundario="Tela de Cadastro do Produto"/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <Aleatorio min={1} max={60}/>
        <X/>
        <Comp2/>
        <Comp3/>
        <Primeiro/> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})