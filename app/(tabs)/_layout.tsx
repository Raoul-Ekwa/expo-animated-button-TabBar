import { StyleSheet, Text, View } from 'react-native'
import { Tabs } from 'expo-router'
import { TabBar } from '@/components/TabBar';


const TabLayout = () => {
  return (
   <Tabs tabBar={props => <TabBar {...props} />}>
    <Tabs.Screen name='index' options={{title:'Home'}}/>
    <Tabs.Screen name='explore' options={{title:'Explore'}}/>
    <Tabs.Screen name='setting' options={{title:'Setting'}}/>
   </Tabs>
  )
}

export default TabLayout;