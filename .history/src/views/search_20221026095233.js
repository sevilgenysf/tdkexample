import React from 'react';
import {Button} from 'react-native';

import Box from '../components/box';
import BoxCenter from '../components/box-center';

import {Bookmark} from '../components/icons';

function SearchView({navigation}) {
  return (
    <BoxCenter>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </BoxCenter>
  );
}

export default SearchView;
