<template>
  <div class="flex flex-col justify-center gap-5 min-h-full py-20">
    <p class="text-xl">
      You can see some of my projects here. If you want to see all my projects
      you can find them on my
      <a
        class="text-cyan-300 hover:underline hover:decoration-cyan-300"
        href="https://github.com/m4thewz"
        target="_blank"
        >github</a
      >
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="border border-cyan-300 rounded-lg shadow"
      >
        <img
          class="rounded-t-lg w-full border-b border-cyan-300"
          :src="imgUrl(project.file)"
          :alt="project.name"
        />
        <div class="cursor-default p-5">
          <h5 class="mb-2 text-2xl font-bold text-cyan-100">
            {{ project.name }}
          </h5>
          <p class="mb-3 font-light text-cyan-50">
            {{ project.description }}
          </p>
          <a
            :href="project.url"
            target="_blank"
            class="block w-full py-2 text-sm text-center font-medium rounded-md bg-cyan-300 text-cyan-950 hover:text-sky-950 hover:bg-sky-400 transition-colors duration-300 ease-cubic"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: require("./data.json"),
    };
  },
  methods: {
    imgUrl(src) {
      return require(`@/assets/projects/${src}`);
    },
  },
};
</script>
