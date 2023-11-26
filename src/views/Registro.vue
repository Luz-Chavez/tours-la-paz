<template>

  <div class="container my-24 mx-auto md:px-6">
  <!-- Section: Design Block -->
  <section class="background-radial-gradient mb-32">

    <div class="px-6 py-12 text-center md:px-12 lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div class="mt-12 lg:mt-0">
            <h1 class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
              Do not miss <br /><span class="text-[hsl(218,81%,75%)]">any updates</span>
            </h1>
            <p class="lead mb-4 opacity-70 text-[hsl(218,81%,85%)]">
              We will write rarely and only high-quality content.
            </p>
          </div>
          <div class="mb-12 lg:mb-0">
            <div
              class="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#e79d9d] dark:shadow-black/20 md:px-12">
              <h2 class="mb-12 text-center text-3xl text-white font-bold">
                Subscribe to the newsletter
              </h2>
              <h1 class="block uppercase tracking-wide text-grey-darker text-lg font-bold">Registro</h1>
                 
                 <FormRegistro />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</div>
</template>
<style>
      .background-radial-gradient {
        background-color: hsl(27, 91%, 50%);
        background-image: radial-gradient(650px circle at 0% 0%,
            hsl(76, 66%, 76%) 15%,
            hsl(53, 75%, 62%) 35%,
            hsl(51, 61%, 59%) 75%,
            hsl(42, 71%, 58%)80%,
            transparent 100%),
          radial-gradient(1250px circle at 100% 100%,
            hsl(331, 85%, 72%) 15%,
            hsl(311, 58%, 61%) 35%,
            hsl(341, 55%, 53%) 75%,
            hsl(331, 75%, 54%) 80%,
            transparent 100%);
      }
    </style>

<script setup>
import FormRegistro from '@/components/FormRegistro.vue'
</script>