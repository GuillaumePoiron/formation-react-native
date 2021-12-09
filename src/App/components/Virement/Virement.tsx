import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import {styles} from './Virement.style';

interface VirementProps {}
const initialState = {};

const Virement: React.FC<VirementProps> = () => {
  const [state, setstate] = useState(initialState);

  return (
    <View data-testID="Virement" style={styles.Virement}>
      <View />
    </View>
  );
};

export default Virement;
