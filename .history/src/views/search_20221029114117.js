import React from 'react'
import { Button } from 'react-native'

import Search from '../components/search'
import BoxCenter from '../components/box-center'
import { Logo } from '../components/icons'

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
