<script setup>
const props = defineProps({
  todo: Object,
});
</script>
<template>
  <li>
    - {{ todo.id }}
    {{ todo.key }}
  </li>
</template>
