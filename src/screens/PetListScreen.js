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
        activeOpacity={0.9}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.petEmoji}>{getSpeciesEmoji(item.species)}</Text>

          <View style={styles.cardHeaderText}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>{item.breed}</Text>
          </View>

          <View style={styles.speciesBadge}>
            <Text style={styles.speciesBadgeText}>{item.species}</Text>
          </View>
        </View>

        <Text style={styles.cardInfo}>Toca para ver el detalle completo</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>🐾 Mascotas registradas</Text>
        <Text style={styles.description}>Consulta la información de cada mascota fácilmente.</Text>

        {isLoading ? <Text style={styles.infoText}>Cargando datos de ejemplo...</Text> : null}

        <FlatList
          data={pets}
          keyExtractor={(item) => item.id}
          renderItem={renderPetCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

export default PetListScreen;