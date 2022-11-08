import React from 'react'
import { Button } from 'react-native'

import BoxCenter from '../components/box-center'
import { Logo, Search } from '../components/icons'

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
