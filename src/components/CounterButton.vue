<template>
  <button @click="store.incrementCount">{{ store.counter }}</button>
</template>

<script setup>
import { useCounterStore } from '@/store/counter'

const store = useCounterStore()
</script>
