// SettingsScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const settingsOptions = [
  { id: '1', title: 'Hesap', iconName: 'person-circle' },
  { id: '2', title: 'Gizlilik', iconName: 'shield-checkmark' },
  { id: '3', title: 'Bildirimler', iconName: 'notifications' },
  { id: '4', title: 'Yardım', iconName: 'help-circle' },
];

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {settingsOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.menuItem}>
          <Ionicons name={option.iconName} size={24} color="black" style={styles.icon} />
          <Text style={styles.menuItemText}>{option.title}</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default SettingsScreen;
