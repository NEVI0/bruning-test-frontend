import type { EmployeeAbstract } from '~~/domain/entities';

export default interface EmployeeRepositoryAbstract {
  findAll(): Promise<EmployeeAbstract[]>;
  create(employee: EmployeeAbstract): Promise<EmployeeAbstract>;
  update(employee: EmployeeAbstract): Promise<EmployeeAbstract>;
  deleteById(id: string): Promise<void>;
}
