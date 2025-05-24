import { Employee } from '~~/domain/entities';

import type { UpdateEmployeeDTO } from '~~/domain/dtos';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class UpdateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async execute(dto: UpdateEmployeeDTO) {
    return this.employeeRepository.create(
      new Employee({
        id: dto.id,
        name: dto.name,
        nickname: dto.nickname,
        parents: dto.parents,
        document: dto.document,
        birthdate: dto.birthdate,
        jobDate: dto.jobDate,
      })
    );
  }
}
