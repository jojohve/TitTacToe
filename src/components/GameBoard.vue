<script setup>
defineProps(['board', 'makeMove']);
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-for="(row, x) in board" :key="x" class="flex">
      <div
        v-for="(cell, y) in row"
        :key="y"
        @click="makeMove(x, y)"
        :class="[
          'border',
          'border-white',
          'w-20',
          'h-20',
          'hover:bg-gray-700',
          'flex',
          'items-center',
          'justify-center',
          'material-icons-outlined',
          'text-4xl',
          'cursor-pointer',
          cell === 'X' ? 'text-pink-500' : 'text-blue-500',
        ]"
      >
        {{ cell === 'X' ? 'close' : cell === 'O' ? 'circle' : '' }}
      </div>
    </div>
  </div>
</template>
