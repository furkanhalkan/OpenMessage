// Profile.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import defaultProfileImage from '../assets/pp.jpg';

export interface Profile {
  id: string;
  name: string;
  username: string;
  bio: string;
  avatarUrl?: string;
}

interface ProfileProps {
  profile: Profile;
}

const Profile: React.FC<ProfileProps> = ({ profile }) => {
  const { name, username, bio, avatarUrl } = profile;

  const avatar = avatarUrl ? { uri: avatarUrl } : defaultProfileImage;

  return (
    <View style={styles.profileContainer}>
      <Image source={avatar} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  username: {
    fontSize: 16,
    color: '#888',
  },
  bio: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Profile;
