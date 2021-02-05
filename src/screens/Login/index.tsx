import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import aleatorio from '../../../assets/icon.png';

import styles from './styles';

const Login = () => {
    

    return (
        <View style={styles.container}>
            <View style={styles.loginLogo}>
                <Image
                    style={{ marginBottom: 20 }}
                    source={require('../../../assets/logoo.png')}
                />

                <Text style={{ textAlign: 'center', fontSize: 15, color: '#FFF' }}>
                    Learn Graphic and UI/UX designing in Hindi for free with live projects.
                </Text>
            </View>

            <TextInput
                style={styles.inputs}
                placeholder="Email Address"
            />

            <TextInput
                style={styles.inputs}
                placeholder="Password"
                
            />

            <RectButton style={styles.buttonLogin} >
                <Text style={styles.TextButtonLogin}>Login</Text>
            </RectButton>

            <RectButton style={styles.btnForgotPassword}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </RectButton>

            <Text style={styles.otherAccounts}>or login with</Text>

            <View style={styles.Accounts}>
                <RectButton style={styles.btnOthersLogin}>
                    <Ionicons name="md-logo-google" size={25} color="#FBBB00" />
                </RectButton>

                <RectButton style={styles.btnOthersLogin}>
                    <Ionicons name="logo-facebook" size={25} color="#3B5998" />
                </RectButton>

                <RectButton style={styles.btnOthersLogin}>
                    <Ionicons name="logo-twitter" size={25} color="#38A1F3" />
                </RectButton>
            </View>

            <View style={styles.RegisterNow}>
                <Text style={{ color: '#FFF', fontSize: 12 }}>
                    Don't have an account?
                </Text>
                <RectButton>
                    <Text style={{ color: '#FD8C00' }}>
                        Register Now
                    </Text>
                </RectButton>
            </View>

            <View style={styles.Terms}>
                <Text style={{ color: '#FFF', fontSize: 12 }}>
                    By signing up, you are agree with our
                </Text>
                <RectButton>
                    <Text style={{ color: '#FD8C00', marginLeft: 5 }}>
                        Terms & Conditions
                    </Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Login;
