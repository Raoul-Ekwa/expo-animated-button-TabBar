import { StyleSheet, Text, Image, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

const Page = () => {
  const navigation = useNavigation(); // Récupérez l'objet de navigation

  const handlePress = () => {
    navigation.navigate('explore'); // Naviguez vers la route 'Explore'
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('..//../assets/images/logo_santaLucia.png')}
        style={styles.logoHomePage}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.buttonText}>Continuez ici</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
    backgroundColor: '#ff69b4', // code hexadecimal rose de santa lucia 
  },
  logoHomePage: {
    width: 310,
    height: 200,
    marginBottom: 50, // espace ajusté 
  },
  buttonContainer: {
    padding: 25,
    backgroundColor: '#1d3e7b',
    borderRadius: 30,
    width: 300,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
