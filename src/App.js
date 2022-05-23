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
// import ParImpar from './components/ParImpar'
// import Pai from './components/relacao/Pai'
// import Filho from './components/relacao/Filho'
// import UsuarioLogado from './components/UsuarioLogado'
// import ListaProdutos from './components/Produtos/ListaProdutos'
import ListaProdutosV2 from './components/Produtos/ListaProdutosV2'

export default () => (
    <SafeAreaView style={style.App}>
        
        <ListaProdutosV2/>

        {/*<MinMax min={1} max={209}/>
        <ListaProdutos/>
        <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
        <UsuarioLogado usuario={{nome: 'Ana'}}/>
        <UsuarioLogado usuario={{email: 'ka@gui.com'}}/>
        <UsuarioLogado usuario={{}}/>
        <UsuarioLogado usuario={null}/>
        <Pai>
            <Filho nome="Bia" sobrenome="Arruda"/>
            <Filho nome="Carlos" sobrenome="Arruda"/>
        </Pai>

        <Pai>
            <Filho nome="Ana" sobrenome="Silva"/>
            <Filho nome="Julia" sobrenome="Silva"/>
            <Filho nome="Gui" sobrenome="Silva"/>
            <Filho nome="Antonio" sobrenome="Silva"/>
        </Pai>
        <ParImpar num={2}/>
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