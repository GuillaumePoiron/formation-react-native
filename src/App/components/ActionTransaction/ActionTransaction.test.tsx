/**
 * @format
 */

import 'react-native';
import React from 'react';
import ActionTransaction from './ActionTransaction';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<ActionTransaction />', () => {
  it('ActionTransaction render correctly', () => {
    renderer.create(<ActionTransaction />);
  });
});
