<template>
  <div class="font-poppins bg-darkblue text-gray-400">
    <Navbar />
    <div class="h-screen px-36">
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
