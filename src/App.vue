<template>
  <div class="font-poppins bg-darkblue text-gray-400">
    <Navbar />
    <div class="h-screen px-36">
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
