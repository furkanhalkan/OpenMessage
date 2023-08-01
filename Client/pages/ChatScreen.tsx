// ChatScreen.tsx
import React from 'react';
import { Image, ImageBackground, View, Text } from 'react-native';
import { GiftedChat, Bubble, IMessage } from 'react-native-gifted-chat';
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
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 20, paddingBottom: 10, backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <Image
          style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }}
          source={{ uri: user.avatar }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{user.name}</Text>
          <Text style={{ color: 'white', fontSize: 14 }}>Son görülme: {user.lastSeen}</Text>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderBubble={(props) => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'green'
                },
                left: {
                  backgroundColor: 'white'
                }
              }}
            />
          );
        }}
      />
    </ImageBackground>
  );
};

export default ChatScreen;
