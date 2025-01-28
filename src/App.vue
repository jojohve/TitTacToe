<script setup>
import { ref, computed } from 'vue'
import PlayerTurn from './components/PlayerTurn.vue';
import GameBoard from './components/GameBoard.vue';
import WinnerMessage from './components/WinnerMessage.vue';
import ResetButton from './components/ResetButton.vue'

const player = ref('X')
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
])

const boardFlat = computed(() => board.value.flat())

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const winner = computed(() => calculateWinner(boardFlat.value))

const makeMove = (x, y) => {
  if (winner.value || board.value[x][y] !== '') return
  board.value[x][y] = player.value
  player.value = player.value === 'X' ? 'O' : 'X'
}

const resetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  player.value = 'X'
}
</script>

<template>
  <main class="pt-8 text-center bg-gray-800 min-h-screen">
    <h1 class="mb-8 text-3xl font-bold uppercase">Tic Tac Toe (Tris)</h1>
    <PlayerTurn :player="player" />
    <GameBoard :board="board" :makeMove="makeMove" />
    <WinnerMessage v-if="winner" :winner="winner" />
    <ResetButton @reset="resetGame" />
  </main>
</template>
