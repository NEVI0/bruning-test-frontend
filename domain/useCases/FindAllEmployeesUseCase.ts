import type { EmployeeRepository } from '~~/domain/repositories';

export default class FindAllEmployeesUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async execute() {
    return this.employeeRepository.findAll();
  }
}
