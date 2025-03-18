<template>
  <div class="flex flex-col min-h-screen">
    <header
      class="flex flex-row w-full bg-gray-800 border-b-2 border-gray-600 items-center justify-between max-sm:flex-col">
      <div
        class="basis-1/4 flex items-center justify-start px-4 min-w-max max-sm:justify-center max-sm:basis-full max-sm:py-2">
        <img src="/assets/images/logo.jpg" alt="Logo" class="w-12 h-12 max-sm:w-10 max-sm:h-10" />
        <span class="ml-3 text-lg font-bold text-white max-sm:text-base">MyProject</span>
      </div>

      <div class="basis-1/4 max-sm:hidden"></div>

      <nav :class="[
        'text-white bg-gray-900 sm:flex sm:flex-row sm:items-center sm:justify-end sm:gap-4 sm:px-8 sm:basis-1/2',
        burger
          ? 'flex flex-col w-full justify-center items-center gap-2 px-4 py-4 max-sm:transition-all max-sm:duration-300 max-sm:ease-in-out max-sm:opacity-100 max-sm:max-h-[500px]'
          : 'max-sm:opacity-0 max-sm:max-h-0 max-sm:overflow-hidden max-sm:transition-all max-sm:duration-300'
      ]">

        <NuxtLink to="/" class="menu-item transition-opacity duration-300 hover:opacity-80">Home</NuxtLink>


        <div class="relative">
          <div class="p-2 text-white hover:bg-gray-500 cursor-pointer max-sm:w-full max-sm:text-center"
            @click="switch_submenu">
            Labs
          </div>
          <transition name="submenu-fade">
            <div v-show="submenu"
              class="flex flex-col absolute top-full bg-gray-700 text-white w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-gray-500 max-sm:overflow-hidden">
              <NuxtLink to="/lab3" class="submenu-item hover:bg-gray-600 transition-all duration-300">Lab3/4</NuxtLink>
              <NuxtLink to="/lab5" class="submenu-item hover:bg-gray-600 transition-all duration-300">Lab5</NuxtLink>
              <NuxtLink to="/lab6" class="submenu-item hover:bg-gray-600 transition-all duration-300">Lab6</NuxtLink>
            </div>
          </transition>
        </div>


        <NuxtLink to="/login" class="menu-item">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="menu-item">Logout</NuxtLink>
      </nav>
      <div @click="switch_burger"
        class="sm:hidden flex flex-col justify-center items-center w-8 h-6 cursor-pointer mx-4 relative z-50">
        <span class="w-full h-0.5 bg-white mb-1 transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': !burger }"></span>
        <span class="w-full h-0.5 bg-white mb-1 transition-all duration-300" :class="{ 'opacity-0': !burger }"></span>
        <span class="w-full h-0.5 bg-white transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': !burger }"></span>
      </div>
    </header>

    <main class="p-5 flex-1 bg-gray-100">
      <slot />
    </main>

    <footer
      class="flex flex-row w-full bg-gray-800 border-t-2 border-gray-600 items-center justify-center px-4 py-2 gap-4">
      <a href="https://www.youtube.com"><img src="/assets/images/logos-01-13.png" class="w-16 h-16" alt="YouTube" /></a>
      <a href="https://instagram.com"><img src="/assets/images/logos-01-11.png" class="w-16 h-16" alt="Instagram" /></a>
      <a href="https://www.facebook.com"><img src="/assets/images/logos-01-12.png" class="w-16 h-16"
          alt="Facebook" /></a>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

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
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-G5554CZ5L7";
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-G5554CZ5L7");
});
</script>

<style scoped>
.submenu-fade-enter-active,
.submenu-fade-leave-active {
  transition: all 0.3s ease;
}
.submenu-fade-enter-from,
.submenu-fade-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
}
.submenu-fade-enter-to,
.submenu-fade-leave-from {
  opacity: 1;
  transform: scaleY(1);
}
</style>
