<template>
  <nav class="fixed flex items-center justify-between w-screen px-36 pt-4">
    <h1 class="text-5xl font-bold text-sky-400">MTHS</h1>
    <ul class="flex gap-5 items-center">
      <li
        v-for="(route, index) in routes"
        :key="index"
        class="text-xl transition-colors duration-300 hover:text-cyan-300"
      >
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<style>
.router-link-active {
  @apply text-cyan-300 font-medium;
}
</style>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      routes: [
        {
          path: "/",
          name: "Home",
        },
        {
          path: "/about",
          name: "About",
        },
        {
          path: "/projects",
          name: "Projects",
        },
        {
          path: "/contact",
          name: "Contact",
        },
      ],
    };
  },
};
</script>
