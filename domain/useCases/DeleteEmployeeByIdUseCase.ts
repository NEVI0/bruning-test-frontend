import type { DeleteEmployeeByIdDTO } from '~~/domain/dtos';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class DeleteEmployeeByIdUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async execute(dto: DeleteEmployeeByIdDTO) {
    this.validateFields(dto);

    return this.employeeRepository.deleteById(dto.id);
  }

  private validateFields(dto: DeleteEmployeeByIdDTO) {
    if (!dto.id) {
      throw new Error('O código do colaborador é obrigatório!');
    }
  }
}
