export const API_BASE_URL = 'https://example.com/api';

export async function apiClient(endpoint: string) {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  return response.json();
}
