import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type ProfileType = {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
};

const ProfileScreen: React.FC = () => {
  const profile: ProfileType = {
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    bio: 'This is an example bio. You can put anything you like here.',
    avatarUrl: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg',
  };

  const menuOptions = [
    { title: 'Engellenen Kişiler', iconName: 'people' },
    { title: 'Gizlilik Tercihlerim', iconName: 'shield' },
    { title: 'Hesabı Sil', iconName: 'trash' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      
      <Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.username}>@{profile.username}</Text>
      
      <TextInput style={styles.bioInput} multiline={true} defaultValue={profile.bio} />

      {menuOptions.map((option, index) => (
        <TouchableOpacity key={index} style={styles.menuItem}>
          <Ionicons name={option.iconName} size={24} color="black" style={styles.icon} />
          <Text style={styles.menuItemText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F6FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color:'#221F60'
  },
  username: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  bioInput: {
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor:'#fff',
    borderRadius: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor:'#fff',
    borderRadius:17,
    marginTop:5,
    marginLeft:10,
    marginRight:10
  },
  menuItemText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
    color:'#221F60'
  },
  icon: {
    marginRight: 10,
    color:'#221F60'
  },
});

export default ProfileScreen;
