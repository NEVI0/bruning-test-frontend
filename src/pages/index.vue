<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const employees = ref([
  { id: 1, name: 'John Doe', birthday: '10/01/1990' },
  { id: 2, name: 'Jane Doe', birthday: '10/01/1990' },
  { id: 3, name: 'John Doe', birthday: '10/01/1990' },
  { id: 4, name: 'Jane Doe', birthday: '10/01/1990' },
]);

const sampleData = ref({
  code: '123',
  name: 'John Doe',
  nickname: 'Johnny',
  father: 'James Doe',
  mother: 'Jane Doe',
  document: '123.456.789-00',
  birthday: '01/01/1990',
  job: 'Developer',
});

const goToForm = (employee: (typeof employees.value)[0]) => {
  router.push({
    path: '/form',
    query: {
      data: JSON.stringify({
        ...sampleData.value,
        name: employee.name,
        birthday: employee.birthday,
      }),
    },
  });
};

const removeEmployee = (id: number) => {
  employees.value = employees.value.filter((employee) => employee.id !== id);
};

const addEmployee = (employee: (typeof employees.value)[0]) => {
  employees.value.push(employee);
};

const updateEmployee = (
  id: number,
  updatedData: Partial<(typeof employees.value)[0]>
) => {
  const index = employees.value.findIndex((emp) => emp.id === id);
  if (index !== -1) {
    employees.value[index] = { ...employees.value[index], ...updatedData };
  }
};
</script>

<template>
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
      @edit="goToForm"
      @remove="removeEmployee"
    />
  </section>
</template>
