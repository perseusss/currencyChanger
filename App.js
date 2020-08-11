import React, {Component} from 'react';
 import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
 import Header from './src/components/header';
import Changer from './src/components/Changer';


 export default class App extends Component{
   render(){
     return(
       <View style = {styles.container}>
         <Header headerText='currency converter'/>
         <Changer />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container:{
     flex:1,
      backgroundColor:'white'
   }
 })