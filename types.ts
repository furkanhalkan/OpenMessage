import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
    Welcome: undefined,
    EnablePermissions: undefined,
    PhoneVerification: undefined,
    CodeVerification: { expectedCode: string },
    Register: undefined,
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
