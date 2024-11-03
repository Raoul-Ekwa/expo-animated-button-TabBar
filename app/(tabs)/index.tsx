import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Page = () => {
  return (
   <View style={styles.container}>
    <Text>Home Screen</Text>
   </View>
  )
}

export default Page;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ff69b4' //code de couleur Santa Lucia '#ff69b4' 
    }
})