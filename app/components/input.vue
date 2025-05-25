<script setup lang="ts">
interface Props {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  modelValue: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  disabled: false,
});

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="id">
      {{ label }}
    </label>

    <input
      :id="id"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500 disabled:border-gray-100 disabled:cursor-no-drop"
    />
  </div>
</template>
