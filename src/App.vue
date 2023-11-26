<template>
<div class="bg-amber-100">
  <Alerta v-if="store.component.isAlertVisible"/>
  <section class="mb-40">
    <Navbar :dataList="routes"/>
    <router-view />
  </section>
  <Footer />
</div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Alerta from '@/components/Alerta.vue'
import { useComponentStore } from '@/store/component'

const store = useComponentStore()

const routes = ref([
  { name: 'home', to: { name: 'home' }, text: 'Home' },
  { name: 'cultura', to: { name: 'cultura' }, text: 'Cultura' },
  { name: 'registro', to: { name: 'registro' }, text: 'Registro' } 
])


</script>
