/**
 * Pruebas de funciones utilitarias
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
    it('debería formatear una fecha correctamente', () => {
      const date = new Date('2024-03-27');
      const result = formatDate(date);
      expect(result).toContain('27');
      expect(result).toContain('marzo');
    });
  });

  describe('isValidEmail', () => {
    it('debería validar un email correcto', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user@domain.co.uk')).toBe(true);
    });

    it('debería rechazar emails inválidos', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('user@')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
    });
  });

  describe('isValidPhone', () => {
    it('debería validar un número de teléfono correcto', () => {
      expect(isValidPhone('123-456-7890')).toBe(true);
      expect(isValidPhone('+1 (123) 456-7890')).toBe(true);
    });

    it('debería rechazar números inválidos', () => {
      expect(isValidPhone('abc')).toBe(false);
      expect(isValidPhone('123')).toBe(false);
    });
  });

  describe('truncateText', () => {
    it('debería dejar el texto sin cambios si es más corto que el máximo', () => {
      expect(truncateText('Hello', 10)).toBe('Hello');
    });

    it('debería truncar el texto si excede el máximo', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('debería poner en mayúscula la primera letra', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
      expect(capitalizeFirstLetter('world')).toBe('World');
    });

    it('debería dejar cadenas vacías como están', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });
  });
});
