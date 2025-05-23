import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FishDetailsScreen = ({ route }) => {
  const { fish } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{fish.name}</Text>
      <Text style={styles.description}>{fish.description}</Text>
    </View>
  );
};

export default FishDetailsScreen;
