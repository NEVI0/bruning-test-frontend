import { CreateEmployeeUseCase } from '~~/domain/useCases';
import { makeEmployeeRepository } from '~~/factories/repositories';

let instance: CreateEmployeeUseCase | null = null;

export default function makeCreateEmployeeUseCase() {
  if (!instance) {
    const employeeRepository = makeEmployeeRepository();
    instance = new CreateEmployeeUseCase(employeeRepository);
  }

  return instance;
}
