import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Econnect</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Navega para a HomeScreen
      >
        <Text style={styles.buttonText}>Ir para o Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#4CAF50',
  },
});

