import type { EmployeeAbstract } from '~~/domain/entities';

export default interface EmployeeRepositoryAbstract {
  findAll(): Promise<EmployeeAbstract[]>;
  create(employee: EmployeeAbstract): Promise<void>;
  update(employee: EmployeeAbstract): Promise<void>;
  deleteById(id: string): Promise<void>;
}
