import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function LinhaBrancaScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Linha Branca</Text>
        <Image
          style={styles.bannerImage}
          source={require('../images/eletro.png')} // Atualize o caminho da imagem
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
          A linha branca de lixo eletrônico é composta por eletrodomésticos volumosos, como geladeiras, fogões, 
          lavadoras de roupa e louça, secadoras e condicionadores de ar
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          As regulamentações para descarte e reciclagem de eletrodomésticos podem variar.
           Verifique com autoridades locais ou serviços de gestão de resíduos para garantir que você está seguindo os procedimentos corretos.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          Muitos componentes dos eletrodomésticos da linha branca são recicláveis. 
          Certifique-se de que o centro de reciclagem aceita e processa esses itens adequadamente.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Impacto no meio ambiente</Text>
      <View style={styles.environmentSection}>
        <Image
          style={styles.environmentImage}
          source={require('../images/gel.png')} // Atualize o caminho da imagem
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
            <Text style={styles.impactTitle}>Emissão de Gases de Efeito Estufa</Text>
            <Text style={styles.impactText}>
            Geladeiras e condicionadores de ar contêm gases refrigerantes que têm um alto potencial de aquecimento global. Se esses gases
             forem liberados para a atmosfera devido a um descarte inadequado, podem contribuir para o efeito estufa e o aquecimento global.
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
            Em algumas regiões, resíduos de eletrodomésticos podem ser queimados, liberando 
            poluentes atmosféricos e substâncias tóxicas, como dioxinas e furanos, que são prejudiciais à saúde humana e ao meio ambiente.
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
            <Text style={styles.impactTitle}>Acúmulo de Resíduos</Text>
            <Text style={styles.impactText}>
            Eletrodomésticos são grandes e pesados, e seu acúmulo em aterros pode ocupar muito espaço, acelerando
             o enchimento dos aterros e levando à necessidade de novos locais de disposição, o que pode ter impactos ambientais adicionais.
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
    color: '#00000',
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
    color: '#00000',
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
