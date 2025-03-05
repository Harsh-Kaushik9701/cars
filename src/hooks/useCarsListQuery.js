import { useQuery } from 'react-query';

export function useCarsListQuery(DealerId) {
  return useQuery('cars', async () => {
    const response = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    return response.json();
  });
}