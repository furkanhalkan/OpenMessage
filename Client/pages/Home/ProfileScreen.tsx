// ProfileScreen.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Profile, { Profile as ProfileType } from '../../components/Profile';

const ProfileScreen: React.FC = () => {
  const profile: ProfileType = {
    id: '1',
    name: 'John Doe',
    username: 'johndoe',
    bio: 'This is an example bio. You can put anything you like here.',
    avatarUrl: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg', // Örnek bir profil resmi URL'si.
  };

  return (
    <View style={styles.container}>
      <Profile profile={profile} />
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
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
  editButton: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
