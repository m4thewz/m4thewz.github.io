<template>
  <div
    class="flex items-center justify-center md:justify-between gap-10 h-full lg:max-h-screen flex-col-reverse md:flex-row"
  >
    <div class="flex flex-col justify-center">
      <span class="text-cyan-300 font-bold mb-2">Olá, meu nome é</span>
      <h1 class="text-7xl font-semibold text-cyan-100 mb-1.5">Matheus Vitor</h1>
      <h2 class="text-5xl font-semibold text-gray-300 mb-6">
        Eu faço sites e jogos
      </h2>
      <p class="text-lg max-w-3xl mb-6">
        Desenvolvo pequenos sites desde 2020, possuo experiência tanto no
        Front-end quanto no Back-end trabalhando como freelancer.
      </p>
      <router-link
        to="/about"
        class="py-2.5 text-center rounded-md border font-medium transition duration-300 ease-cubic border-cyan-300 text-cyan-300 hover:text-darkblue hover:bg-cyan-300"
      >
        Sobre mim
      </router-link>
    </div>
    <div class="relative" id="pic">
      <div
        class="w-72 h-72 top-0 left-0 relative z-10 transition-transform ease-in-out duration-300"
      >
        <img
          class="rounded-lg"
          src="https://i.imgur.com/Nr17cd3.png"
          alt="My pic"
        />
      </div>
      <div
        class="rounded-lg w-72 h-72 top-3 left-3 z-0 absolute border-2 border-cyan-300 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
      ></div>
    </div>
  </div>
</template>
<style scoped>
#pic:hover div:first-child {
  @apply -translate-x-1 -translate-y-1;
}
#pic:hover div:last-child {
  @apply translate-x-0.5 translate-y-0.5;
}
</style>
<script>
export default {
  name: "HomeView",
};
</script>
