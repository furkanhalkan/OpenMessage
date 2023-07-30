import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export interface User {
    name: string;
    lastName: string;
    username: string;
    avatar: string | null;
    lastMessageTime: string;
    notificationCount: number;
    onlineStatus: string;
}

interface MessageProps {
  user: User;
  latestMessage: string;
}

const Message: React.FC<MessageProps> = ({ user, latestMessage }) => {
    const getAvatar = () => {
      if (user.avatar) {
        return { uri: user.avatar };
      } else {
        // Profil resmi yoksa kişinin baş harfini kullanırız.
        return { text: user.name[0] };
      }
    };
  
    return (
      <View style={styles.messageContainer}>
        {getAvatar().uri ? (
          <View style={styles.avatarContainer}>
            <Image source={getAvatar()} style={styles.avatar} />
            {user.onlineStatus && <View style={styles.onlineIndicator} />}
          </View>
        ) : (
          <View style={styles.defaultAvatar}>
            <Text style={styles.avatarText}>{getAvatar().text}</Text>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.name}>{`${user.name} ${user.lastName}`}</Text>
          <Text style={styles.latestMessage}>{latestMessage}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{user.lastMessageTime}</Text>
          {user.notificationCount > 0 && (
            <View style={styles.notification}>
              <Text style={styles.notificationCount}>{user.notificationCount}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  

  const styles = StyleSheet.create({
    messageContainer: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'center',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: 'grey',
      justifyContent: 'space-between',
      padding: 10,
    },
    avatarContainer: {
      position: 'relative',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    onlineIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'green',
      position: 'absolute',
      bottom: 0,
      right: 10,
    },
    defaultAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      fontSize: 24,
      color: '#fff',
    },
    textContainer: {
      flexDirection: 'column',
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    latestMessage: {
      color: 'grey',
      fontSize: 14,
    },
    timeContainer: {
      alignItems: 'flex-end',
    },
    time: {
      fontSize: 12,
      color: 'grey',
    },
    notification: {
      backgroundColor: 'purple',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    notificationCount: {
      color: 'white',
      fontSize: 12,
    },
  });
  

export default Message;
