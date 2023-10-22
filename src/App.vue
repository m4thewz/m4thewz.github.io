<template>
  <div>
    <Navbar />
    <div class="h-screen px-16 sm:px-20 md:px-36">
      <router-view />
    </div>
    <Links />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Links from "@/components/Links.vue";

export default {
  components: { Navbar, Links },
};
</script>
