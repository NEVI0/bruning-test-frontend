import { FindAllEmployeesUseCase } from '~~/domain/useCases';
import { makeEmployeeRepository } from '~~/factories/repositories';

let instance: FindAllEmployeesUseCase | null = null;

export default function makeFindAllEmployeesUseCase() {
  if (!instance) {
    const employeeRepository = makeEmployeeRepository();
    instance = new FindAllEmployeesUseCase(employeeRepository);
  }

  return instance;
}
