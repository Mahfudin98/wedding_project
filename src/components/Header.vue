<template>
  <header
    class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10"
  >
    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="flex px-4">
          <img
            alt="Vue logo"
            class="block py-6"
            src="@/assets/logo.svg"
            width="50"
            height="50"
          />
        </div>
        <div class="flex items-center px-4">
          <button
            @click="burger"
            id="burger"
            name="burger"
            type="button"
            class="block absolute right-4 lg:hidden"
          >
            <span
              class="
                burger-line
                transition
                duration-300
                ease-in-out
                origin-top-left
              "
            ></span>
            <span
              class="burger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="
                burger-line
                transition
                duration-300
                ease-in-out
                origin-bottom-left
              "
            ></span>
          </button>
          <nav
            id="nav-menu"
            class="
              hidden
              absolute
              py-5
              bg-white
              shadow-lg
              rounded-lg
              max-w-[250px]
              w-full
              right-4
              top-full
              lg:block
              lg:static
              lg:bg-transparent
              lg:max-w-full
              lg:shadow-none
              lg:rounded-none
              dark:bg-dark dark:shadow-slate-500
              lg:dark:bg-transparent
            "
          >
            <ul class="block lg:flex">
              <li class="group">
                <a
                  href="#home"
                  class="
                    text-base text-dark
                    dark:text-white
                    py-2
                    mx-5
                    flex
                    group-hover:text-primary
                  "
                  >Home</a
                >
              </li>
              <li class="group">
                <a
                  href="#features"
                  class="
                    text-base text-dark
                    dark:text-white
                    py-2
                    mx-5
                    flex
                    group-hover:text-primary
                  "
                  >Features</a
                >
              </li>
              <li class="group">
                <a
                  href="#screenshot"
                  class="
                    text-base text-dark
                    dark:text-white
                    py-2
                    mx-5
                    flex
                    group-hover:text-primary
                  "
                  >Screenshot</a
                >
              </li>
              <li class="group">
                <a
                  href="#testimonial"
                  class="
                    text-base text-dark
                    dark:text-white
                    py-2
                    mx-5
                    flex
                    group-hover:text-primary
                  "
                  >Testimonial</a
                >
              </li>
              <li class="group">
                <a
                  href="#pricing"
                  class="
                    text-base text-dark
                    dark:text-white
                    py-2
                    mx-5
                    flex
                    group-hover:text-primary
                  "
                  >Pricing</a
                >
              </li>
              <li class="group">
                <a
                  href="#contact"
                  class="
                    text-base text-dark
                    dark:text-white
                    py-2
                    mx-5
                    flex
                    group-hover:text-primary
                  "
                  >Contact Us</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="hidden lg:flex lg:items-center lg:px-4">
          <ul class="block lg:flex">
            <li class="flex items-center pl-8">
              <div class="flex">
                <span class="mr-2 text-sm text-slate-500">light</span>
                <input
                  type="checkbox"
                  name="dark-toggle"
                  v-model="dark_toggle"
                  id="dark-toggle"
                  class="hidden"
                />
                <label for="dark-toggle">
                  <div
                    class="
                      flex
                      h-5
                      w-9
                      cursor-pointer
                      items-center
                      rounded-full
                      bg-slate-500
                      p-1
                    "
                  >
                    <div
                      class="
                        toggle-circle
                        h-4
                        w-4
                        rounded-full
                        bg-white
                        transition
                        duration-300
                        ease-in-out
                      "
                    ></div>
                  </div>
                </label>
                <span class="ml-2 text-sm text-slate-500">dark</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { html } from "../main";
export default {
  data() {
    return {
      dark_toggle: false,
    };
  },
  created() {
    window.addEventListener("click", this.handleClick);
  },
  destroyed() {
    window.removeEventListener("click", this.handleClick);
  },
  computed: {
    darkToggle() {
      if (this.dark_toggle == true) {
        html.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        html.classList.remove("dark");
        localStorage.theme = "light";
      }
    },
  },
  methods: {
    burger(event) {
      const navMenu = document.querySelector("#nav-menu");
      const burger = document.querySelector("#burger");

      burger.classList.toggle("burger-active");
      navMenu.classList.toggle("hidden");
    },

    handleClick(event) {
      const navMenu = document.querySelector("#nav-menu");
      const burger = document.querySelector("#burger");

      if (event.target != burger && event.target != navMenu) {
        burger.classList.remove("burger-active");
        navMenu.classList.add("hidden");
      }
    },
  },
};
</script>