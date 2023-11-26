import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// the naming convention for stores and composable in general is to prefix with 'use'
export const useCounterStore = defineStore('CounterStore', () => {
  // state
  const counter = ref(0)
  // getters
  const getCount = computed(() => count.value)
  // actions
  const incrementCount = () => counter.value++

  return { counter, getCount, incrementCount }
})
