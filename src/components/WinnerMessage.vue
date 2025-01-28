<script setup>
defineProps(['winner'])
</script>

<template>
  <h2 v-if="winner" class="text-6xl font-bold mb-8">Giocatore '{{ winner }}' vince!</h2>
</template>
