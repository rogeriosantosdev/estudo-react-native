import React from 'react'
import { View, StyleSheet } from 'react-native'
import Filho from './components/indireta/Filho'
// import Primeiro from './components/Primeiro'
// import X, { Comp2, Comp3} from './components/Multi'
// import MinMax from './components/MinMax'
// import Aleatorio from './components/aleatorio'
// import Frag from './components/Frag'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
import Pai from './components/indireta/Pai'

export default () => (
    <View style={style.App}>

        <Pai/>
        {/*<MinMax min={1} max={209}/>
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
    </View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})