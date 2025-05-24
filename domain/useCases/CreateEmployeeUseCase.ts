import { Employee } from '~~/domain/entities';

import type { CreateEmployeeDTO } from '~~/domain/dtos';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async execute(dto: CreateEmployeeDTO) {
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
