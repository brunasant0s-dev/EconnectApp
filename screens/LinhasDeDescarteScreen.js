import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LinhasDeDescarteScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linhas de Descarte</Text>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#E0E0E0' }]} 
        onPress={() => navigation.navigate('LinhaBranca')}
      >
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require('../images/branca.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.cardText}>Linha Branca</Text>
          <FontAwesome name="chevron-right" size={24} color="black" style={styles.chevron} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#76FF03' }]} 
        onPress={() => navigation.navigate('LinhaVerde')}
      >
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require('../images/verde.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.cardText}>Linha Verde</Text>
          <FontAwesome name="chevron-right" size={24} color="black" style={styles.chevron} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#64B5F6' }]} 
        onPress={() => navigation.navigate('LinhaAzul')}
      >
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require('../images/azul.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.cardText}>Linha Azul</Text>
          <FontAwesome name="chevron-right" size={24} color="black" style={styles.chevron} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, { backgroundColor: '#8D6E63' }]} 
        onPress={() => navigation.navigate('LinhaMarrom')}
      >
        <View style={styles.row}>
          <Image
            style={styles.icon}
            source={require('../images/marrom.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.cardText}>Linha Marrom</Text>
          <FontAwesome name="chevron-right" size={24} color="black" style={styles.chevron} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  chevron: {
    marginLeft: 20, // Ajuste o valor conforme necessário
  },
});

