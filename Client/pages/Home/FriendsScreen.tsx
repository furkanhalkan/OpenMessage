// FriendsScreen.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Friend, { Friend as FriendType } from '../../components/Friend';

const FriendsScreen: React.FC = () => {
  const friends: FriendType[] = [
    {
      id: '1',
      name: 'John Doe',
      avatarUrl: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg', // Örnek bir profil resmi URL'si.
      online: true,
    },
    {
      id: '2',
      name: 'Jane Doe',
      online: false,
    },
  ];

  const navigateToProfile = () => {
    // Burada profil sayfasına yönlendirme kodu olmalı
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Arkadaşlar</Text>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image source={{ uri: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg' }} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#888" />
      </View>
      
      <View style={styles.friendsContainer}>
        {friends.map((friend, index) => (
          <Friend key={index} friend={friend} />
        ))}
      </View>
      
      <TouchableOpacity style={styles.addFriendButton}>
        <Icon name="user-plus" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 35,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#888',
  },
  friendsContainer: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    borderRadius:18,
    marginTop:24
  },
  addFriendButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#F8B851',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default FriendsScreen;