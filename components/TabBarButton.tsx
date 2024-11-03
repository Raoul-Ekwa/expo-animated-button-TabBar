import { Pressable, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { icon } from '../constants/icon';
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';


const TabBarButton = ({
    onPress,       // Fonction appelée lors de l'appui sur le bouton
    onLongPress,   // Fonction appelée lors d'un appui long sur le bouton
    routeName,     // Nom de la route pour l'icône associée à ce bouton
    isFocused,     // Booléen indiquant si ce bouton est actuellement sélectionné
    label,         // Texte à afficher sous l'icône du bouton 
}) => {
  // Initialisation d'une valeur partagée pour l'animation de l'échelle du bouton
const scale = useSharedValue(1); // Commence à 1, représentant une taille normale

// Effet qui s'exécute à chaque changement de l'état de focus du bouton
useEffect(() => {
  // Modifie la valeur de scale en fonction de l'état de focus
  // Si le bouton est focalisé, l'échelle devient 1.2 (agrandie)
  // Sinon, elle revient à 1 (taille normale)
  scale.value = isFocused ? 1.2 : 1; 
}, [isFocused]); // Dépendance à isFocused, l'effet se déclenche lorsqu'il change

// Création d'un style animé basé sur la valeur partagée de l'échelle
const animatedStyle = useAnimatedStyle(() => ({
  // Transformation appliquée : mise à l'échelle de l'élément
  transform: [{ scale: scale.value }], // Utilise la valeur d'échelle actuelle pour l'animation
}));
;
  
  return (
<Pressable /*Gestionnaire d'événement pour un appui simple sur le bouton*/
    onPress={onPress} 
    
    onLongPress={onLongPress}
    /*Applique les styles définis pour l'élément du TabBar*/
    style={styles.tabBarItem}
  >
    {/* Vue animée qui utilise le style d'animation prédéfini */}
    <Animated.View style={animatedStyle}>
      {/* 
        Récupère et affiche l'icône correspondante au nom de la route, 
        avec une couleur dépendant de l'état de focus
      */}
      {icon[routeName]({
        color: isFocused ? "#DE3163" : "#222", /*Couleur conditionnelle*/
      })}
    </Animated.View>
    {/* 
      Texte affiché sous l'icône, 
      avec une couleur conditionnelle selon l'état de focus
    */}
    {/*  Affiche le label associé au bouton */}
    <Text style={{ color: isFocused ? '#DE3163' : '#222' }}>
      {label} 
    </Text>
    
  </Pressable>
    
  
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
});

export default TabBarButton;
