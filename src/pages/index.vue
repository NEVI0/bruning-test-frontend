<script setup lang="ts">
import Employee from '@/components/employee.vue';

const employees = [
  { id: 1, name: 'John Doe', birthday: '10/01/1990' },
  { id: 2, name: 'Jane Doe', birthday: '10/01/1990' },
  { id: 3, name: 'John Doe', birthday: '10/01/1990' },
  { id: 4, name: 'Jane Doe', birthday: '10/01/1990' },
];
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="text-2xl font-bold">Listagem de colaboradores</h2>
    <h3 class="text-gray-500 text-xl font-bold">Total de colaboradores: 10</h3>
  </section>

  <section class="flex flex-col gap-4">
    <Employee
      v-for="employee in employees"
      :key="employee.id"
      :employee="employee"
    />
  </section>
</template>
