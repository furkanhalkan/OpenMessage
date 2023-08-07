
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'numeric' | 'default' | 'phone-pad';
  secureTextEntry?: boolean;
};

const CfInput = ({ value, placeholder, onChangeText, keyboardType = 'default', secureTextEntry = false }: Props) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='white'
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 42,
    borderRadius: 16,
    padding: 10,
    width: '100%',
    color: '#918FB7',
    marginBottom: 20,
    textAlign: 'center',
    fontSize:14,
    backgroundColor:'#D9D9D9'
  },
});

export default CfInput;
