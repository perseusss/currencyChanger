import React, {Component} from 'react';
import { StyleSheet , Text , View} from 'react-native';

export default class Header extends Component{
    render(){
      return(
      <View style={styles.header}>
        <Text style={styles.headerText}>Currency Changer</Text> 
      </View>)
    }
    
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#788B91'
      },
      headerText: {
          color:'cyan',
        fontSize: 30,
        textAlign: 'center'
      }
})