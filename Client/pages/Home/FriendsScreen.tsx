// FriendsScreen.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#888" />
        </View>
        <TouchableOpacity style={styles.addFriendIcon}>
          <Icon name="user-plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      {friends.map((friend, index) => (
        <Friend key={index} friend={friend} />
      ))}
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
    marginBottom: 20,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height:35
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#888',
  },
  addFriendIcon: {
    marginLeft: 15,
    backgroundColor: 'purple',
    borderRadius: 25,
    width: 50,
    height: 50,
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
