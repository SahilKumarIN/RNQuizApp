import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth} from '../../context/AuthProvider';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <ImageBackground
      source={require('../../assets/quiz_bg.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <LinearGradient colors={['#6dd5ed', '#2193b0']} style={styles.gradient}>
          <Text style={styles.title}>Welcome to QuizApp</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <Pressable
            style={styles.footer}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.footerText}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  gradient: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#3b5998',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
