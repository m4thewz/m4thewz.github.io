<template>
  <div
    class="flex items-center justify-center lg:justify-between gap-10 sm:h-full lg:max-h-screen flex-col-reverse lg:flex-row"
    id="home"
  >
    <div class="flex flex-col justify-center text-center lg:text-left">
      <span class="text-cyan-300 font-bold mb-2">Olá, meu nome é</span>
      <h1
        class="text-4xl md:text-5xl lg:text-7xl font-semibold text-cyan-100 mb-1.5"
      >
        Matheus Vitor
      </h1>
      <h2
        class="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-300 mb-6"
      >
        Desenvolvedor Web Front-end
      </h2>
      <p class="text-base lg:text-lg max-w-3xl mb-6 text-left sm:text-justify">
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
    <div class="w-48 lg:w-72 relative" id="pic">
      <div
        class="w-full h-auto top-0 left-0 relative z-10 transition-transform ease-in-out duration-300"
      >
        <img
          class="w-full rounded-lg"
          src="https://i.imgur.com/Nr17cd3.png"
          alt="My pic"
        />
      </div>
      <div
        class="rounded-lg w-full h-full top-3 left-3 z-0 absolute border-2 border-cyan-300 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
      ></div>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 640px) {
  #home {
    padding-top: calc(var(--nav-height));
    padding-bottom: 2em;
  }
}
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
