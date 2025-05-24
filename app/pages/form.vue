<script>
export default {
  created() {
    // Get data from URL query parameter
    const queryData = this.$route.query.data;

    if (queryData) {
      try {
        const parsedData = JSON.parse(queryData);
        this.form = { ...this.form, ...parsedData };
      } catch (e) {
        console.error('Error parsing form data:', e);
      }
    }
  },
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
    goBack() {
      this.$router.back();
    },
    clearForm() {
      // Reset all form fields to empty strings
      Object.keys(this.form).forEach((key) => {
        this.form[key] = '';
      });
    },
    handleSubmit() {
      console.log('Form submitted:', this.form);
      // Example: send data via axios to an API
      // this.$axios.post('/api/submit', this.form)
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
        <Button class="w-full md:w-[144px]" @click="goBack">Voltar</Button>
        <Button class="w-full md:w-[144px]" @click="clearForm">Limpar</Button>
      </div>

      <Button class="w-full md:w-[144px]" variant="primary" type="submit"
        >Salvar</Button
      >
    </section>
  </form>
</template>
