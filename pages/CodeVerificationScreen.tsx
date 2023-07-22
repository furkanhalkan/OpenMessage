import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CfButton from '../components/Button';
import CfInput from '../components/Input';
import {RootStackParamList } from '../types';
import { StackScreenProps } from '@react-navigation/stack';


type Props = StackScreenProps<RootStackParamList, 'CodeVerification'>;


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

  return (
    <View style={styles.container}>
      <Text style={styles.instructionsText}>Doğrulama kodunuzu girin</Text>

      <CfInput 
        value={code} 
        placeholder='Doğrulama Kodunuzu Yazınız' 
        onChangeText={text => setCode(text)} 
        keyboardType='numeric'
      />
      <CfButton onPress={handleCodeVerification} buttonText="Doğrula" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#000'
    },
    instructionsText: {
      color: '#fff', 
      fontSize: 15, 
      marginBottom: 20
    },
  });

export default CodeVerificationScreen;
