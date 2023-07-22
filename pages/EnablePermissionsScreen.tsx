// /pages/EnablePermissionsScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { checkNotifications, requestNotifications } from 'react-native-permissions';
import CfButton from '../components/Button';

const EnablePermissionsScreen = ({ navigation }: { navigation: any }) => {
  const handleButtonPress = async () => {
    const permissions = await checkNotifications();

    if (permissions.status === 'denied') {
      requestNotifications(['alert', 'sound']).then(({status, settings}) => {
        if (status === 'granted') {
          navigation.navigate('YourNextScreen');
        } else {
          Alert.alert('İzin Verilmedi', 'Bu uygulamanın çalışması için izinlerin verilmesi gerekmektedir.');
        }
      });
    } else {
      navigation.navigate('PhoneVerification');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>İzinleri Etkinleştir</Text>
      <Image
        style={styles.logo}
        source={require('../assets/notification.gif')}
      />
      <CfButton onPress={handleButtonPress} buttonText="Devam Et" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'black'
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
    color: 'white'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 32,
  },
});

export default EnablePermissionsScreen;
