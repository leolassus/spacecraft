import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
//import AssetExample from 'components/AssetExample';/

// or any pure javascript modules available in npm
import { Card, TextInput, Button } from 'react-native-paper';

// Debut du code

function Loginform() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={styles.form}>
      <TextInput style={styles.email} label="Email" onChangeText={(email: string) => setEmail(email)} />
      <TextInput style={styles.password} label="Password" onChangeText={(password: string) => setPassword(password)} />
      <Button icon="check" mode="contained" onPress={() => console.log('Il a appuyé ce fou malade')}>
        Se connecter</Button>
    </View>
  )
}

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Welcome !</Text>
      </View>

      <Loginform />

      <Text style={styles.condition} >Lire les conditions d'utilisations</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 30
  },
  title: {
    color: "black",
    textAlign: "center",
    paddingVertical: 30,
    fontSize: 30
  },
  email: {
    marginVertical: 15
  },
  password: {
    marginVertical: 15
  },
  form: {

  },
  head: {

  },
  condition: {
    textAlign: "center"
  }
});