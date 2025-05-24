import type { EmployeeAbstract } from '~~/domain/entities';
import type { HttpProviderAbstract } from '~~/domain/providers';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class ApiEmployeeRepository implements EmployeeRepository {
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public findAll: EmployeeRepository['findAll'] = async () => {
    const response = await this.httpProvider.get<EmployeeAbstract[]>(
      '/employees'
    );

    return response;
  };

  public create: EmployeeRepository['create'] = async (employee) => {
    const payload = {
      id: employee.id,
      name: employee.name,
      nickname: employee.nickname,
      parents: employee.parents,
      document: employee.document,
      birthdate: employee.birthdate,
      jobDate: employee.jobDate,
    };

    const response = await this.httpProvider.post<EmployeeAbstract>(
      '/employees',
      payload
    );

    return response;
  };

  public update: EmployeeRepository['update'] = async (employee) => {
    const payload = {
      name: employee.name,
      nickname: employee.nickname,
      parents: employee.parents,
      document: employee.document,
      birthdate: employee.birthdate,
      jobDate: employee.jobDate,
    };

    const response = await this.httpProvider.put<EmployeeAbstract>(
      `/employees/${employee.id}`,
      payload
    );

    return response;
  };

  public deleteById: EmployeeRepository['deleteById'] = async (id) => {
    await this.httpProvider.delete(`/employees/${id}`);
  };
}
