
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { Image, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (

  <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
     <Image
        source={require('./src/assets/icon.png')}
     />
    <Text style={styles.welcomeText}>Efetue seu login</Text>
    </View>

    <View style={styles.container}>
    <TextInput
    style={styles.input}
    placehoder='E-mail'
    autoCorrect = {false} 
    ///onChangeText={()=> {}}
    />

    <TextInput
    style={styles.input}
    placehoder='Senha'
    autoCorrect = {false} 
    ///onChangeText={()=> {}}
    />

    <TouchableOpacity style={styles.btnSubmit}>
      <Text style={styles.submitText}>Entrar</Text>
    </TouchableOpacity>

    </View>

    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    background:{ 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#462579'
      },
    containerLogo:{
      flex:1,
      justifyContent:'center',
      marginLeft: 25
      

    },
    welcomeText:{
      fontSize: 30,
      marginRight:10,
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 70,
      marginBottom: 0,
      color:"#6cc6f8",
      

    },
    container:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      width: '90%'

    },

    input:{
      backgroundColor:'#FFF',
      width: '90%',
      height: 45,
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7,
      padding: 10,
    },
    btnSubmit:{
      backgroundColor: '#6cc6f8',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7,
    },
    submitText:{
      color: '#FFF',
      fontSize: 18
    }
})    