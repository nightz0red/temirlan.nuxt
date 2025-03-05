<template>
  <header class="flex flex-row w-full bg-gray-800 border-b-2 border-gray-600 items-center justify-between max-sm:flex-col">
    <div class="basis-1/4 flex items-center justify-start px-4 min-w-max">
      <img src="/assets/images/image1.png" alt="Logo" class="w-16 h-16 bg-transparent" />
      <span class="ml-3 text-lg font-bold text-white">MyProject</span>
    </div>

    <div class="basis-1/4 max-sm:hidden"></div>

    <nav :class="['basis-1/2 flex flex-row items-center justify-end px-8 gap-4', 
        {'max-sm:flex max-sm:flex-col max-sm:absolute max-sm:top-full max-sm:w-full max-sm:bg-white': burger}]">
      
      <NuxtLink to="/" class="menu-item">Home</NuxtLink>

      <div class="relative">
        <div class="my-auto p-2 text-white hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center" @click="switch_submenu">Labs
          <div class="flex flex-col absolute top-full bg-gray-700 text-white w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-gray-500 max-sm:text-white" v-show="submenu">
            <NuxtLink to="/lab3" class="submenu-item">Lab3</NuxtLink>
            <NuxtLink to="/lab4" class="submenu-item">Lab4</NuxtLink>
            <NuxtLink to="/lab5" class="submenu-item">Lab5</NuxtLink>
            <NuxtLink to="/lab6" class="submenu-item">Lab6</NuxtLink>
          </div>
        </div>
      </div>

      <NuxtLink to="/login" class="menu-item">LogIn</NuxtLink>
      <NuxtLink to="/logout" class="menu-item">Logout</NuxtLink>
    </nav>

    <div @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:w-8 max-sm:h-6 cursor-pointer">
      <span class="burger-line" :class="{'rotate-45 relative top-[9px]': !burger}"></span>
      <span class="burger-line" :class="{'opacity-0': !burger}"></span>
      <span class="burger-line" :class="{'rotate-[-45deg] relative bottom-3': !burger}"></span>
    </div>
  </header>

  <main class="p-5 flex bg-gray-100 h-screen">
    <slot />
  </main>

  <footer class="flex flex-row w-full bg-gray-800 border-t-2 border-gray-600 items-center justify-center px-4 py-2 gap-4">
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
  @apply px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-800 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center;
}

.submenu-item {
  @apply my-auto p-2 border-b border-gray-600 hover:bg-gray-500 hover:text-white max-sm:w-full max-sm:text-center;
}

.burger-line {
  @apply h-[3px] w-full bg-white;
}
</style>

