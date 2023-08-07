<template>
  <svg :style="{ height, width }">
    <use :xlink:href="preFix + name" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  preFix: {
    type: String,
    default: '#icon-',
  },
  name: String,
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>

<style scoped></style>
