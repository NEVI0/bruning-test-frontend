import type { HttpProviderAbstract } from '~~/domain/providers';
import { FetchHttpProvider } from '~~/infra/providers';

let instance: HttpProviderAbstract | null = null;

export default function makeHttpProvider() {
  if (!instance) {
    instance = new FetchHttpProvider();
  }

  return instance;
}
