import React from 'react';
import {Button} from 'react-native';

import Box from '../components/box';

function SearchView({navigation}) {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="red" mt={20} />
    </Box>
  );
}

export default SearchView;
