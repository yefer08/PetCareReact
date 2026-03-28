import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { styles } from '../styles/PetListStyles';

const initialPets = [
  { id: '1', name: 'Luna', species: 'Gato', breed: 'Siamés', age: '3', weight: '4.5' },
  { id: '2', name: 'Max', species: 'Perro', breed: 'Labrador', age: '5', weight: '22' },
  { id: '3', name: 'Milo', species: 'Conejo', breed: 'Enano', age: '2', weight: '2.8' },
];

const PetListScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(initialPets);
  }, []);

  const handleSelectPet = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

  const renderPetCard = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleSelectPet(item)}>
      <Text style={styles.emoji}>{item.species === 'Perro' ? '🐶' : item.species === 'Gato' ? '🐱' : '🐰'}</Text>
      <View style={styles.cardTextContainer}>
        <Text style={styles.petName}>{item.name}</Text>
        <Text style={styles.petInfo}>{item.species} — {item.breed}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={renderPetCard}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;
