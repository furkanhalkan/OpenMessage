
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
    backgroundColor: 'purple',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    opacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CfButton;
