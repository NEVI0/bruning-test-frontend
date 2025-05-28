import { Employee, type EmployeeAbstract } from '~~/domain/entities';
import type { HttpProviderAbstract } from '~~/domain/providers';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class ApiEmployeeRepository implements EmployeeRepository {
  constructor(private readonly httpProvider: HttpProviderAbstract) {}

  public findAll: EmployeeRepository['findAll'] = async () => {
    const response = await this.httpProvider.get<{
      count: number;
      employees: EmployeeAbstract[];
    }>('/employee');

    return response.employees.map((employee) => new Employee(employee));
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

    await this.httpProvider.post('/employee', payload);
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

    await this.httpProvider.put(`/employee/${employee.id}`, payload);
  };

  public deleteById: EmployeeRepository['deleteById'] = async (id) => {
    await this.httpProvider.delete(`/employee/${id}`);
  };
}
