import React from 'react';
import {Button, Text, View} from 'react-native';

import Box from '../components/box';

function SearchView({navigation}) {
  return (
    <Box>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="red" mt={20} />
    </Box>
  );
}

export default SearchView;
