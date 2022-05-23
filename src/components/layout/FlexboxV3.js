import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor='#023' lado={20}/>
            <Quadrado cor='#090' lado={30}/>
            <Quadrado cor='#009' lado={40}/>
            <Quadrado cor='#090' lado={50}/>
            <Quadrado cor='#8312ed' lado={60}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'baseline',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})