import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Message, { User } from '../../components/Message';
import Icon from 'react-native-vector-icons/FontAwesome';

interface MessageItem {
  user: User;
  latestMessage: string;
}

const MessageScreen: React.FC = () => {
  // Burada örnek olarak kullanıcı bilgilerini ve mesajları statik bir veriden alıyorum.
  const messages: MessageItem[] = [
    {
      user: {
        name: 'Ahmet',
        lastName: 'Yılmaz',
        username: 'ahmet_yilmaz',
        avatar: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg',
        lastMessageTime: '30.07.2023',
        notificationCount: 1,
        onlineStatus: 'online'
      },
      latestMessage: 'Merhaba, nasılsın?',
    },
    {
      user: {
        name: 'Ahmet',
        lastName: 'Yılmaz',
        username: 'ahmet_yilmaz',
        avatar: '',
        lastMessageTime: '30.07.2023',
        notificationCount: 1,
        onlineStatus: 'online'
      },
      latestMessage: 'Merhaba, nasılsın?',
    },
    // Diğer mesajları buraya ekleyebilirsiniz.
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#888" />
        </View>
        <TouchableOpacity style={styles.newMessageIcon}>
          <Icon name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      {messages.map((message, index) => (
        <Message key={index} user={message.user} latestMessage={message.latestMessage} />
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
    height:35
  },
  newMessageIcon: {
    marginLeft: 15,
    backgroundColor: 'purple',
    borderRadius: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MessageScreen;
