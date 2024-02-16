<template>
  <div>
    <Navbar />
    <div class="h-screen px-16 sm:px-20 md:px-36">
      <router-view />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
