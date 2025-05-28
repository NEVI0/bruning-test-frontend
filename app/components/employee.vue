<script setup lang="ts">
import type { EmployeeAbstract } from '~~/domain/entities';

interface Props {
  isRemoving?: boolean;
  employee: EmployeeAbstract;
}

const props = withDefaults(defineProps<Props>(), {
  isRemoving: false,
});

const emit = defineEmits<{
  (e: 'view', employee: EmployeeAbstract): void;
  (e: 'edit', employee: EmployeeAbstract): void;
  (e: 'remove', id: string): void;
}>();

const handleView = () => {
  emit('view', props.employee);
};

const handleEdit = () => {
  emit('edit', props.employee);
};

const handleRemove = () => {
  emit('remove', props.employee.id);
};
</script>

<template>
  <div
    class="flex flex-col md:flex-row gap-6 items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors px-8 py-6 rounded-2xl"
  >
    <div class="flex flex-col gap-1">
      <p class="font-bold">
        <strong class="text-green-500">#</strong>{{ employee.id }} -
        {{ employee.name }}
      </p>

      <small class="text-gray-500 text-sm">
        Nascimento: {{ employee.birthdate }}
      </small>
    </div>

    <div class="flex items-center gap-4">
      <button
        @click="handleView"
        :disabled="isRemoving"
        class="cursor-pointer disabled:cursor-not-allowed w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-green-500 hover:bg-green-500/15 transition-colors"
      >
        <Icon name="lucide:external-link" style="width: 24px; height: 24px" />
      </button>

      <div class="w-[1px] h-[16px] bg-gray-300 rounded-full" />

      <button
        @click="handleEdit"
        :disabled="isRemoving"
        class="cursor-pointer disabled:cursor-not-allowed w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-green-500 hover:bg-green-500/15 transition-colors"
      >
        <Icon name="lucide:pen-line" style="width: 24px; height: 24px" />
      </button>

      <div class="w-[1px] h-[16px] bg-gray-300 rounded-full" />

      <div
        v-if="isRemoving"
        class="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl"
      >
        <Spinner />
      </div>

      <button
        v-else
        @click="handleRemove"
        class="cursor-pointer w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-red-600 hover:bg-red-600/15 transition-colors"
      >
        <Icon name="lucide:trash-2" style="width: 24px; height: 24px" />
      </button>
    </div>
  </div>
</template>
