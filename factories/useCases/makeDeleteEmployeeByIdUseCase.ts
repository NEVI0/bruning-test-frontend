import { DeleteEmployeeByIdUseCase } from '~~/domain/useCases';
import { makeEmployeeRepository } from '~~/factories/repositories';

let instance: DeleteEmployeeByIdUseCase | null = null;

export default function makeDeleteEmployeeByIdUseCase() {
  if (!instance) {
    const employeeRepository = makeEmployeeRepository();
    instance = new DeleteEmployeeByIdUseCase(employeeRepository);
  }

  return instance;
}
