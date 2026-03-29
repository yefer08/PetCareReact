/**
 * Reusable button component.
 * Provides consistent button styles across the app.
 */

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES } from '../constants/colors';

const Button = ({ onPress, title, variant = 'primary', disabled = false, style }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButton;
      case 'danger':
        return styles.dangerButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'secondary':
        return styles.secondaryButtonText;
      default:
        return styles.buttonText;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[styles.baseButton, getButtonStyle(), disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: COLORS.secondary,
  },
  dangerButton: {
    backgroundColor: COLORS.error,
  },
  disabled: {
    opacity: 0.55,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: '800',
  },
  secondaryButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: '800',
  },
});

export default Button;
