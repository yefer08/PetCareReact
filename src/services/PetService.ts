/**
 * Servicio de API para gestión de mascotas
 * Maneja todas las operaciones relacionadas con mascotas
 */

import { API_TIMEOUT } from '@constants/colors';
import { Pet } from '@types/index';

const API_BASE_URL = 'https://api.petcare.com';

class PetService {
  /**
   * Obtiene la lista de mascotas del usuario
   */
  async getPets(): Promise<Pet[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/pets`, {
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error fetching pets');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in getPets:', error);
      throw error;
    }
  }

  /**
   * Obtiene los detalles de una mascota específica
   */
  async getPetById(id: string): Promise<Pet> {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error fetching pet');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in getPetById:', error);
      throw error;
    }
  }

  /**
   * Crea una nueva mascota
   */
  async createPet(pet: Omit<Pet, 'id'>): Promise<Pet> {
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
      console.error('Error in createPet:', error);
      throw error;
    }
  }

  /**
   * Actualiza una mascota existente
   */
  async updatePet(id: string, pet: Partial<Pet>): Promise<Pet> {
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
      console.error('Error in updatePet:', error);
      throw error;
    }
  }

  /**
   * Elimina una mascota
   */
  async deletePet(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/pets/${id}`, {
        method: 'DELETE',
        timeout: API_TIMEOUT,
      });

      if (!response.ok) {
        throw new Error('Error deleting pet');
      }
    } catch (error) {
      console.error('Error in deletePet:', error);
      throw error;
    }
  }
}

export default new PetService();
