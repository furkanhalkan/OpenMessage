import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    {
      user: {
        name: 'Furkan',
        lastName: 'Alkan',
        username: 'acedia',
        avatar: '',
        lastMessageTime: '30.07.2023',
        notificationCount: 1,
        onlineStatus: 'online'
      },
      latestMessage: 'Merhaba, nasılsın bro?',
    },
    // Diğer mesajları buraya ekleyebilirsiniz.
  ];

  const profileImage = 'https://www.example.com/my_profile_picture.jpg';

  const navigateToProfile = () => {
    // Burada profil sayfasına yönlendirme kodu olmalı
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mesajlar</Text>
        <TouchableOpacity onPress={navigateToProfile}>
          <Image source={{ uri: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg' }} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#888" />
      </View>
      
      <View style={styles.messagesContainer}>
        {messages.map((message, index) => (
          <Message key={index} user={message.user} latestMessage={message.latestMessage} />
        ))}
      </View>
      
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={25} color="#fff" />
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
    height: 35,
  },
  messagesContainer: {
    flex: 1,
    backgroundColor: '#F5F6FA',
    borderRadius:18,
    marginTop:24
  },
  addButton: {
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

export default MessageScreen;