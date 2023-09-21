<template>
  <div class="h-full w-full flex justify-between items-center">
    <div>
      <h1 class="mb-8 text-6xl font-semibold text-cyan-100">About</h1>
      <div class="max-w-2xl">
        <p class="mb-1.5">
          Hello! My name is Matheus and I like to program some applications. I
          started learning in the field at the age of 11 when I was interested
          in creating a website for a Club Penguin project.
          <br />
        </p>
        <p>
          I currently acquired knowledge in the area such as
          <span>JavaScript</span>, <span>C</span>, <span>Python</span>,
          <span>HTML</span>, <span>CSS</span>, <span>Vue</span> and other tools.
          My current focus is learning more about game development while
          churning out some project ideas.
        </p>
        <div class="mt-8 flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </div>
      </div>
    </div>
    <img class="w-2/6 rounded-lg" src="../assets/foto.png" alt="My pic" />
  </div>
</template>
<style>
span {
  @apply text-cyan-300;
}
svg {
  @apply w-10 rounded-lg transition-colors duration-300 ease-cubic;
}
svg:hover {
  @apply text-cyan-300;
}
</style>
<script>
export default {
  name: "About",
};
</script>
