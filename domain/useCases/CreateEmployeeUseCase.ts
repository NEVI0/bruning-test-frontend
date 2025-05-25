import { Employee } from '~~/domain/entities';

import type { CreateEmployeeDTO } from '~~/domain/dtos';
import type { EmployeeRepository } from '~~/domain/repositories';

export default class CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  public async execute(dto: CreateEmployeeDTO) {
    this.validateFields(dto);

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

  private validateFields(dto: CreateEmployeeDTO) {
    if (!dto.id) {
      throw new Error('O código do colaborador é obrigatório!');
    }

    if (!dto.name) {
      throw new Error('O nome do colaborador é obrigatório!');
    }

    if (!dto.nickname) {
      throw new Error('O apelido do colaborador é obrigatório!');
    }

    if (!dto.parents.father || !dto.parents.mother) {
      throw new Error('O nome do pai e da mãe do colaborador é obrigatório!');
    }

    if (!dto.document) {
      throw new Error('O CPF do colaborador é obrigatório!');
    }

    if (!dto.birthdate) {
      throw new Error('A data de nascimento do colaborador é obrigatória!');
    }

    if (!dto.jobDate) {
      throw new Error('A data de admissão do colaborador é obrigatória!');
    }
  }
}
