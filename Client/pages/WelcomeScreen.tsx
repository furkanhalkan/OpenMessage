// /pages/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Linking, Image, StyleSheet, StatusBar } from 'react-native';
import CfButton from '../components/Button';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        style={styles.fimage}
        source={require('../assets/images1.jpg')}
      />
      <Text style={styles.welcomeText}>
        OpenMessage'ye Hoş Geldiniz.
      </Text>
      <Text 
        style={styles.termsText}
        onPress={() => Linking.openURL('https://yourwebsite.com/termsandconditions')}
      >
        Şartlar ve Gizlilik İlkesi
      </Text>
      <CfButton onPress={() => navigation.navigate('EnablePermissions')} buttonText="Devam Et" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  fimage: {
    width: 290,
    height: 320,
    marginBottom: 32,
  },
  termsText: {
    color: 'blue',
    marginBottom: 32,
    textAlign: 'center',
  },
  welcomeText:{
    color:'#4B44D4',
    textAlign: 'center',
    fontSize:24,
    fontWeight: 'bold',
    marginBottom:64
  }
});

export default WelcomeScreen;
