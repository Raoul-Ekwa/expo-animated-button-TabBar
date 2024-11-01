import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import TabBarButton from './TabBarButton';
import Setting from '@/app/(tabs)/setting';



export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {
    // Composant TabBar qui affiche la barre de navigation avec les onglets
  
    return (
      <View style={styles.tabBar}>
        {/* Itère à travers les routes définies dans l'état pour créer les boutons d'onglets */}
        {state.routes.map((route, index) => {
          // Récupère les options associées à la route actuelle
          const { options } = descriptors[route.key];
          // Détermine le label à afficher pour l'onglet, en vérifiant d'abord tabBarLabel, puis title, et enfin le nom de la route
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          // Vérifie si l'onglet actuel est celui qui est focalisé
          const isFocused = state.index === index;
  
          // Fonction exécutée lors d'un appui sur l'onglet
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            // Si l'onglet n'est pas déjà focalisé et que l'événement n'est pas préventif, navigue vers la route
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          // Fonction exécutée lors d'un appui long sur l'onglet
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TabBarButton 
               key={route.name} // Utilise le nom de la route comme clé pour chaque bouton
               onPress={onPress} // Gestionnaire d'événement pour l'appui
               onLongPress={onLongPress} // Gestionnaire d'événement pour l'appui long
               isFocused={isFocused} // Indique si cet onglet est focalisé
               routeName={route.name} // Passe le nom de la route au bouton
               color={ isFocused ? "#673ab7" : "222"} // Définit la couleur basée sur l'état de focalisation
               label={label} // Passe le label à afficher pour cet onglet
            />
          );
        })}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
      tabBar: {
          position: 'absolute', 
          bottom: 50, 
          flexDirection: 'row', 
          justifyContent:'space-between', 
          alignItems:'center',
          marginHorizontal: 80, 
          backgroundColor:'#fff', 
          borderRadius: 35, 
          paddingVertical:15, 
          shadowColor:'#fff', // Couleur de l'ombre
          shadowOffset: {width: 0, height: 10}, // Décalage de l'ombre
          shadowRadius: 10, // Rayon de flou de l'ombre
          shadowOpacity: 0.1 // Opacité de l'ombre
      },
  });