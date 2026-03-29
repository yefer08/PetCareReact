import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/RegisterPetStyles';

const RegisterPetScreen = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Enable register only when every required field has content.
    const isValid =
      name.trim().length > 0 &&
      species.trim().length > 0 &&
      breed.trim().length > 0 &&
      age.trim().length > 0 &&
      weight.trim().length > 0;

    setIsFormValid(isValid);
  }, [name, species, breed, age, weight]);

  const handleRegister = () => {
    Alert.alert(
      'Mascota registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age}\nPeso: ${weight} kg`,
      [{ text: 'OK' }]
    );
  };

  const clearForm = () => {
    // Full reset keeps the UX predictable after successful registration.
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
          <Text style={styles.heading}>🩺 Registrar mascota</Text>
          <Text style={styles.description}>Completa el formulario con la información básica.</Text>

          <View style={styles.formCard}>
            <Text style={styles.label}>Nombre</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Ej. Max"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />

            <Text style={styles.label}>Especie</Text>
            <TextInput
              value={species}
              onChangeText={setSpecies}
              placeholder="Ej. Perro"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />

            <Text style={styles.label}>Raza</Text>
            <TextInput
              value={breed}
              onChangeText={setBreed}
              placeholder="Ej. Golden Retriever"
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />

            <Text style={styles.label}>Edad</Text>
            <TextInput
              value={age}
              onChangeText={setAge}
              placeholder="Ej. 3"
              placeholderTextColor="#94A3B8"
              keyboardType="number-pad"
              style={styles.input}
            />

            <Text style={styles.label}>Peso</Text>
            <TextInput
              value={weight}
              onChangeText={setWeight}
              placeholder="Ej. 30"
              placeholderTextColor="#94A3B8"
              keyboardType="decimal-pad"
              style={styles.input}
            />

            <Button title="Registrar" onPress={handleRegister} disabled={!isFormValid} />
            <Button
              title="Limpiar"
              variant="secondary"
              onPress={clearForm}
              style={styles.clearBtn}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterPetScreen;