import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function LinhaVerdeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Linha Verde</Text>
        <Image
          style={styles.bannerImage}
          source={require('../images/verdee.png')} // Atualize o caminho da imagem
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
            A linha verde de lixo eletrônico é composta por dispositivos portáteis, como: Notebooks, Tablets, Celulares, Mouses, 
            Teclados, Impressoras, Carregadores, Fones de ouvido, Pilhas e baterias, Cabos.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
            Esses equipamentos contêm metais preciosos e componentes que precisam de um descarte especial para evitar impactos ambientais negativos.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
            Antes de descartar o lixo eletrônico, é importante apagar todos os dados pessoais do equipamento. Para isso, é possível: Restaurar o sistema, 
            Retirar e formatar o HD, Retirar o chip, Desvincular contas.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Impacto no meio ambiente</Text>
      <View style={styles.environmentSection}>
        <Image
          style={styles.environmentImage}
          source={require('../images/imp.png')} // Atualize o caminho da imagem
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
              Muitos dispositivos eletrônicos contêm substâncias tóxicas, como chumbo, mercúrio, cádmio e arsênico. 
              Quando descartados incorretamente em aterros, esses materiais podem vazar para o solo e para os lençóis freáticos, contaminando o ecossistema local e, eventualmente, a água potável.
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
            <Text style={styles.impactTitle}>Emissão de Gases de Efeito Estufa</Text>
            <Text style={styles.impactText}>
              A decomposição de alguns componentes eletrônicos pode liberar gases prejudiciais ao meio ambiente, contribuindo para o aquecimento global. Além disso, o processo de reciclagem inadequada, especialmente em países onde não há regulação, 
              pode envolver a queima de materiais tóxicos, aumentando ainda mais a emissão de gases poluentes.
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
            <Text style={styles.impactTitle}>Acúmulo de Resíduos e Problemas de Disposição</Text>
            <Text style={styles.impactText}>
              O crescente volume de lixo eletrônico coloca pressão sobre sistemas de descarte e reciclagem. 
              O acúmulo desse lixo pode ocupar grandes áreas de aterros e levar à poluição visual, além de prejudicar áreas habitadas.
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
    color: '#4CAF50',
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
    color: '#4CAF50',
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
