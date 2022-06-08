<template>
  <section id="home" class="pt-32 bg-white dark:bg-dark">
    <div class="container bg-white dark:bg-dark">
      <div class="relative">
        <div>
          <div class="max-w-xl mx-auto text-center mb-10 px-4 md:max-w-2xl">
            <h2
              class="
                text-3xl
                font-bold
                text-dark text-center
                md:text-5xl
                dark:text-white
                mb-10
              "
            >
              Let's <span class="text-primary">Build Your Products</span> by
              Appexy App.
            </h2>
          </div>
          <div class="max-w-xl mx-auto text-center mb-10 px-4">
            <p
              class="
                text-base
                font-medium
                text-dark text-center
                dark:text-white
                mb-10
              "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, perspiciatis voluptatibus laboriosam sequi ipsam rem
              nobis similique dignissimos accusamus quisquam tempora ea velit
              unde praesentium ducimus eos iusto magnam neque.
            </p>
          </div>
          <div class="md:w-[650px] mx-auto">
            <div class="grid justify-items-center">
              <button
                type="button"
                class="
                  text-white
                  bg-gradient-to-r
                  from-primary
                  via-emerald-500
                  to-primary
                  hover:bg-gradient-to-br
                  focus:ring-4 focus:outline-none focus:ring-emerald-300
                  dark:focus:ring-emerald-800
                  font-medium
                  rounded-lg
                  text-sm
                  px-5
                  py-2.5
                  text-center
                  mr-2
                  mb-2
                "
              >
                Let's Started
              </button>
            </div>
          </div>
          <div class="w-full mx-auto px-4 py-10">
            <img
              src="https://source.unsplash.com/1000x600?computer"
              alt="Home Caracter"
              class="max-w-full mx-auto lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-20 bg-white dark:bg-dark">
    <div class="container">
      <div class="max-w-xl mx-auto text-center mb-10">
        <h1 class="font-medium text-dark dark:text-white text-lg mb-5 lg:text-xl">
          HOW IT <span class="font-semibold">WORK</span>
        </h1>
        <h2 class="text-3xl mt-1 text-dark lg:text-4xl font-semibold dark:text-white mb-5">
          How dose it work ?
        </h2>
        <p class="font-medium text-stone-700 dark:text-slate-400 mb-10 text-center leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem temporibus numquam at dicta, maxime delectus voluptatibus sit quis ad fugiat.
        </p>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/3 text-center">
          <img
              src="@/assets/icons/cari.svg"
              alt="Home Caracter"
              class="max-w-full h-36 w-36 mx-auto lg:max-w-md"
            />
          <h2 class="font-bold text-white text-2xl mb-4">1. Cari tema</h2>
          <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, delectus.
          </p>
        </div>
        <div class="w-full px-4 mb-10 lg:w-1/3 pb-10 text-center">
          <img
              src="@/assets/icons/buat.svg"
              alt="Home Caracter"
              class="max-w-full h-36 w-36 mx-auto lg:max-w-md"
            />
          <h2 class="font-bold text-white text-2xl mb-4">2. Sesuaikan keinginan</h2>
          <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, delectus.
          </p>
        </div>
        <div class="w-full px-4 mb-10 lg:w-1/3 pb-10 text-center">
          <img
              src="@/assets/icons/bagikan.svg"
              alt="Home Caracter"
              class="max-w-full h-36 w-36 mx-auto lg:max-w-md"
            />
          <h2 class="font-bold text-white text-2xl mb-4">3. Bagikan undanganmu</h2>
          <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, delectus.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
