// ChatScreen.tsx
import React from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { GiftedChat, Bubble, InputToolbar, IMessage, Time } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

  const onSend = (newMessages: IMessage[] = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{ uri: 'https://placeimg.com/640/480/any' }}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
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
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.videoIcon}>
          <Ionicons name="videocam" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{ _id: 1 }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'green',
                },
                left: {
                  backgroundColor: 'white',
                },
              }}
            />
          );
        }}
        renderTime={(props) => (
          <Time {...props} textStyle={{ right: { color: 'black' }, left: { color: 'black' } }} />
        )}
        renderInputToolbar={(props) => (
          <InputToolbar
            {...props}
            containerStyle={{ borderTopWidth: 1, borderTopColor: '#ccc' }}
            renderComposer={() => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                  <Ionicons name="add-circle" size={24} color="green" style={{ marginHorizontal: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="mic" size={24} color="green" style={{ marginHorizontal: 5 }} />
                </TouchableOpacity>
                <TextInput
                  style={{ flex: 1, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 20, backgroundColor: 'white' }}
                  placeholder="Type a message..."
                />
                <TouchableOpacity>
                  <Ionicons name="send" size={24} color="green" style={{ marginHorizontal: 5 }} />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
  headerTextContainer: {
    marginLeft: 10,
  },
  headerName: {
    color: 'white',
    fontSize: 20,
  },
  headerLastSeen: {
    color: 'white',
    fontSize: 14,
  },
  callIcon: {
    marginLeft: 'auto',
  },
  videoIcon: {
    marginLeft: 10,
  },
});

export default ChatScreen;