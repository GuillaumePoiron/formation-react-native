/**
 * @format
 */

import 'react-native';
import React from 'react';
import BottomNavBar from './BottomNavBar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<BottomNavBar />', () => {
  it('BottomNavBar render correctly', () => {
    renderer.create(<BottomNavBar />);
  });
});
