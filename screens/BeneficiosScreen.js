import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function BeneficiosScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Benefícios</Text>
        
        <View style={styles.benefitContainer}>
          <Image
            style={styles.giftImage}
            source={require('../images/gifs.png')} // Coloque a imagem do presente
          />
          <Text style={styles.benefitText}>Obtenha benefícios sempre que reciclar</Text>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Começar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pointsContainer}>
          <Text style={styles.pointsTitle}>Meus pontos</Text>
          <View style={styles.pointsBox}>
            <Text style={styles.points}>125 Pontos</Text>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemButtonText}>Resgatar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.activityTitle}>Minha atividade</Text>
          
          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Você reciclou</Text>
            <Text style={styles.activityPoints}>12 pontos</Text>
            <Text style={styles.activityDate}>12 Oct, 2023</Text>
          </View>

          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Você reciclou</Text>
            <Text style={styles.activityPoints}>135 pontos</Text>
            <Text style={styles.activityDate}>16 Oct, 2023</Text>
          </View>

          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Você reciclou</Text>
            <Text style={styles.activityPoints}>25 pontos</Text>
            <Text style={styles.activityDate}>30 Oct, 2023</Text>
          </View>

          <View style={styles.activityItem}>
            <Text style={styles.activityText}>Você reciclou</Text>
            <Text style={styles.activityPoints}>50 pontos</Text>
            <Text style={styles.activityDate}>10 Nov, 2023</Text>
          </View>
        </View>

        <View style={styles.redeemContainer}>
          <Text style={styles.redeemTitle}>Resgatar pontos</Text>

          <View style={styles.redeemItem}>
            <Image
              style={styles.redeemImage}
              source={require('../images/item1.png')} // Coloque a imagem do item
            />
            <Text style={styles.redeemText}>30% Off em Escovas de Bambú</Text>
            <Text style={styles.redeemPoints}>500 Ptos</Text>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemButtonText}>Resgatar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.redeemItem}>
            <Image
              style={styles.redeemImage}
              source={require('../images/item2.png')} // Coloque a imagem do item
            />
            <Text style={styles.redeemText}>2x1 em Shampoo sólido de Lavanda</Text>
            <Text style={styles.redeemPoints}>900 Ptos</Text>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemButtonText}>Resgatar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.redeemItem}>
            <Image
              style={styles.redeemImage}
              source={require('../images/item3.png')} // Coloque a imagem do item
            />
            <Text style={styles.redeemText}>80% Off Kit escolar ecológico</Text>
            <Text style={styles.redeemPoints}>1200 Ptos</Text>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemButtonText}>Resgatar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.redeemItem}>
            <Image
              style={styles.redeemImage}
              source={require('../images/item4.png')} // Coloque a imagem do item
            />
            <Text style={styles.redeemText}>2 bolsas ecológicas de presente</Text>
            <Text style={styles.redeemPoints}>2000 Ptos</Text>
            <TouchableOpacity style={styles.redeemButton}>
              <Text style={styles.redeemButtonText}>Resgatar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 20,
    marginLeft: 20,
  },
  benefitContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  giftImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  pointsContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  pointsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  pointsBox: {
    backgroundColor: '#ECF7EE',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  redeemButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  redeemButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  activityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityPoints: {
    fontSize: 14,
    color: '#333',
  },
  activityDate: {
    fontSize: 12,
    color: '#999',
  },
  redeemContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  redeemTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  redeemItem: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  redeemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  redeemText: {
    fontSize: 16,
    flex: 1,
  },
  redeemPoints: {
    fontSize: 14,
    color: '#333',
    marginRight: 10,
  },
});
