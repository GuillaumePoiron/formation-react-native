/**
 * @format
 */

import 'react-native';
import React from 'react';
import Modal from './Modal';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Modal />', () => {
  it('Modal render correctly', () => {
    renderer.create(<Modal />);
  });
});
