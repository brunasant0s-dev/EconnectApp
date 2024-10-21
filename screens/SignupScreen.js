import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { app } from '../firebaseconfig'; 

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignUp = () => {
        if (password.length < 6) {
            setErrorMessage('A senha deve ter 6 ou mais dígitos.');
            return;
        }

        const auth = getAuth(app);
        const db = getFirestore(app);

        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;

                await setDoc(doc(db, 'users', user.uid), {
                    name,
                    email,
                });

                setSuccessMessage('Cadastro realizado com sucesso!');
                setErrorMessage('');

                Alert.alert(
                    'Sucesso',
                    'Cadastro realizado com sucesso!',
                    [
                        {
                            text: 'OK', 
                            onPress: () => {
                                navigation.navigate('LoginScreen');
                            }
                        }
                    ]
                );
            })
            .catch(error => {
                setErrorMessage('Erro ao cadastrar usuário. Verifique suas informações.');
                setSuccessMessage('');
            });
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../images/loginImage.png')} style={styles.image} />
            </View>

            <Text style={styles.title}>Registrate</Text>
            {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
            {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Nome"
                placeholderTextColor="#000"
            />
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="#000"
                keyboardType="email-address"
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

            <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
                <Text style={styles.registerButtonText}>Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.loginButtonText}>Já tem uma conta? Entrar</Text>
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
        width: 380,
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
    registerButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#6db147',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#eefbe3',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
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

export default SignUpScreen;
