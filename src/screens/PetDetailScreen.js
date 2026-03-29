import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
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
=======
import { SafeAreaView, View, Text } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/PetDetailStyles';

const getSpeciesEmoji = (species) => {
  if (species.toLowerCase() === 'perro') {
    return '🐶';
  }

  if (species.toLowerCase() === 'gato') {
    return '🐱';
  }

  return '🐾';
};

const PetDetailScreen = ({ navigation, route }) => {
  const { pet } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    navigation.setOptions({ title: pet.name });
    setVisitCount((currentCount) => currentCount + 1);
  }, [navigation, pet]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heroCard}>
          <Text style={styles.petEmoji}>{getSpeciesEmoji(pet.species)}</Text>
          <Text style={styles.title}>{pet.name}</Text>
          <Text style={styles.subtitle}>
            {pet.species} • {pet.breed}
          </Text>

          <View style={styles.favoriteBadge}>
            <Text style={styles.favoriteBadgeText}>
              {isFavorite ? '⭐ Favorito' : '🤍 No favorito'}
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Información general</Text>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Especie</Text>
            <Text style={styles.value}>{pet.species}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Raza</Text>
            <Text style={styles.value}>{pet.breed}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Edad</Text>
            <Text style={styles.value}>{pet.age} años</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Peso</Text>
            <Text style={styles.value}>{pet.weight} kg</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Visitas</Text>
            <Text style={styles.value}>{visitCount}</Text>
          </View>
        </View>

        <Button
          title={isFavorite ? 'Quitar de favoritos' : 'Marcar favorito'}
          onPress={() => setIsFavorite((currentValue) => !currentValue)}
          style={styles.primaryAction}
        />

        <Button
          title="Volver"
          variant="secondary"
          onPress={() => navigation.goBack()}
          style={styles.secondaryAction}
        />
>>>>>>> develop
      </View>
    </SafeAreaView>
  );
};

<<<<<<< HEAD
export default PetDetailScreen;
=======
export default PetDetailScreen;
>>>>>>> develop
