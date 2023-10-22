<template>
  <nav
    class="bg-darkblue fixed flex items-center justify-between w-screen px-5 sm:px-20 md:px-36 py-4 nav-visible transition-all duration-300 ease-cubic"
  >
    <img class="w-8 sm:w-12" src="@/assets/logo.png" alt="logo" />
    <ul class="flex gap-5 items-center">
      <li
        v-for="(route, index) in routes"
        :key="index"
        class="text-lg sm:text-xl transition-colors duration-300 hover:text-cyan-300"
      >
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
/* menu depois, responsivo aqui ta horrivel */

.router-link-active {
  @apply text-cyan-300 font-medium;
}
.nav-visible {
  transform: translateY(0);
}
.nav-invisible {
  transform: translateY(calc(var(--nav-height) * -1));
}
</style>
<script>
export default {
  name: "Navbar",
  mounted() {
    var t = this;
    document
      .querySelector(":root")
      .style.setProperty(
        "--nav-height",
        `${document.querySelector("nav").offsetHeight + 30}px`
      );
    window.addEventListener("scroll", function () {
      let nav = document.querySelector("nav");
      if (t.lastScrollY > this.window.scrollY != t.direction) {
        if (t.lastScrollY > this.window.scrollY) {
          nav.classList.remove("nav-invisible");
          nav.classList.add("nav-visible");
        } else {
          nav.classList.remove("nav-visible");
          nav.classList.add("nav-invisible");
        }
      }
      if (this.window.scrollY == 0) nav.style.boxShadow = "none";
      else nav.style.boxShadow = "0 10px 30px -10px black";
      t.direction = t.lastScrollY > this.window.scrollY;
      t.lastScrollY = this.window.scrollY;
    });
  },
  data() {
    return {
      lastScrollY: window.scrollY,
      direction: true,
      routes: [
        {
          path: "/",
          name: "Ínicio",
        },
        {
          path: "/about",
          name: "Sobre",
        },
        {
          path: "/projects",
          name: "Projetos",
        },
        // {
        //   path: "/contact", futuro curriculo
        //   name: "Contato",
        // },
      ],
    };
  },
};
</script>
