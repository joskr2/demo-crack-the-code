import { Demo } from '@/intefaces/interface';
import axios from 'axios';

export async function fetchLearningPath(): Promise<Demo> {
  const apiUrl = 'https://dev.backend.devcrackthecode.net/api/learning-paths-all/ruta-de-aprendizaje-para-desarrollo-de-videojuegos/';

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los cursos:', error);
    throw error;
  }
}
