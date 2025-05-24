import { UpdateEmployeeUseCase } from '~~/domain/useCases';
import { makeEmployeeRepository } from '~~/factories/repositories';

let instance: UpdateEmployeeUseCase | null = null;

export default function makeUpdateEmployeeUseCase() {
  if (!instance) {
    const employeeRepository = makeEmployeeRepository();
    instance = new UpdateEmployeeUseCase(employeeRepository);
  }

  return instance;
}
