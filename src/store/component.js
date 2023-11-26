import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useComponentStore = defineStore('ComponentState', () => {
  const component = ref({
    isAlertVisible: false,
  })

  const getComponent = computed(() => component.value)
  const switchAlertState = () => component.value.isAlertVisible = !component.value.isAlertVisible
  
  return { component, getComponent, switchAlertState }
})