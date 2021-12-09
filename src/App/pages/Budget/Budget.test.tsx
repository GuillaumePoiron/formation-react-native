/**
 * @format
 */

import 'react-native';
import React from 'react';
import Budget from './Budget';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Budget />', () => {
  it('Budget render correctly', () => {
    renderer.create(<Budget />);
  });
});
