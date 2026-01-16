import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../screens/Home/HomeScreen';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen />);
    expect(getByText('React Native Boilerplate 🚀')).toBeTruthy();
  });
});
