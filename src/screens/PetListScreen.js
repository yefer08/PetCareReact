import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/PetListStyles';

const INITIAL_PETS = [
  { id: '1', name: 'Max', species: 'Perro', breed: 'Golden Retriever', age: '3', weight: '30' },
  { id: '2', name: 'Luna', species: 'Gato', breed: 'Siames', age: '2', weight: '5' },
  { id: '3', name: 'Toby', species: 'Perro', breed: 'Beagle', age: '5', weight: '12' },
];

const getSpeciesEmoji = (species) => {
  if (species.toLowerCase() === 'perro') {
    return '🐶';
  }

  if (species.toLowerCase() === 'gato') {
    return '🐱';
  }

  return '🐾';
};

const PetListScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPets(INITIAL_PETS);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const renderPetCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('PetDetail', { pet: item })}
        activeOpacity={0.85}
      >
        <Text style={styles.cardTitle}>
          {getSpeciesEmoji(item.species)} {item.name}
        </Text>
        <Text style={styles.cardSubtitle}>Especie: {item.species}</Text>
        <Text style={styles.cardSubtitle}>Raza: {item.breed}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Mascotas registradas</Text>
        {isLoading ? <Text style={styles.infoText}>Cargando datos de ejemplo...</Text> : null}
        <FlatList data={pets} keyExtractor={(item) => item.id} renderItem={renderPetCard} />
      </View>
    </SafeAreaView>
  );
};

export default PetListScreen;
