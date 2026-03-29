import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Button from '../components/Button';
import { CARE_TIPS } from '../data/tipsData';
import styles from '../styles/TipsStyles';

const ROTATION_MS = 5000;

const TipsScreen = () => {
  const [tips] = useState(CARE_TIPS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infoMessage, setInfoMessage] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % CARE_TIPS.length);
    }, ROTATION_MS);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setInfoMessage(`Consejo ${currentIndex + 1} de ${tips.length}`);
  }, [currentIndex, tips.length]);

  const goToNextTip = () => {
    setCurrentIndex((previousIndex) => (previousIndex + 1) % tips.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Consejos de cuidado</Text>

        <View style={styles.card}>
          <Text style={styles.tipText}>{tips[currentIndex]}</Text>
          <Text style={styles.counter}>{infoMessage}</Text>
        </View>

        <Button title="Siguiente consejo" onPress={goToNextTip} />
      </View>
    </SafeAreaView>
  );
};

export default TipsScreen;
