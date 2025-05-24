import type { DeleteEmployeeByIdDTO } from '~~/domain/dtos';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class DeleteEmployeeByIdUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async execute(dto: DeleteEmployeeByIdDTO) {
    return this.employeeRepository.deleteById(dto.id);
  }
}
