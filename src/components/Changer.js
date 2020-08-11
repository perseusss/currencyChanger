import React, {Component} from 'react';
 import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
 import axios from "axios";


 class Changer extends Component{
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
           this.setState({
               rates:rates
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
                                keyboardType = 'numeric'
                                onChange = {(text) =>{
                                    
                                    const i = parseFloat(text.target.value);
                                    
                                    this.setState({
                                        input :text,
                                        tl  :(i*rates['TRY']),
                                        usd :(i*rates['USD']),
                                        cad :(i*rates['CAD']),
                                        jpy :(i*rates['JPY']),
                                        eur :(i*rates['EUR']),
                                        
                                    })
                                   
                                }}
                                value={input} />

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
        fontSize:20
    },
    textStyle:{
        padding:10
    }
})

 export default Changer;