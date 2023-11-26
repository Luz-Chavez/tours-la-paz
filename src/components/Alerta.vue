<template>
    <div
      class="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700"
      role="alert">
      <h4 class="mb-2 text-2xl font-medium leading-tight">Usuario Registrado!</h4>
      <p class="mb-4">
       <div>
       Nombres: {{ store.usuario.nombre }}
    </div>
    <div>
       Apellidos: {{ store.usuario.apellido }}
    </div>
      </p>
      <hr class="border-success-600 opacity-30" />
      <p class="mb-0 mt-4">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </div>
  </template>
  
  <script setup>
  import { useUsuarioStore } from '@/store/usuario'
  
  const store = useUsuarioStore()
  </script>

