/**
 * Pantalla principal de la aplicación
 * Muestra el listado de mascotas y opciones principales
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Button } from 'react-native';
import { COLORS, FONT_SIZES } from '@constants/colors';
import { Pet } from '@types/index';

const HomeScreen: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([
    {
      id: '1',
      name: 'Max',
      type: 'dog',
      breed: 'Golden Retriever',
      age: 3,
      healthStatus: 'healthy',
    },
  ]);

  const renderPetItem = ({ item }: { item: Pet }) => (
    <View style={styles.petCard}>
      <Text style={styles.petName}>{item.name}</Text>
      <Text style={styles.petDetails}>{item.breed}</Text>
      <Text style={styles.petDetails}>Edad: {item.age} años</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>PetCare</Text>
        <Text style={styles.subtitle}>Cuidado inteligente para tus mascotas</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Mis Mascotas</Text>
        <FlatList
          data={pets}
          renderItem={renderPetItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
    marginTop: 4,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xLarge,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 12,
  },
  petCard: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
  },
  petName: {
    fontSize: FONT_SIZES.large,
    fontWeight: '600',
    color: COLORS.text,
  },
  petDetails: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textLight,
    marginTop: 4,
  },
});

export default HomeScreen;
