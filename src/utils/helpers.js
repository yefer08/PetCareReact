/**
 * General utility functions.
 * Contains reusable helpers for the app.
 */

/**
 * Formats a date using the standard app locale format.
 */
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

/**
 * Calculates age in years from a birth date.
 */
export const calculateAge = (birthDate) => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

/**
 * Validates an email address.
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a phone number.
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+\d{1,3}[\s.-]?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4,6}$/;
  return phoneRegex.test(phone);
};

/**
 * Truncates text to a maximum length.
 */
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

/**
 * Capitalizes the first letter of a string.
 */
export const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Waits for a given number of milliseconds.
 */
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
