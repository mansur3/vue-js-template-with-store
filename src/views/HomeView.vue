<script>
import TheWelcome from "../components/TheWelcome.vue";
import { useUserStore } from "../stores/user.js";
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const user = useUserStore();
    async function checkUser() {
      console.log("Checking user part and test. And let's what happened");
      console.log("user:", user);
    }

    return {
      user,
      checkUser,
    };
  },
});
</script>

<template>
  <main>
    <TheWelcome />
    <div>
      {{ user.name }}
    </div>
  </main>
</template>
