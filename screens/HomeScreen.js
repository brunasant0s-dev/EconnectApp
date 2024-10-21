import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation(); // Hook para navegação

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Econnect</Text>

      <Image
        style={styles.bannerImage}
        source={require('../images/capa.png')} 
      />

      <Text style={styles.subtitle}>O que você está buscando hoje?</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('Linhas')} // Navega para a nova tela
        >
          <Image
            style={styles.icon}
            source={require('../images/lixo.png')}
          />
          <Text style={styles.cardText}>Linhas de Descarte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.icon}
            source={require('../images/noti.png')}
          />
          <Text style={styles.cardText}>Notificações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
        onPress={() => navigation.navigate('BeneficiosScreen')}>
          <Image
            style={styles.icon}
            source={require('../images/bene.png')}
          />
          <Text style={styles.cardText}>Benefícios</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomeScreen')}>
          <FontAwesome name="home" size={24} color="#4CAF50" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('PontosDescarteScreen')}
        >
          <FontAwesome name="map-marker" size={24} color="#4CAF50" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.footerButton}
          onPress={() => navigation.navigate('ProfileScreen')}  // Aqui colocamos a navegação para a tela de perfil
        >
          <FontAwesome name="user" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Mova os estilos para fora da função HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    alignSelf: 'flex-start', // Alinha o título à esquerda
    marginLeft: 20, // Adiciona um espaço à esquerda
  },
  bannerImage: {
    width: 398,
    height: 180,
    resizeMode: 'contain', // Adicionando esta opção para garantir que a imagem se ajuste corretamente
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  card: {
    width: 140,
    height: 120,
    backgroundColor: '#ECF7EE', // Leve verde
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    // Adiciona sombra (para iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Adiciona sombra (para Android)
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00000',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute', // Faz o footer ficar fixo na parte inferior
    bottom: 0, // Posiciona o footer na parte mais baixa possível
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff', // Adiciona um fundo branco para o footer
  },
  footerButton: {
    padding: 10,
  },
});
