import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function LinhaAzulScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Linha Azul</Text>
        <Image
          style={styles.bannerImage}
          source={require('../images/port.png')} // Atualize o caminho da imagem
        />
      </View>

      <Text style={styles.sectionTitle}>O que descartar</Text>
      <View style={styles.discardItems}>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          A linha azul é composta por eletrodomésticos portáteis usados no dia a dia, como batedeiras, liquidificadores, ferros elétricos, furadeiras, secadores de cabelo, espremedores de frutas,
          aspiradores de pó e cafeteiras.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          Procure centros que aceitem eletrônicos e pequenos eletrodomésticos, 
          que podem processar os diferentes materiais, como plásticos, metais e eletrônicos.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          Se o aparelho contiver baterias removíveis, como furadeiras sem fio, 
          as baterias devem ser descartadas separadamente em pontos de coleta específicos para baterias.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Impacto no meio ambiente</Text>
      <View style={styles.environmentSection}>
        <Image
          style={styles.environmentImage}
          source={require('../images/hom.png')} // Atualize o caminho da imagem
        />
      </View>

      <View style={styles.impactDetails}>
        <View style={styles.impactItem}>
          <View style={styles.impactIconContainer}>
            <Image
              style={styles.impactIcon}
              source={require('../images/reci.png')} // Atualize o caminho da imagem
            />
          </View>
          <View style={styles.impactTextContainer}>
            <Text style={styles.impactTitle}>Contaminação do Solo e da Água</Text>
            <Text style={styles.impactText}>
            Muitos eletrodomésticos portáteis contêm metais pesados, como chumbo e cádmio, em suas partes eletrônicas, como motores e circuitos. Esses metais 
            podem contaminar o solo e a água se descartados incorretamente em aterros sanitários, afetando ecossistemas e a saúde pública.
            </Text>
          </View>
        </View>
        <View style={styles.impactItem}>
          <View style={styles.impactIconContainer}>
            <Image
              style={styles.impactIcon}
              source={require('../images/reci.png')} // Atualize o caminho da imagem
            />
          </View>
          <View style={styles.impactTextContainer}>
            <Text style={styles.impactTitle}>Desperdício de Recursos Naturais</Text>
            <Text style={styles.impactText}>
            Aparelhos portáteis contêm plásticos, metais e eletrônicos que podem ser reciclados. Quando esses materiais não são reutilizados, 
            há um desperdício de recursos naturais, exigindo mais extração de matérias-primas para a fabricação de novos produtos.
            </Text>
          </View>
        </View>
        <View style={styles.impactItem}>
          <View style={styles.impactIconContainer}>
            <Image
              style={styles.impactIcon}
              source={require('../images/reci.png')} // Atualize o caminho da imagem
            />
          </View>
          <View style={styles.impactTextContainer}>
            <Text style={styles.impactTitle}>Poluição do Ar</Text>
            <Text style={styles.impactText}>
            A queima inadequada de componentes plásticos e eletrônicos 
            libera substâncias tóxicas no ar, como dioxinas e furanos, poluentes altamente prejudiciais à saúde humana e ao meio ambiente.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20, // Adicionando um padding horizontal
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0096ff',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0096ff',
    marginBottom: 10,
    paddingHorizontal: 20, // Adicionando padding horizontal
  },
  discardItems: {
    marginBottom: 20,
    paddingHorizontal: 20, // Adicionando padding horizontal
  },
  discardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  discardImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  discardText: {
    fontSize: 13, // Diminui o tamanho do texto
    textAlign: 'justify', // Justifica o texto
    flex: 1,
  },
  environmentSection: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20, // Adicionando padding horizontal
  },
  environmentImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  environmentText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#757575',
  },
  impactDetails: {
    marginBottom: 20,
    paddingHorizontal: 20, // Adicionando padding horizontal
  },
  impactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  impactIconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  impactIcon: {
    width: 30,
    height: 30,
  },
  impactTextContainer: {
    flex: 1,
  },
  impactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  impactText: {
    fontSize: 14, // Diminui o tamanho do texto
    textAlign: 'justify', // Justifica o texto
    color: '#757575',
  },
});
