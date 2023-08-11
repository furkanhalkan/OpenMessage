// SettingsScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
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
      <Text style={styles.title}>Ayarlar</Text>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Aramak istediğiniz ayarı yazın..." placeholderTextColor="#888" />
      </View>

      <View style={styles.profileContainer}>
        <Image source={{ uri: 'https://www.wpdurum.com/uploads/thumbs/en-iyi-erkek-profil-resimleri.jpg' }} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>Adınız Soyadınız</Text>
          <Text style={styles.profileDescription}>Mesajlara geç cevap verebilirim.</Text>
        </View>
      </View>

      {settingsOptions.map((option) => (
        <TouchableOpacity key={option.id} style={styles.menuItem}>
          <Ionicons name={option.iconName} size={24} color="#221F60" style={styles.icon} />
          <Text style={styles.menuItemText}>{option.title}</Text>
          <Ionicons name="chevron-forward" size={24} color="#221F60" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    height: 35,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#888',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F5F6FA',
    borderRadius:18,
    marginTop:24,
    padding:10
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#221F60'
  },
  profileDescription: {
    fontSize: 14,
    color: '#908DE2',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor:'#F5F6FA',
    borderRadius:17,
    marginTop:5,
    marginLeft:10,
    marginRight:10
  },
  menuItemText: {
    fontSize: 18,
    flex: 1,
    color:'#221F60'
  },
  icon: {
    marginRight: 10,
    color:'#221F60'
  },
});

export default SettingsScreen;