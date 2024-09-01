<template>
  <nav
    class="bg-background border-b border-transparent fixed z-20 w-full flex justify-center nav-visible transition-all duration-300 ease-cubic"
  >
    <div
      class="flex items-center justify-between w-full xl:w-2/3 px-5 sm:px-20 md:px-36 py-4"
    >
      <router-link to="/">
        <img
          width="64"
          height="64"
          class="w-8 sm:w-12"
          src="@/assets/logo.webp"
          alt="logo"
        />
      </router-link>
      <ul class="flex gap-5 items-center">
        <li
          v-for="(route, index) in routes"
          :key="index"
          class="text-lg sm:text-xl transition-colors duration-300 hover:text-cyan-300"
        >
          <router-link :to="route.path" :index="index">{{
            route.name
          }}</router-link>
        </li>
        <li>
          <button @click="$toggleLocale">
            {{ $locale == "pt" ? "PT" : "EN" }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
/* menu depois, responsivo aqui ta horrivel */

.router-link-exact-active {
  @apply text-cyan-300 font-medium;
}
.nav-visible {
  transform: translateY(0);
}
.nav-invisible {
  transform: translateY(calc(var(--nav-height) * -1));
}

.nav-visible-scroll {
  @apply border-sky-100 border-opacity-10;
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
      if (this.window.scrollY == 0) nav.classList.remove("nav-visible-scroll");
      else {
        nav.classList.add("nav-visible-scroll");
      }
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
          name: this.$t("navbar.home"),
        },
        {
          path: "/projects",
          name: this.$t("navbar.projects"),
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
