<template>
  <div class="flex items-center flex-col">
    <Navbar />
    <div class="min-h-screen w-full xl:w-2/3 px-10 sm:px-20 md:px-36">
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
