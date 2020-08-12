import React, {Component} from 'react';
 import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
 import axios from "axios";
 import PropTypes from 'prop-types';

 class Changer extends Component {
     constructor(props){
         super(props);

         this.state = {
             tl : " ",
             usd : " ",
             cad : " ",
             jpy : " ",
             eur : " ",
             input : " ",
             rates : []
         }
         this.getRates = this.getRates.bind(this);
     }
     getRates(){

        axios.get('http://data.fixer.io/api/latest?access_key=a8973e130916ee47a2bcb07d3c403f69&symbols=EUR,USD,TRY,CAD,JPY').then(response => {
           const rates  = response.data.rates;
           console.log("rates", rates['TRY'])
           
           this.setState({
               rates: rates
           })
       })
     }
     componentDidMount(){
       this.getRates();
     }
     
     render(){
         const {changerWrapper, inputStyle, textStyle} =styles;
         const {input, tl, usd, cad, jpy, eur, rates} = this.state;
         return(
             <View style={changerWrapper}>
                 <TextInput placeholder='Enter euro value'
                                style = {inputStyle} 
                                placeholderTextColor="#000"
                                keyboardType = 'numeric'
                                onChangeText = {(text) =>{                                       
                                console.log("text", text)
                                this.setState({
                                        tl  :(text*rates['TRY']),
                                        usd :(text*rates['USD']),
                                        cad :(text*rates['CAD']),
                                        jpy :(text*rates['JPY']),
                                        eur :(text*rates['EUR']),
                                    })
                                   
                                }} />

                <Text style ={textStyle}>TRY: {tl} </Text>
                <Text style ={textStyle}>USD: {usd} </Text>
                <Text style ={textStyle}>CAD: {cad} </Text>
                <Text style ={textStyle}>JPY: {jpy} </Text>
                <Text style ={textStyle}>EUR: {eur} </Text>
               
             </View>
         )
     }
 }

const styles = StyleSheet.create({
    changerWrapper:{
        paddingTop:20,
        paddingLeft:20,
       
    },
    inputStyle:{
        textAlign:'center',
        fontSize:20,
        color: '#000'
    },
    textStyle:{
        padding:10
    }
})

 export default Changer;