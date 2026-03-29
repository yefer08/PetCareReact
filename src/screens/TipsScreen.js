import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { View, Text, Button, SafeAreaView } from 'react-native';
import { styles } from '../styles/TipsStyles';
import { CARE_TIPS } from '../data/tipsData';
=======
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../components/Button';
import { CARE_TIPS } from '../data/tipsData';
import styles from '../styles/TipsStyles';

const ROTATION_MS = 5000;
>>>>>>> develop

const TipsScreen = () => {
  const [tips] = useState(CARE_TIPS);
  const [currentIndex, setCurrentIndex] = useState(0);
<<<<<<< HEAD
  const [infoMessage, setInfoMessage] = useState('Consejo 1 de ' + tips.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [tips.length]);
=======
  const [infoMessage, setInfoMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % CARE_TIPS.length);
    }, ROTATION_MS);

    return () => clearInterval(intervalId);
  }, []);
>>>>>>> develop

  useEffect(() => {
    setInfoMessage(`Consejo ${currentIndex + 1} de ${tips.length}`);
  }, [currentIndex, tips.length]);

<<<<<<< HEAD
  const handleNextTip = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
=======
  const goToNextTip = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % tips.length);
>>>>>>> develop
  };

  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <View style={styles.card}>
        <Text style={styles.title}>Consejos de cuidado</Text>
        <Text style={styles.tipText}>{tips[currentIndex]}</Text>
        <Text style={styles.info}>{infoMessage}</Text>
        <Button title="Siguiente consejo" onPress={handleNextTip} />
=======
      <View style={styles.content}>
        <Text style={styles.heading}>Consejos de cuidado</Text>
        <Text style={styles.description}>Pequeñas acciones hacen una gran diferencia.</Text>

        <View style={styles.card}>
          <Text style={styles.tipEmoji}>🐾</Text>
          <Text style={styles.tipText}>{tips[currentIndex]}</Text>
          <Text style={styles.counter}>{infoMessage}</Text>
        </View>

        <Button title="Siguiente consejo" onPress={goToNextTip} style={styles.actionButton} />
>>>>>>> develop
      </View>
    </SafeAreaView>
  );
};

<<<<<<< HEAD
export default TipsScreen;
=======
export default TipsScreen;
>>>>>>> develop
