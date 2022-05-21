import React, {Component} from 'react';
import{StyleSheet,Text,View} from 'react-native';
import firebase from 'firebase';

export default class Logout extends Component {
  
   componentDidMount(){
       firebase.auth().signOut()
   }

  render(){
    return(
      <View style={styles.container}> 
        <Text> Logout </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  }
})