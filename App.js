import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'; // Substitua pelo caminho correto do arquivo LoginScreen
import SignupScreen from './screens/SignupScreen'; // Substitua pelo caminho correto do arquivo SignupScreen
import HomeScreen from './screens/HomeScreen';
import LinhasDeDescarteScreen from './screens/LinhasDeDescarteScreen';
import LinhaVerdeScreen from './screens/LinhaVerdeScreen';
import LinhaBrancaScreen from './screens/LinhaBrancaScreen';
import LinhaAzulScreen from './screens/LinhaAzulScreen';
import LinhaMarromScreen from './screens/LinhaMarromScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import BeneficiosScreen from './screens/BeneficiosScreen';
import esqueciSenha from './screens/esqueciSenha';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Linhas" component={LinhasDeDescarteScreen} />
        <Stack.Screen name="LinhaVerde" component={LinhaVerdeScreen} />
        <Stack.Screen name="LinhaBranca" component={LinhaBrancaScreen} />
        <Stack.Screen name="LinhaAzul" component={LinhaAzulScreen} />
        <Stack.Screen name="LinhaMarrom" component={LinhaMarromScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="esqueciSenha" component={esqueciSenha} />
       
        <Stack.Screen name="BeneficiosScreen" component={BeneficiosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
