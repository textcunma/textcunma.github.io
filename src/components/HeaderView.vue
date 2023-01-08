<template>
     <div class="shadow-lg">
          <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
               <header class="flex justify-between items-center py-4 md:py-8">
                    <router-link to="/" class="inline-flex items-center text-black-800 text-xl md:text-3xl font-bold gap-2.5">Taiki Nakamura Portfolio</router-link>
                    <nav class="hidden lg:flex gap-12">
                         <router-link to="/" class="menu-str">Home</router-link>
                         <router-link to="/#skill" class="menu-str">Skill</router-link>
                         <router-link to="/#experience" class="menu-str">Experience</router-link>
                         <router-link to="/#works" class="menu-str">Works</router-link>
                    </nav>
                    <button @click="toggleNav" id="menuBtn" type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                         <svg class="w-6 h-6" id="menuSvg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
               </header>

               <!-- スマホ表示用 -->
               <nav :class="showMenu ? 'flex' : 'hidden'" class="absolute shadow-lg w-full right-0 bg-white flex-col text-center lg:hidden border-t-4">
                         <router-link to="/" class="menu-str-sm">Home</router-link>
                         <router-link to="/#skill" class="menu-str-sm">Skill</router-link>
                         <router-link to="/#experience" class="menu-str-sm">Experience</router-link>
                         <router-link to="/#works" class="menu-str-sm">Works</router-link>
               </nav>
          </div>
     </div>
     
</template>

<script>
import { ref } from 'vue';
     export default {
          setup() {
               let showMenu = ref(false);
               const toggleNav = () => (showMenu.value = !showMenu.value);
               return { showMenu, toggleNav };
          },
          mounted() {
               document.body.addEventListener("click", (event) => {
                    if (!event.target.closest("#menuBtn")) {
                         if (this.showMenu) {
                              this.showMenu = false;
                         }
                    }
               });
          },
     };
</script>