import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getFishes } from '../database/db';

const HomeScreen = ({ navigation }) => {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    getFishes(setFishes);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AquaDex</Text>
      <FlatList
        data={fishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FishDetails', { fish: item })}>
            <Text style={styles.fishName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddFish')}>
        <Text style={styles.buttonText}>Adicionar Peixe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
