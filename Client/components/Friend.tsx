// Friend.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import defaultProfileImage from '../assets/pp.jpg';

export interface Friend {
  id: string;
  name: string;
  avatarUrl?: string;
  online: boolean;
}

interface FriendProps {
  friend: Friend;
}

const Friend: React.FC<FriendProps> = ({ friend }) => {
  const { name, avatarUrl, online } = friend;

  const avatar = avatarUrl ? { uri: avatarUrl } : defaultProfileImage;

  return (
    <View style={styles.friendContainer}>
      <View style={styles.avatarContainer}>
        <Image source={avatar} style={styles.avatar} />
        <View style={[styles.onlineStatus, online ? styles.online : styles.offline]} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  friendContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor:'#fff',
    borderRadius:17,
    padding:7,
    marginTop:5,
    marginLeft:10,
    marginRight:10
  },
  avatarContainer: {
    marginRight: 10,
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineStatus: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: 'absolute',
    right: -2,
    bottom: -2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  online: {
    backgroundColor: '#4caf50',
  },
  offline: {
    backgroundColor: '#ccc',
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color:'#221F60'
  },
});

export default Friend;
