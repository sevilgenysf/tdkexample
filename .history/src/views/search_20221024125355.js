import React from 'react';
import {Button, Text, View} from 'react-native';

import Box from '../components/box';

function SearchView({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Box size={20} bg="red" />
    </View>
  );
}

export default SearchView;
