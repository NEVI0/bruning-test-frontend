import type { HttpProviderAbstract } from '~~/domain/providers';
import { FetchHttpProvider } from '~~/infra/providers';

let instance: HttpProviderAbstract | null = null;

export default function makeHttpProvider() {
  if (!instance) {
    const baseUrl = useRuntimeConfig().public.PHP_API_BASE_URL as string;
    instance = new FetchHttpProvider(baseUrl);
  }

  return instance;
}
