import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { styles } from '../styles/TipsStyles';
import { CARE_TIPS } from '../data/tipsData';

const TipsScreen = () => {
  const [tips] = useState(CARE_TIPS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infoMessage, setInfoMessage] = useState('Consejo 1 de ' + tips.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [tips.length]);

  useEffect(() => {
    setInfoMessage(`Consejo ${currentIndex + 1} de ${tips.length}`);
  }, [currentIndex, tips.length]);

  const handleNextTip = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tips.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Consejos de cuidado</Text>
        <Text style={styles.tipText}>{tips[currentIndex]}</Text>
        <Text style={styles.info}>{infoMessage}</Text>
        <Button title="Siguiente consejo" onPress={handleNextTip} />
      </View>
    </SafeAreaView>
  );
};

export default TipsScreen;
