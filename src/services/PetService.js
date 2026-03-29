/**
 * Pet API service.
 * Handles all pet-related API operations.
 */

import { API_TIMEOUT } from '../constants/colors';

const API_BASE_URL = 'https://api.petcare.com';

class PetService {
  /**
   * Fetches the current user's pets.
   */
  async getPets() {
    try {
      const response = await fetch(`${API_BASE_URL}/pets`, {
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error fetching pets');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Fetches details for a specific pet.
   */
  async getPetById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error fetching pet');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Creates a new pet.
   */
  async createPet(pet) {
    try {
      const response = await fetch(`${API_BASE_URL}/pets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error creating pet');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Updates an existing pet.
   */
  async updatePet(id, pet) {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pet),
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error updating pet');
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deletes a pet.
   */
  async deletePet(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: 'DELETE',
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error deleting pet');
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new PetService();
