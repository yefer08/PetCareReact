/**
 * Button component tests
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/Button';

describe('Button Component', () => {
  it('renders button with the correct title', () => {
    const mockPress = jest.fn();
    render(<Button onPress={mockPress} title="Prueba" />);

    const button = screen.getByText('Prueba');
    expect(button).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockPress = jest.fn();
    render(<Button onPress={mockPress} title="Click" />);

    const button = screen.getByText('Click');
    fireEvent.press(button);

    expect(mockPress).toHaveBeenCalled();
  });

  it('does not call onPress when disabled', () => {
    const mockPress = jest.fn();
    render(<Button onPress={mockPress} title="Deshabilitado" disabled={true} />);

    const button = screen.getByText('Deshabilitado');
    fireEvent.press(button);

    expect(mockPress).not.toHaveBeenCalled();
  });

  it('renders with secondary variant', () => {
    const mockPress = jest.fn();
    const { root } = render(<Button onPress={mockPress} title="Secondary" variant="secondary" />);

    expect(root).toBeTruthy();
  });
});
