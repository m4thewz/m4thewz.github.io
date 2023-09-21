<template>
  <div class="flex items-center justify-between h-full max-h-screen">
    <div class="flex flex-col justify-center">
      <span class="text-cyan-300 font-bold mb-2">Hi, my name is</span>
      <h1 class="text-7xl font-semibold text-cyan-100 mb-1.5">Matheus Vitor</h1>
      <h2 class="text-5xl font-semibold text-gray-300 mb-6">
        I like to code websites and games
      </h2>
      <p class="text-lg max-w-3xl mb-6">
        I am a self-taught programmer with experience in website development.
        Currently, i'm studying computing in
        <a
          href="https://ifsp.edu.br/"
          class="text-cyan-300 hover:underline hover:decoration-cyan-300"
          target="_blank"
          >Instituto Federal</a
        >
      </p>
      <button
        class="py-2.5 rounded-md border font-medium transition duration-300 ease-cubic border-cyan-300 text-cyan-300 hover:text-darkblue hover:bg-cyan-300"
      >
        See more
      </button>
    </div>
    <div class="relative cursor-pointer" id="pic">
      <div
        class="w-72 h-72 top-0 left-0 relative z-10 transition-transform ease-in-out duration-300"
      >
        <img class="rounded-lg" src="../assets/foto.png" alt="My pic" />
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
