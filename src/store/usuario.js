import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUsuarioStore = defineStore('UsuarioState', () => {
  const usuario = ref({
    nombre: '',
    apellido: '',
    contraseña: '',
    ciudad: '',
    departamento: '',
    telefono: ''
  })

  const getUsuario = computed(() => usuario.value)
  const updateUsuario = (nuevoUsuario) => {
    usuario.value.nombre = nuevoUsuario.nombre
    usuario.value.apellido = nuevoUsuario.apellido
  }
  
  return { usuario, getUsuario, updateUsuario }
})
