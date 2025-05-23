<template>
  <header
    class="flex items-center justify-center w-full h-[80px] border-b border-gray-300"
  >
    <div
      class="flex items-center justify-between h-full w-6xl mx-auto px-6 md:px-8"
    >
      <NuxtLink to="/">
        <h1 class="text-2xl md:text-3xl font-bold">
          <span class="text-green-500">Bru</span>ning
        </h1>
      </NuxtLink>

      <nav class="flex items-center gap-4 h-full">
        <NuxtLink
          to="/"
          class="text-gray-700 hover:text-green-500 transition-colors"
          >Colaboradores</NuxtLink
        >
        <div class="w-[1px] h-[16px] bg-gray-300 rounded-full" />

        <NuxtLink
          to="/form"
          class="text-gray-700 hover:text-green-500 transition-colors"
          >Novo</NuxtLink
        >
      </nav>
    </div>
  </header>

  <main class="flex flex-col items-center w-full overflow-hidden">
    <div class="flex flex-col gap-16 min-h-screen max-w-6xl w-full px-8 py-16">
      <slot />
    </div>
  </main>

  <footer
    class="flex items-center justify-center w-full border-t border-gray-300"
  >
    <div
      class="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between h-full w-6xl mx-auto p-8"
    >
      <div class="flex flex-col items-center md:flex-row gap-3">
        <img
          src="~/assets/images/nevio.png"
          alt="Névio Costa Magagnin"
          class="w-14 h-14 rounded-full"
        />

        <div class="flex flex-col">
          <p class="text-sm font-medium text-center md:text-left">
            Criado por Névio Costa Magagnin
          </p>

          <small class="text-sm text-center md:text-left text-gray-500">
            Engenheiro de Software & UI/UX Designer
          </small>
        </div>
      </div>

      <nav class="flex items-center gap-4 h-full">
        <NuxtLink
          to="https://www.instagram.com/nevio_costa/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-green-500 hover:bg-green-500/15 transition-colors"
        >
          <Icon name="lucide:instagram" style="width: 24px; height: 24px" />
        </NuxtLink>

        <div class="w-[1px] h-[16px] bg-gray-300 rounded-full" />

        <NuxtLink
          to="https://www.linkedin.com/in/n%C3%A9vio-magagnin-045710177/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-green-500 hover:bg-green-500/15 transition-colors"
        >
          <Icon name="lucide:linkedin" style="width: 24px; height: 24px" />
        </NuxtLink>

        <div class="w-[1px] h-[16px] bg-gray-300 rounded-full" />

        <NuxtLink
          to="https://github.com/NEVI0"
          target="_blank"
          rel="noopener noreferrer"
          class="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center rounded-xl text-green-500 hover:bg-green-500/15 transition-colors"
        >
          <Icon name="lucide:github" style="width: 24px; height: 24px" />
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>
