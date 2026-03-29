import React from 'react';
import { useEffect, useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Button from '../components/Button';
import styles from '../styles/PetDetailStyles';

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
        <View style={styles.card}>
          <Text style={styles.title}>{pet.name}</Text>
          <Text style={styles.field}>Especie: {pet.species}</Text>
          <Text style={styles.field}>Raza: {pet.breed}</Text>
          <Text style={styles.field}>Edad: {pet.age} años</Text>
          <Text style={styles.field}>Peso: {pet.weight} kg</Text>
          <Text style={styles.field}>Favorito: {isFavorite ? 'Sí' : 'No'}</Text>
          <Text style={styles.field}>Visitas: {visitCount}</Text>
        </View>

        <Button
          title={isFavorite ? 'Quitar de favoritos' : 'Marcar favorito'}
          onPress={() => setIsFavorite((currentValue) => !currentValue)}
          style={styles.action}
        />
        <Button title="Volver" variant="secondary" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
};

export default PetDetailScreen;
