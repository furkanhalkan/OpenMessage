import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type User = {
  id: string;
  username: string;
  name: string;
  lastName: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
  lastSeen: string;
};

export type RootStackParamList = {
    Welcome: undefined,
    EnablePermissions: undefined,
    PhoneVerification: undefined,
    CodeVerification: { expectedCode: string },
    Register: undefined,
    Chat: { user: User },
};

export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

export type EnablePermissionsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EnablePermissions'
>;

export type PhoneVerificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PhoneVerification'
>;

export type CodeVerificationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'CodeVerification'
>;

export type CodeVerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'CodeVerification'
>;

export type PhoneVerificationScreenRouteProp = RouteProp<
  RootStackParamList,
  'PhoneVerification'
>;

export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

export type ChatScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Chat'
>;

export type ChatScreenRouteProp = RouteProp<
  RootStackParamList,
  'Chat'
>;
