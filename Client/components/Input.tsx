
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
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    color: 'purple',
    marginBottom: 20,
  },
});

export default CfInput;
