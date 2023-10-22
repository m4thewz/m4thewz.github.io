<template>
  <div class="h-full w-full flex justify-between items-center gap-10">
    <div>
      <h1
        class="text-center lg:text-left mb-8 text-6xl font-semibold text-cyan-100"
      >
        Sobre
      </h1>
      <div class="md:max-w-2xl text-justify">
        <p class="mb-1.5">
          Olá, meu nome é Matheus, um programador front-end autodidata desde os
          11 anos. Minha jornada começou com HTML quando desenvolvi um site para
          um projeto pessoal. A partir daí, expandi meu conhecimento e trabalhei
          em diversos projetos, incluindo pequenos freelas. Atualmente estou
          comprometido em criar interfaces de alta qualidade e experiências para
          as pessoas.
        </p>
        <p class="mb-1.5">
          Atualmente, adquiri conhecimento em diversas áreas, incluindo
          ferramentas para a criação de sites e jogos. Meu foco atual está
          direcionado para o aprimoramento de habilidades em desenvolvimento de
          jogos, enquanto realizo novas ideias de projetos.
        </p>
        <p class="text-center lg:text-left">
          Você pode conferir algumas das minhas habilidades aqui:
        </p>
        <ul
          :class="`justify-between align-center mt-2 w-2/5 grid grid-cols-2 grid-rows-${
            knowledges.length / 2
          } lg:list-disc list-inside`"
        >
          <li
            class="marker:text-cyan-300 text-sm"
            v-for="(knowledge, index) in knowledges"
            :key="index"
          >
            <a
              href="https://github.com/m4thewz?tab=repositories"
              target="_blank"
              >{{ knowledge }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="hidden lg:block w-72 relative" id="pic">
      <div
        class="w-full h-auto top-0 left-0 relative z-10 transition-transform ease-in-out duration-300"
      >
        <img
          class="w-full rounded-lg"
          src="https://i.imgur.com/Nr17cd3.png"
          alt="My second pic"
        />
      </div>
      <div
        class="rounded-lg w-full h-full -top-3 left-3 z-0 absolute border-2 border-cyan-300 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
      ></div>
    </div>
  </div>
</template>
<style scoped>
span {
  @apply text-cyan-300;
}
#pic:hover div:first-child {
  @apply -translate-x-1 translate-y-1;
}
#pic:hover div:last-child {
  @apply translate-x-0.5 -translate-y-0.5;
}
</style>
<script>
export default {
  name: "About",
  data() {
    return {
      knowledges: [
        "Javascript",
        "HTML",
        "CSS",
        "SCSS",
        "NodeJS",
        "Vue",
        "Python",
        "SQL",
      ],
    };
  },
};
</script>
