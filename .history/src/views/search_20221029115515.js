import React from 'react'
import BoxCenter from '../components/box-center'

import { Button } from 'react-native'
import { Logo } from '../components/icons'

import Search from '../components/search'

function SearchView({ navigation }) {
  return (
    <BoxCenter bg="atasozleriLight">
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo color="blue" width={100} />

      <Search />
    </BoxCenter>
  )
}

export default SearchView
