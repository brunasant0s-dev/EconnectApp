import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function LinhaMarromScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Linha Marrom</Text>
        <Image
          style={styles.bannerImage}
          source={require('../images/tv.png')} // Atualize o caminho da imagem
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
          A linha marrom é a designação internacional para os aparelhos eletrônicos de uso doméstico que são destinados para entretenimento e informação, como televisores, equipamentos de áudio e vídeo, como
monitores de plasma, LCD e LED, televisores de tubo, equipamentos de DVD e VHS, equipamentos de áudio e filmadoras.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          Muitos dispositivos da linha marrom possuem baterias internas ou componentes perigosos (como mercúrio e chumbo). 
          Certifique-se de que esses componentes são removidos e descartados separadamente em locais especializados.
          </Text>
        </View>
        <View style={styles.discardItem}>
          <Image
            style={styles.discardImage}
            source={require('../images/icon.png')} // Atualize o caminho da imagem
          />
          <Text style={styles.discardText}>
          Algumas empresas de eletrônicos oferecem programas de troca ou reciclagem de dispositivos antigos, facilitando o descarte correto.
          </Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Impacto no meio ambiente</Text>
      <View style={styles.environmentSection}>
        <Image
          style={styles.environmentImage}
          source={require('../images/tvs.png')} // Atualize o caminho da imagem
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
            <Text style={styles.impactTitle}>Contaminação por Metais Pesados            </Text>
            <Text style={styles.impactText}>
            Muitos dispositivos da linha marrom contêm metais pesados, como chumbo, mercúrio, cádmio e níquel, em suas placas de circuito, telas e baterias. Quando esses materiais são descartados em aterros comuns, 
            os metais podem infiltrar-se no solo e contaminar as águas subterrâneas, causando sérios danos à vida selvagem e à saúde humana.
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
            <Text style={styles.impactTitle}>Acúmulo de Resíduos em Aterros</Text>
            <Text style={styles.impactText}>
            A constante atualização de dispositivos eletrônicos, como televisores e consoles de videogame, gera um grande volume de lixo eletrônico. 
            Esses dispositivos acabam em aterros sanitários, ocupando espaço valioso e contribuindo para o rápido esgotamento dessas áreas.
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
            <Text style={styles.impactTitle}>Produção de Resíduos Não Biodegradáveis</Text>
            <Text style={styles.impactText}>
            Dispositivos da linha marrom contêm grandes quantidades de plástico e materiais sintéticos que não são biodegradáveis. Quando descartados em aterros ou no meio ambiente, 
            esses materiais podem permanecer por séculos, contribuindo para a poluição plástica e afetando a vida marinha e terrestre.
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
    color: '#784008',
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
    color: '#784008',
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
