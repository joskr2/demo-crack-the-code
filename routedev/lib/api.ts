import { Demo } from '@/interfaces/interfaces';
import axios from 'axios';

export async function fetchCourses(): Promise<Demo> {
  try {
    const response = await axios.get('https://dev.backend.devcrackthecode.net/api/learning-paths/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    throw error;
  }
}
