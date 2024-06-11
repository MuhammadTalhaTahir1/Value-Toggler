import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const data=useSelector((state)=>state)
    console.log(data)
  return (
    <View>
      <Text>
        Rleasing App
      </Text>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})