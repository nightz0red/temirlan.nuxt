<template>
  <header class="flex flex-row w-full bg-green-400 border-b-2 border-gray-400 items-center justify-between max-sm:flex-col">
    <div class="basis-1/4 flex items-center justify-start px-4 min-w-max">
      <img src="/assets/images/image1.png" alt="Logo" class="w-16 h-16 bg-transparent" />
      <span class="ml-3 text-lg font-bold">MyProject</span>
    </div>

    <div class="basis-1/4 max-sm:hidden"></div>

    <nav :class="['basis-1/2 flex flex-row items-center justify-end px-8 gap-4', 
        {'max-sm:flex max-sm:flex-col max-sm:absolute max-sm:top-full max-sm:w-full max-sm:bg-white': burger}]">
      
      <NuxtLink to="/" class="menu-item">Home</NuxtLink>

      <div class="relative">
        <button @click="switch_submenu" class="menu-item">Labs</button>
        <div v-show="submenu" class="absolute bg-white shadow-lg mt-2 rounded">
          <NuxtLink to="/Lab3" class="submenu-item">Lab 3</NuxtLink>
          <NuxtLink to="/Lab4" class="submenu-item">Lab 4</NuxtLink>
          <NuxtLink to="/Lab5" class="submenu-item">Lab 5</NuxtLink>
          <NuxtLink to="/Lab6" class="submenu-item">Lab 6</NuxtLink>
        </div>
      </div>

      <NuxtLink to="/login" class="menu-item">LogIn</NuxtLink>
      <NuxtLink to="/logout" class="menu-item">Logout</NuxtLink>
    </nav>

    <!-- Burger Menu -->
    <div @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:w-8 max-sm:h-6 cursor-pointer">
      <span class="burger-line" :class="{'rotate-45 relative top-[9px]': !burger}"></span>
      <span class="burger-line" :class="{'opacity-0': !burger}"></span>
      <span class="burger-line" :class="{'rotate-[-45deg] relative bottom-3': !burger}"></span>
    </div>
  </header>

  <main class="p-5 flex bg-green-100 h-screen">
    <slot />
  </main>

  <footer class="flex flex-row w-full bg-green-400 border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4">
    <a href="https://www.youtube.com"><img src="/assets/images/logos-01-13.png" class="w-16 h-16" alt="YouTube"></a>
    <a href="https://instagram.com"><img src="/assets/images/logos-01-11.png" class="w-16 h-16" alt="Instagram"></a>
    <a href="https://www.facebook.com"><img src="/assets/images/logos-01-12.png" class="w-16 h-16" alt="Facebook"></a>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const burger = ref(false);
const submenu = ref(false);

const switch_burger = () => {
  burger.value = !burger.value;
  if (!burger.value) submenu.value = false; 
};

const switch_submenu = () => {
  submenu.value = !submenu.value;
};

onMounted(() => {
  const script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-G5554CZ5L7";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-G5554CZ5L7');
});
</script>

<style scoped>
.menu-item {
  @apply px-4 py-2 bg-red-500 font-medium rounded hover:bg-red-700 hover:text-white max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center;
}

.submenu-item {
  @apply block px-4 py-2 hover:bg-gray-200;
}

.burger-line {
  @apply h-[3px] w-full bg-blue-950;
}
</style>
