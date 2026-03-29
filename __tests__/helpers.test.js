/**
 * Utility function tests
 */

import {
  formatDate,
  isValidEmail,
  isValidPhone,
  truncateText,
  capitalizeFirstLetter,
} from '../src/utils/helpers';

describe('Utility Functions', () => {
  describe('formatDate', () => {
    it('formats a date correctly', () => {
      const date = new Date('2024-03-27');
      const result = formatDate(date);
      expect(result).toContain('27');
      expect(result).toContain('marzo');
    });
  });

  describe('isValidEmail', () => {
    it('validates a correct email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user@domain.co.uk')).toBe(true);
    });

    it('rejects invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('validates a correct phone number', () => {
      expect(isValidPhone('123-456-7890')).toBe(true);
      expect(isValidPhone('+1 (123) 456-7890')).toBe(true);
    });

    it('rejects invalid phone numbers', () => {
      expect(isValidPhone('abc')).toBe(false);
      expect(isValidPhone('123')).toBe(false);
    });
  });

  describe('truncateText', () => {
    it('keeps text unchanged when below max length', () => {
      expect(truncateText('Hello', 10)).toBe('Hello');
    });

    it('truncates text when it exceeds max length', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('capitalizes the first letter', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
      expect(capitalizeFirstLetter('world')).toBe('World');
    });

    it('keeps empty strings unchanged', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });
  });
});
