<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

import { makeCreateEmployeeUseCase } from '~~/factories/useCases';

const router = useRouter();

const isLoading = ref(false);
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

    await makeCreateEmployeeUseCase().execute({
      id: formData.value.code,
      name: formData.value.name,
      nickname: formData.value.nickname,
      parents: {
        father: formData.value.father,
        mother: formData.value.mother,
      },
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

  if (queryData) {
    formData.value = JSON.parse(queryData);
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
        <Input id="code" label="Código" type="text" v-model="formData.code" />

        <Input
          id="name"
          label="Nome completo"
          type="text"
          v-model="formData.name"
        />

        <Input
          id="nickname"
          label="Apelido"
          type="text"
          v-model="formData.nickname"
        />
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input
          id="father"
          label="Nome do pai"
          type="text"
          v-model="formData.father"
        />

        <Input
          id="mother"
          label="Nome da mãe"
          type="text"
          v-model="formData.mother"
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
        />

        <Input
          id="birthday"
          label="Data de nascimento"
          type="text"
          placeholder="__/__/__"
          v-model="formData.birthday"
        />

        <Input
          id="job"
          label="Cargo"
          type="text"
          placeholder="__/__/__"
          v-model="formData.job"
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
      class="flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-center gap-4 w-full md:w-auto">
        <Button class="w-full md:w-[144px]" @click="handleGoBack"
          >Voltar</Button
        >
        <Button class="w-full md:w-[144px]" @click="handleClearForm"
          >Limpar</Button
        >
      </div>

      <Button class="w-full md:w-[144px]" variant="primary" type="submit">{{
        isLoading ? 'Salvando...' : 'Salvar'
      }}</Button>
    </section>
  </form>
</template>
