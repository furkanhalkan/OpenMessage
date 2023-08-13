import React, { useRef, useState } from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity, TextInput, StyleSheet, Animated } from 'react-native';
import { GiftedChat, Bubble, InputToolbar, IMessage, Time } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { ChatScreenRouteProp, ChatScreenNavigationProp } from '../types';


type Props = {
  route: ChatScreenRouteProp,
  navigation: ChatScreenNavigationProp,
};

const ChatScreen: React.FC<Props> = ({ route, navigation }) => {
  const { user } = route.params;

  const [messages, setMessages] = React.useState<IMessage[]>([
    {
      _id: 1,
      text: 'Merhaba',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: user.name,
        avatar: user.avatar,
      },
    },
    {
      _id: 2,
      text: 'Merhaba, nasılsın?',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Kullanıcı',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ]);

  const renderTime = (date: Date | number) => {
    const messageDate = moment(date);
    const today = moment().startOf('day');
  
    if (messageDate.isSame(today, 'd')) {
      return messageDate.format('HH:mm');
    } else {
      return messageDate.format('DD/MM/YYYY');
    }
  };

  const [isInputFocused, setInputFocused] = useState(false);
  const inputWidth = useRef(new Animated.Value(0)).current;

  const handleInputFocus = () => {
    setInputFocused(true);
    Animated.timing(inputWidth, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleInputBlur = () => {
    setInputFocused(false);
    Animated.timing(inputWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const [text, setText] = useState<string>("");

  const onSendMessage = () => {
    if (text.trim()) {
      const newMessage: IMessage = {
        _id: Math.random().toString(),
        text: text,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Kullanıcı",
          avatar: 'https://placeimg.com/140/140/any',
        },
      };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);
      setText("");
    }
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: 'https://placeimg.com/640/480/any' }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#221F60" />
        </TouchableOpacity>
        <Image
          style={styles.avatar}
          source={{ uri: user.avatar }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerName}>{user.name}</Text>
          <Text style={styles.headerLastSeen}>Son görülme: {user.lastSeen}</Text>
        </View>
        <TouchableOpacity style={styles.callIcon}>
          <Ionicons name="call" size={24} color="#221F60" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoIcon}>
          <Ionicons name="videocam" size={24} color="#221F60" />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, padding: 10}}>
        {/* Mesajları Gösterme */}
        <View style={{flex: 1}}>
          {messages.slice(0).reverse().map((msg, index) => (  
          <View 
            key={msg._id}
            style={[
              styles.messageContainer, 
              msg.user._id === 1 ? styles.outgoingMessage : styles.incomingMessage 
            ]}
          >
          <Text style={[
              msg.user._id === 1 ? styles.outgoingMessagetxt : styles.incomingMessagetxt 
            ]}>{msg.text}</Text>
          <Text style={styles.timeText}>{renderTime(msg.createdAt)}</Text> 
          </View>
        ))}
        </View>

        {/* Mesaj Gönderme Alanı */}
        <View style={[styles.composerContainer, isInputFocused ? {justifyContent: 'flex-end'} : {}]}>
          { !isInputFocused && 
            <>
              <TouchableOpacity style={styles.roundedIcon}>
                <Ionicons name="add" size={24} color="#221F60" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedIcon}>
                <Ionicons name="mic" size={24} color="#221F60" />
              </TouchableOpacity>
            </>
          }
          <TextInput 
            style={[styles.input, isInputFocused ? {flex: 1} : {}]}
            placeholder="Mesajınızı yazın..."
            value={text}
            onChangeText={setText}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <TouchableOpacity onPress={onSendMessage} style={styles.sendIcon}>
            <Ionicons name="send" size={24} color="#221F60" />
          </TouchableOpacity>
        </View>
      </View>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  headerTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  headerName: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerLastSeen: {
    color: '#888',
    fontSize: 14,
  },
  callIcon: {
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  videoIcon: {
    backgroundColor: '#F5F6FA',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  background: {
    flex: 1,
  },
  inputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  inputAnimatedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
  outgoingMessage: {
    backgroundColor: '#221F60',
    alignSelf: 'flex-end',
  },
  incomingMessage: {
    backgroundColor: '#FFFFFF',
  },
  composerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 5,
  },
  input: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    fontSize: 16,
    marginHorizontal: 5,
    flex: 0.8,
  },
  roundedIcon: {
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
  },
  sendIcon: {
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 10,
    color: '#888',
    marginTop: 5,
    alignSelf: 'flex-end'
  },
  outgoingMessagetxt:{
    color:'#fff'
  },
  incomingMessagetxt:{
    color:'#000'
  }
});

export default ChatScreen;