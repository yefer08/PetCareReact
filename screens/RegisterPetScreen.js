import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { styles } from '../styles/RegisterPetStyles';

const RegisterPetScreen = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== ''
    );
  }, [name, species, breed, age, weight]);

  const handleRegister = () => {
    Alert.alert(
      'Resumen de registro',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age}\nPeso: ${weight}`
    );
  };

  const handleClear = () => {
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text style={styles.label}>Nombre</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nombre de la mascota" />

          <Text style={styles.label}>Especie</Text>
          <TextInput style={styles.input} value={species} onChangeText={setSpecies} placeholder="Perro, Gato, etc." />

          <Text style={styles.label}>Raza</Text>
          <TextInput style={styles.input} value={breed} onChangeText={setBreed} placeholder="Raza" />

          <Text style={styles.label}>Edad</Text>
          <TextInput style={styles.input} value={age} onChangeText={setAge} placeholder="Edad en años" keyboardType="numeric" />

          <Text style={styles.label}>Peso</Text>
          <TextInput style={styles.input} value={weight} onChangeText={setWeight} placeholder="Peso en kg" keyboardType="numeric" />

          <View style={styles.buttonRow}>
            <Button title="Registrar" onPress={handleRegister} disabled={!isFormValid} />
            <Button title="Limpiar" onPress={handleClear} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;
