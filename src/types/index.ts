/**
 * Tipos principales de la aplicación
 */

export interface Pet {
  id: string;
  name: string;
  type: 'dog' | 'cat' | 'other';
  breed: string;
  age: number;
  healthStatus: 'healthy' | 'sick' | 'treatment';
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  pets: Pet[];
}

export interface Appointment {
  id: string;
  petId: string;
  veterinarian: string;
  date: Date;
  description: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}
