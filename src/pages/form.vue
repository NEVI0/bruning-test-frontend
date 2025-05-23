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
        <div class="flex flex-col gap-2 w-full">
          <label for="code">Código</label>

          <input
            v-model="form.code"
            type="text"
            id="code"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="name">Nome completo</label>

          <input
            v-model="form.name"
            type="text"
            id="name"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="nickname">Apelido</label>

          <input
            v-model="form.nickname"
            type="text"
            id="nickname"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="flex flex-col gap-2 w-full">
          <label for="father">Nome do pai</label>

          <input
            v-model="form.father"
            type="text"
            id="father"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="mother">Nome da mãe</label>

          <input
            v-model="form.mother"
            type="text"
            id="mother"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>
      </div>

      <hr class="block md:hidden w-full border-gray-100 my-8" />

      <div class="flex flex-col md:flex-row items-center gap-4">
        <div class="flex flex-col gap-2 w-full">
          <label for="document">CPF</label>

          <input
            v-model="form.document"
            type="text"
            id="document"
            placeholder="___.___.___-__"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="birthday">Data de nascimento</label>

          <input
            v-model="form.birthday"
            type="text"
            id="birthday"
            placeholder="__/__/__"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>

        <div class="flex flex-col gap-2 w-full">
          <label for="job">Cargo</label>

          <input
            v-model="form.job"
            type="text"
            id="job"
            placeholder="__/__/__"
            class="w-full h-[48px] px-4 rounded-xl border border-gray-300 outline-none focus:border-green-500"
          />
        </div>
      </div>
    </section>

    <section class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-4">
        <NuxtLink to="/">
          <button
            type="button"
            class="cursor-pointer w-full md:w-[120px] h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors text-gray-500 bg-gray-500/15 hover:bg-gray-500/25"
          >
            Voltar
          </button>
        </NuxtLink>

        <button
          type="button"
          @click="clearForm"
          class="cursor-pointer w-full md:w-[120px] h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors text-gray-500 bg-gray-500/15 hover:bg-gray-500/25"
        >
          Limpar
        </button>
      </div>

      <button
        type="submit"
        class="cursor-pointer w-full md:w-[120px] h-[48px] px-6 rounded-xl font-medium whitespace-nowrap flex items-center justify-center transition-colors text-green-500 bg-green-500/15 hover:bg-green-500/25"
      >
        Salvar
      </button>
    </section>
  </form>
</template>
