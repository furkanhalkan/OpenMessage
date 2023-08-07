import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CfButton from '../components/Button';
import CfInput from '../components/Input';
import {CodeVerificationScreenNavigationProp, CodeVerificationScreenRouteProp } from '../types';


interface Props {
  navigation: CodeVerificationScreenNavigationProp;
  route: CodeVerificationScreenRouteProp;
}


function CodeVerificationScreen({ route, navigation }: Props) {
  const [code, setCode] = useState('');
  const { expectedCode } = route.params;

  const handleCodeVerification = () => {
    if (code === expectedCode) 
    {
      Alert.alert('Bilgi', 'Telefon numarası doğrulandı!');
      navigation.navigate('Register');
    } 
    else 
    {
      Alert.alert('Hata', 'Geçersiz doğrulama kodu.');
    }
  };

  const resendSMS = () => {
    // SMS gönderme işlevini burada tanımlayabilirsiniz.
    Alert.alert('Bilgi', 'SMS tekrar gönderildi!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Harika! Doğrulama Kodunu Gir</Text>
      <Text style={styles.instructionsText}>SMS ile gönderilen doğrulama kodunu girerek hesabını aktifleştir. Kod gelmediyse SMS kodu tekrar gönder’e tıkla!</Text>

      <CfInput 
        value={code} 
        placeholder='Doğrulama Kodunuzu Yazınız' 
        onChangeText={text => setCode(text)} 
        keyboardType='numeric'
      />
      <Text style={styles.resendText} onPress={resendSMS}> SMS Kodu tekrar gönder</Text>
      <CfButton onPress={handleCodeVerification} buttonText="Doğrula" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#fff',
      padding:16
    },
    instructionsText: {
      color: '#918FB7', 
      fontSize: 15, 
      marginBottom: 20,
      textAlign: 'center'
    },
    titleText:{
      color:'#221F60',
      textAlign: 'center',
      fontSize:26,
      fontWeight: 'bold',
      marginBottom:20
    },
    resendText:{
      marginBottom:20,
      marginTop:20,
      color:'#918FB7',
      textAlign: 'center',
      fontSize:13
    }
  });

export default CodeVerificationScreen;
