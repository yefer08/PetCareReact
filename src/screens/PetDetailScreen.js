import React, { useEffect, useState } from 'react';
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
      </View>
    </SafeAreaView>
  );
};

export default PetDetailScreen;