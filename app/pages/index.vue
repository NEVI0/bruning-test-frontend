<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import type { EmployeeAbstract } from '~~/domain/entities';
import {
  makeFindAllEmployeesUseCase,
  makeDeleteEmployeeByIdUseCase,
} from '~~/factories/useCases';

const router = useRouter();

const isLoading = ref(false);
const hasError = ref(false);
const employees = ref<EmployeeAbstract[]>([]);

const handleFetchEmployees = async () => {
  try {
    isLoading.value = true;
    hasError.value = false;

    const foundEmployees = await makeFindAllEmployeesUseCase().execute();
    employees.value = foundEmployees;
  } catch (error) {
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

const handleUpdateEmployee = (employee: EmployeeAbstract) => {
  router.push({
    path: '/form',
    query: {
      data: JSON.stringify(employee),
    },
  });
};

const handleRemoveEmployee = async (id: string) => {
  try {
    await makeDeleteEmployeeByIdUseCase().execute({ id });
    handleFetchEmployees();
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};

onMounted(() => {
  handleFetchEmployees();
});
</script>

<template>
  <section
    v-if="isLoading"
    class="flex flex-col items-center justify-center flex-1 gap-8"
  >
    <Lottie name="searching" width="300px" height="150px" loop="true" />

    <div
      class="flex flex-col items-center justify-center gap-2 w-full md:w-1/2"
    >
      <h1 class="text-center text-2xl font-bold">Carregando...</h1>

      <p class="text-center text-gray-600">
        Buscando colaboradores cadastrados, aguarde alguns instantes...
      </p>
    </div>
  </section>

  <section
    v-else-if="hasError || !employees.length"
    class="flex flex-col items-center justify-center flex-1 gap-8"
  >
    <Lottie name="search" width="200px" height="200px" loop="false" />

    <div
      class="flex flex-col items-center justify-center gap-2 w-full md:w-1/2"
    >
      <h1 class="text-center text-2xl font-bold">Ops... nada encontrado!</h1>

      <p class="text-center text-gray-600">
        Não foi possivel encontrar os colaboradores cadastrados. Clique no botão
        abaixo para tentar novamente.
      </p>
    </div>

    <div class="flex items-center justify-center gap-4">
      <Button @click="handleFetchEmployees">Tentar novamente</Button>
    </div>
  </section>

  <template v-else>
    <section class="flex flex-col gap-2">
      <h2 class="text-2xl font-bold">Listagem de colaboradores</h2>
      <h3 class="text-gray-500 text-xl font-bold">
        Total de colaboradores: {{ employees.length }}
      </h3>
    </section>

    <section class="flex flex-col gap-4">
      <Employee
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
        @edit="handleUpdateEmployee"
        @remove="handleRemoveEmployee"
      />
    </section>
  </template>
</template>
