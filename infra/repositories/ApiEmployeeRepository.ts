import type { HttpProviderAbstract } from '~~/domain/providers';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class ApiEmployeeRepository implements EmployeeRepository {
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public findAll: EmployeeRepository['findAll'] = async () => {
    return Promise.resolve(null as any);
  };

  public create: EmployeeRepository['create'] = async () => {
    return Promise.resolve(null as any);
  };

  public update: EmployeeRepository['update'] = async () => {
    return Promise.resolve(null as any);
  };

  public deleteById: EmployeeRepository['deleteById'] = async () => {
    return Promise.resolve(null as any);
  };
}
