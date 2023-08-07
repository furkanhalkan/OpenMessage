import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CfButton from '../components/Button';
import CfInput from '../components/Input';

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    // Registration logic will be placed here
    console.log('User registered with information: ', username, fullName, email);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Yeni Hesap Oluştur</Text>
      <Text style={styles.subTitle}>Yeni Hesabınızı Oluşturarak OpenMessage'ye Üye Olarak Çevrimiçi Arkadaşlarınızla Sohbet Edebilirsiniz.</Text>
      <CfInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder='Kullanıcı Adı'
      />
      <CfInput
        value={fullName}
        onChangeText={text => setFullName(text)}
        placeholder='Ad ve Soyad'
      />
      <CfInput
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder='E-Posta Adresi'
      />
      <CfButton 
        onPress={handleRegister} 
        buttonText="Kaydol"
        disabled={!(username && fullName && email)} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  headerText: {
    color: '#221F60',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  subTitle:{
    color:'#918FB7',
    textAlign: 'center',
    marginBottom:20,
    fontSize:14
  }
});

export default RegisterScreen;
