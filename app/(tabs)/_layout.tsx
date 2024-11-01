import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar';


const TabLayout = () => {
  return (
   <Tabs tabBar={props => <TabBar {...props} />}>
    <Tabs.Screen name='index' options={{title:'Acceuil'}}/>
    <Tabs.Screen name='explore' options={{title:'Explorez'}}/>
    <Tabs.Screen name='setting' options={{title:'Paramètre'}}/>
    <Tabs.Screen name='Profile' options={{title:'Profil'}}/>
   </Tabs>
  )
}

export default TabLayout;