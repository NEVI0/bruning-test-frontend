<script>
export default {
  data() {
    return {
      form: {
        code: '',
        name: '',
        nickname: '',
        father: '',
        mother: '',
        document: '',
        birthday: '',
        job: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.form);
      // Example: send data via axios to an API
      // this.$axios.post('/api/submit', this.form)
    },
    clearForm() {
      // Reset all form fields to empty strings
      Object.keys(this.form).forEach((key) => {
        this.form[key] = '';
      });
    },
  },
};
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="text-2xl font-bold">Formulário</h2>
    <h3 class="text-gray-500 text-xl font-bold">Cadastro</h3>
  </section>

  <form @submit.prevent="handleSubmit" class="flex flex-col gap-16">
    <section class="flex flex-col gap-4">
      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input id="code" label="Código" type="text" v-model="form.code" />

        <Input
          id="name"
          label="Nome completo"
          type="text"
          v-model="form.name"
        />

        <Input
          id="nickname"
          label="Apelido"
          type="text"
          v-model="form.nickname"
        />
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input
          id="father"
          label="Nome do pai"
          type="text"
          v-model="form.father"
        />

        <Input
          id="mother"
          label="Nome da mãe"
          type="text"
          v-model="form.mother"
        />
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <Input
          id="document"
          label="CPF"
          type="text"
          placeholder="___.___.___-__"
          v-model="form.document"
        />

        <Input
          id="birthday"
          label="Data de nascimento"
          type="text"
          placeholder="__/__/__"
          v-model="form.birthday"
        />

        <Input
          id="job"
          label="Cargo"
          type="text"
          placeholder="__/__/__"
          v-model="form.job"
        />
      </div>
    </section>

    <section
      class="flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-center gap-4 w-full md:w-auto">
        <button
          type="button"
          class="cursor-pointer w-full md:w-[144px] h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors text-gray-500 bg-gray-500/15 hover:bg-gray-500/25"
        >
          Voltar
        </button>

        <button
          type="button"
          @click="clearForm"
          class="cursor-pointer w-full md:w-[144px] h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors text-gray-500 bg-gray-500/15 hover:bg-gray-500/25"
        >
          Limpar
        </button>
      </div>

      <button
        type="submit"
        class="cursor-pointer w-full md:w-[144px] h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors text-green-500 bg-green-500/15 hover:bg-green-500/25"
      >
        Salvar
      </button>
    </section>
  </form>
</template>
