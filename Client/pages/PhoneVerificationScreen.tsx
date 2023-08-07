import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import CfButton from '../components/Button';
import CfInput from '../components/Input';
import { PhoneVerificationScreenNavigationProp } from '../types';



interface Props {
  navigation: PhoneVerificationScreenNavigationProp;
}

function PhoneVerificationScreen({ navigation }: Props) {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneVerification = () => {
    const phoneRegex = /^\+[1-9]{1}[0-9]{3,14}$/;
    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Hata', 'Geçersiz telefon numarası.');
      return;
    }

    const expectedCode = "4950";

    Alert.alert('Bilgi', '4950 doğrulama kodunuz SMS ile gönderildi.');
    
    // 'CodeVerificationScreen' ekranına yönlendirme yapılıyor
    //navigation.navigate('CodeVerificationScreen', { expectedCode: '4950' });
    navigation.navigate('CodeVerification', { expectedCode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>OpenMessage'ye Hoş Geldiniz.</Text>
      <Text style={styles.instructionsText}>Hesabını oluşturmak veya varolan hesabına giriş yapmak için telefon numaranı gir.</Text>
      
      <CfInput value={phoneNumber} 
      placeholder='Telefon Numaranızı Yazınız' 
      onChangeText={text => setPhoneNumber(text)} 
      keyboardType='phone-pad'
      />
      <CfButton onPress={handlePhoneVerification} buttonText="Devam Et" />
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
    welcomeText: {
      color: '#000', 
      fontSize: 20, 
      marginBottom: 20
    },
    instructionsText: {
      color: '#918FB7', 
      fontSize: 15, 
      marginBottom: 20,
      textAlign:'center'
    },
  });

export default PhoneVerificationScreen;
