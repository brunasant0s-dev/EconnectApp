import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  const [name, setName] = useState('Jaquelina Cordero');
  const [address, setAddress] = useState('Av. Juramento 1234, Belgrano CABA');
  const [email, setEmail] = useState('jaquecordero15@gmail.com');
  const [editing, setEditing] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Perfil</Text>

      <View style={styles.profilePicContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profilePic}
        />
        <TouchableOpacity style={styles.editPicButton}>
          <Icon name="photo-camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{name}</Text>

      {editing ? (
        <View>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Endereço"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
          />
          <TouchableOpacity style={styles.saveButton} onPress={() => setEditing(false)}>
            <Text style={styles.saveButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.infoRow}>
            <Icon name="location-on" size={20} color="#000" />
            <Text style={styles.infoText}>{address}</Text>
            <TouchableOpacity onPress={() => setEditing(true)}>
              <Icon name="edit" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <Icon name="email" size={20} color="#000" />
            <Text style={styles.infoText}>{email}</Text>
            <TouchableOpacity onPress={() => setEditing(true)}>
              <Icon name="edit" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TouchableOpacity style={styles.logoutButton}
      onPress={() => navigation.navigate('Home')}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#24ce6b',
  },
  profilePicContainer: {
    alignSelf: 'center',
    marginBottom: 16,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editPicButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#24ce6b',
    borderRadius: 20,
    padding: 4,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#24ce6b',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#ff4d4d',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 32,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
