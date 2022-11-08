import React from 'react'
import { Button } from 'react-native'

import BoxCenter from '../components/box-center'
import { Logo } from '../components/icons'

function SearchView({ navigation }) {
  return (
    <BoxCenter bg="textLight">
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Logo color="red" />
    </BoxCenter>
  )
}

export default SearchView
