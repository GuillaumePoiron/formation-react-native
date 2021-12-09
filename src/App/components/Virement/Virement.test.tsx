/**
 * @format
 */

import 'react-native';
import React from 'react';
import Virement from './Virement';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Virement />', () => {
  it('Virement render correctly', () => {
    renderer.create(<Virement />);
  });
});
