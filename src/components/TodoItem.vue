<script>
const props = defineProps(["todo"]);
console.log(props.todo);
</script>
<template>
  <li>
    {{ todo }}
  </li>
</template>
