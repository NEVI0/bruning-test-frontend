<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'primary';
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'default',
  class: '',
});

const baseClasses =
  'outline-none cursor-pointer h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors';

const variantClasses = {
  primary: 'text-green-500 bg-green-500/15 hover:bg-green-500/25',
  default: 'text-gray-500 bg-gray-500/15 hover:bg-gray-500/25',
};

const buttonClasses = computed(() => {
  return `${baseClasses} ${variantClasses[props.variant]} ${props.class}`;
});
</script>

<template>
  <button :type="type" :class="buttonClasses">
    <slot />
  </button>
</template>
