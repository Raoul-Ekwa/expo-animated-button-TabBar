import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import TabBarButton from './TabBarButton';
import Setting from '@/app/(tabs)/setting';



export function TabBar({ state, descriptors, navigation } : BottomTabBarProps) {

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton 
             key={route.name}
             onPress={onPress}
             onLongPress={onLongPress}
             isFocused={isFocused}
             routeName={route.name}
             color={ isFocused ? "#673ab7" : "222"}
             label={label}
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
        shadowColor:'#000',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 10,
        shadowOpacity: 0.1
        
        
    },
})