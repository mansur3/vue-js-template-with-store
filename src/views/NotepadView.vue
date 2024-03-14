<script setup>
import { ref } from "vue";
import NotepadItem from "../components/NotepadItem.vue";
const notepad = ref([
  {
    key: "notepad",
    id: 1,
  },
  {
    key: "notepad1",
    id: 2,
  },
  {
    key: "notepad3",
    id: 3,
  },
]);
</script>
<template>
  <h1>Welcome to the Notepad world.</h1>

  <div>
    <h2>Notepad List</h2>
    <p v-if="notepad.length == 0">List is empty!.</p>
    <ul>
      <NotepadItem v-for="item in notepad" :value="item"></NotepadItem>
    </ul>
  </div>
</template>
<style></style>
