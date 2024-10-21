// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseconfig'; // Ajuste o caminho se necessário

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = () => {
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setSuccessMessage('Login realizado com sucesso!');
                setErrorMessage('');
                navigation.navigate('Home');
            })
            .catch(error => {
                setErrorMessage('Credenciais inseridas inválidas!');
                setSuccessMessage('');
            });
    };

    return (
        <View style={styles.container}>
            {/* Imagem e título */}
            <View style={styles.imageContainer}>
                <Image source={require('../images/recicle.png')} style={styles.image} />
            </View>
            <Text style={styles.title}>Entre na sua conta</Text>

            {/* Exibe mensagem de erro ou sucesso */}
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

            {/* Inputs de email e senha */}
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="#000"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
                placeholderTextColor="#000"
                secureTextEntry
            />
            
            <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('esqueciSenha')}>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            {/* Botões de Login e Registro */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.registerButtonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 400, // Ajuste para o tamanho adequado
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        marginBottom: 30,
        color: '#6db147',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 48,
        borderBottomColor: '#000', // Apenas a linha inferior
        borderBottomWidth: 1, // Espessura da linha
        marginBottom: 35,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        color: '#000',
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: 45,
    },
    forgotPasswordText: {
        color: '#000',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#6db147', // Verde vibrante
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#eefbe3', // Verde claro
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#6db147',
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 16,
    },
    successText: {
        color: 'green',
        marginBottom: 16,
    },
});

export default LoginScreen;
