import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from './styles'
import SearchBar from '../components/SearchBar'

const Search = () => {
  return (
    <View style={[style.container, { justifyContent: "flex-start" }]}>
      <SafeAreaView>
        <SearchBar />
      </SafeAreaView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})