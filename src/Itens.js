import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import axios from 'axios'

export default class Itens extends Component {

  render(){
    return (
     <Text style={Estilo.teste}>Itens</Text>
    )
  }
}

const Estilo = StyleSheet.create({
    teste: {
      fontSize: 50
    }
  })