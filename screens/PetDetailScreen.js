import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { styles } from '../styles/PetDetailStyles';

const PetDetailScreen = ({ route, navigation }) => {
  const { pet } = route.params || {};
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (pet && pet.name) {
      navigation.setOptions({ title: `Detalle: ${pet.name}` });
    }
  }, [pet, navigation]);

  if (!pet) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>No se encontró la mascota.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{pet.name}</Text>
        <Text style={styles.text}>Especie: {pet.species}</Text>
        <Text style={styles.text}>Raza: {pet.breed}</Text>
        <Text style={styles.text}>Edad: {pet.age} años</Text>
        <Text style={styles.text}>Peso: {pet.weight} kg</Text>
        <Text style={styles.favoriteText}>Favorito: {isFavorite ? 'Sí' : 'No'}</Text>
        <Button
          title={isFavorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
          onPress={() => setIsFavorite((prev) => !prev)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Volver" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default PetDetailScreen;
