<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import {
  makeCreateEmployeeUseCase,
  makeUpdateEmployeeUseCase,
} from '~~/factories/useCases';

const router = useRouter();

const isLoading = ref(false);
const isViewing = ref(false);
const errorMessage = ref('');
const formData = ref({
  code: '',
  name: '',
  nickname: '',
  father: '',
  mother: '',
  document: '',
  birthday: '',
  job: '',
});

const isEditing = computed(() => {
  return !!useRoute().query.data;
});

const submitButtonText = computed(() => {
  if (isLoading.value) {
    return 'Salvando...';
  }

  return 'Salvar';
});

const handleGoBack = () => {
  router.back();
};

const handleClearForm = () => {
  errorMessage.value = '';
  formData.value = {
    code: '',
    name: '',
    nickname: '',
    father: '',
    mother: '',
    document: '',
    birthday: '',
    job: '',
  };
};

const handleSubmitForm = async () => {
  try {
    isLoading.value = true;

    const useCase = isEditing.value
      ? makeUpdateEmployeeUseCase()
      : makeCreateEmployeeUseCase();

    await useCase.execute({
      id: formData.value.code,
      name: formData.value.name,
      nickname: formData.value.nickname,
      father: formData.value.father,
      mother: formData.value.mother,
      document: formData.value.document,
      birthdate: formData.value.birthday,
      jobDate: formData.value.job,
    });

    router.push('/');
  } catch (error) {
    errorMessage.value = error.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  const queryData = useRoute().query.data;
  const viewing = useRoute().query.viewing;

  if (viewing) {
    isViewing.value = true;
  }

  if (queryData) {
    const employee = JSON.parse(queryData);

    formData.value = {
      code: employee.id,
      name: employee.name,
      nickname: employee.nickname,
      father: employee.parents.father,
      mother: employee.parents.mother,
      document: employee.document,
      birthday: employee.birthdate,
      job: employee.jobDate,
    };
  }
});
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="text-2xl font-bold">Formulário</h2>
    <h3 class="text-gray-500 text-xl font-bold">Cadastro</h3>
  </section>

  <form @submit.prevent="handleSubmitForm" class="flex flex-col gap-16">
    <section class="flex flex-col gap-4">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input
          id="code"
          label="Código"
          type="text"
          v-model="formData.code"
          :disabled="isEditing || isViewing"
        />

        <Input
          id="name"
          label="Nome completo"
          type="text"
          v-model="formData.name"
          :disabled="isViewing"
        />

        <Input
          id="nickname"
          label="Apelido"
          type="text"
          v-model="formData.nickname"
          :disabled="isViewing"
        />
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input
          id="father"
          label="Nome do pai"
          type="text"
          v-model="formData.father"
          :disabled="isViewing"
        />

        <Input
          id="mother"
          label="Nome da mãe"
          type="text"
          v-model="formData.mother"
          :disabled="isViewing"
        />
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input
          id="document"
          label="CPF"
          type="text"
          placeholder="___.___.___-__"
          v-model="formData.document"
          :disabled="isViewing"
        />

        <Input
          id="birthday"
          label="Data de nascimento"
          type="text"
          placeholder="__/__/__"
          v-model="formData.birthday"
          :disabled="isViewing"
        />

        <Input
          id="job"
          label="Cargo"
          type="text"
          placeholder="__/__/__"
          v-model="formData.job"
          :disabled="isViewing"
        />
      </div>
    </section>

    <section
      v-if="errorMessage"
      class="flex items-center gap-4 px-8 py-4 border border-red-500 bg-red-500/10 rounded-2xl"
    >
      <Icon
        name="lucide:alert-circle"
        class="text-red-500"
        style="width: 24px; height: 24px"
      />

      <p class="text-red-500 font-medium">{{ errorMessage }}</p>
    </section>

    <section
      v-if="!isViewing"
      class="flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-center gap-4 w-full md:w-auto">
        <Button class="w-full md:w-[144px]" @click="handleGoBack">
          Voltar
        </Button>

        <Button class="w-full md:w-[144px]" @click="handleClearForm">
          Limpar
        </Button>
      </div>

      <Button class="w-full md:w-[144px]" variant="primary" type="submit">
        {{ submitButtonText }}
      </Button>
    </section>
  </form>
</template>
