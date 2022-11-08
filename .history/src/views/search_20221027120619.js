import React from 'react'
import { Button } from 'react-native'

import BoxCenter from '../components/box-center'

function SearchView({ navigation }) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </BoxCenter>
  )
}

export default SearchView
