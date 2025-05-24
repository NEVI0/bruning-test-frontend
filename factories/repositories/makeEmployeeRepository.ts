import type { EmployeeRepository } from '~~/domain/repositories';
import { ApiEmployeeRepository } from '~~/infra/repositories';

import { makeHttpProvider } from '../providers';

let instance: EmployeeRepository | null = null;

export default function makeEmployeeRepository() {
  if (!instance) {
    const httpProvider = makeHttpProvider();
    instance = new ApiEmployeeRepository(httpProvider);
  }

  return instance;
}
