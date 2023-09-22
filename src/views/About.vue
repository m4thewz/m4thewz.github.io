<template>
  <div class="h-full w-full flex justify-between items-center gap-10">
    <div>
      <h1 class="mb-8 text-6xl font-semibold text-cyan-100">About</h1>
      <div class="max-w-2xl">
        <p class="mb-1.5">
          Hello! My name is Matheus and I like to program some applications. I
          started learning in the field at the age of 11 when I was interested
          in creating a website for a Club Penguin project.
        </p>
        <p>
          I currently acquired knowledge in the area such as
          <span>JavaScript</span>, <span>C</span>, <span>Python</span>,
          <span>HTML</span>, <span>CSS</span>, <span>Vue</span> and other tools.
          My current focus is learning more about game development while
          churning out some project ideas.
        </p>
        <br />You can see all my knowledges here:
        <ul
          :class="`grid-rows-${
            knowledges.length / 2
          } mt-2 w-2/5 grid grid-cols-2 grid-flow-col list-disc list-inside`"
        >
          <li
            class="marker:text-cyan-300 text-sm"
            v-for="(knowledge, index) in knowledges"
            :key="index"
          >
            {{ knowledge }}
          </li>
        </ul>
      </div>
    </div>
    <div class="w-72 relative" id="pic">
      <div
        class="w-full h-auto top-0 left-0 relative z-10 transition-transform ease-in-out duration-300"
      >
        <img
          class="w-full rounded-lg"
          src="../assets/foto2.png"
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
        "C",
      ],
    };
  },
};
</script>
