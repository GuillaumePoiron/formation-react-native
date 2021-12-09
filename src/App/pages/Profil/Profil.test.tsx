/**
 * @format
 */

import 'react-native';
import React from 'react';
import Profil from './Profil';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Profil />', () => {
  it('Profil render correctly', () => {
    renderer.create(<Profil />);
  });
});
