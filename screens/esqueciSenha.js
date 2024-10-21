// ChangePasswordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { app } from '../firebaseconfig'; 

const EsqueciSenha = ({ navigation }) => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const auth = getAuth(app);

    const handleChangePassword = () => {
        const user = auth.currentUser;

        if (user) {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);

            reauthenticateWithCredential(user, credential)
                .then(() => {
                    updatePassword(user, newPassword)
                        .then(() => {
                            setSuccessMessage('Senha alterada com sucesso!');
                            setErrorMessage('');

                            // Exibir popup e redirecionar para a tela de login
                            Alert.alert(
                                'Sucesso',
                                'Senha alterada com sucesso!',
                                [{ text: 'OK', onPress: () => navigation.navigate('LoginScreen') }]
                            );
                        })
                        .catch(error => {
                            console.error('Erro ao alterar a senha:', error.message);
                            setErrorMessage('Erro ao alterar a senha. Verifique as informações fornecidas.');
                            setSuccessMessage('');
                        });
                })
                .catch(error => {
                    console.error('Erro de autenticação:', error.message);
                    setErrorMessage('Erro de autenticação. Verifique a senha atual.');
                    setSuccessMessage('');
                });
        } else {
            setErrorMessage('Usuário não autenticado.');
            setSuccessMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../images/logo.png')} style={styles.logo} /> 
            <View style={styles.innerContainer}>
                <Text style={styles.header}>Alterar Senha</Text>
                {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setCurrentPassword}
                    value={currentPassword}
                    placeholder="Senha Atual"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNewPassword}
                    value={newPassword}
                    placeholder="Nova Senha"
                    placeholderTextColor="#aaa"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                    <Text style={styles.buttonText}>Alterar Senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    innerContainer: {
        width: '100%',
        padding: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#6fcf97',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
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

export default EsqueciSenha;
