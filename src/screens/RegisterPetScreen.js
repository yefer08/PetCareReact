import React, { useEffect, useState } from 'react';
import {
<<<<<<< HEAD
  View,
  Text,
  TextInput,
  Button,
=======
>>>>>>> develop
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
<<<<<<< HEAD
} from 'react-native';
import { styles } from '../styles/RegisterPetStyles';
=======
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../components/Button';
import styles from '../styles/RegisterPetStyles';
>>>>>>> develop

const RegisterPetScreen = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    setIsFormValid(
      name.trim() !== '' &&
      species.trim() !== '' &&
      breed.trim() !== '' &&
      age.trim() !== '' &&
      weight.trim() !== ''
    );
=======
    const isValid =
      name.trim().length > 0 &&
      species.trim().length > 0 &&
      breed.trim().length > 0 &&
      age.trim().length > 0 &&
      weight.trim().length > 0;

    setIsFormValid(isValid);
>>>>>>> develop
  }, [name, species, breed, age, weight]);

  const handleRegister = () => {
    Alert.alert(
<<<<<<< HEAD
      'Resumen de registro',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age}\nPeso: ${weight}`
    );
  };

  const handleClear = () => {
=======
      'Mascota registrada',
      `Nombre: ${name}\nEspecie: ${species}\nRaza: ${breed}\nEdad: ${age}\nPeso: ${weight} kg`,
      [{ text: 'OK' }]
    );
  };

  const clearForm = () => {
>>>>>>> develop
    setName('');
    setSpecies('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
<<<<<<< HEAD
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
=======
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
>>>>>>> develop
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

<<<<<<< HEAD
export default RegisterPetScreen;
=======
export default RegisterPetScreen;
>>>>>>> develop
