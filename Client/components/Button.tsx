
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  buttonText: string;
}

const CfButton: React.FC<ButtonProps> = ({ buttonText, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#4B44D4',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    opacity: 1,
    height:52
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default CfButton;
