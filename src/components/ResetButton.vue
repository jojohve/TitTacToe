<script setup>
defineEmits(['reset'])
</script>

<template>
  <button
    @click="$emit('reset')"
    class="px-4 py-2 bg-pink-400 rounded uppercase font-bold hover:bg-pink-600 duration-300"
  >
    Reset Game
  </button>
</template>
