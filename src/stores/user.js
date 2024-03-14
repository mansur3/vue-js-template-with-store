import { defineStore, acceptHMRUpdate } from "pinia";

function apiLogin(a, p) {
  if (a === "ed" && p === "ed") return Promise.resolve({ isAdmin: true });
  if (p === "ed") return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error("invalid credentials"));
}
export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "Eduardo",
    isAdmin: true,
  }),
  actions: {
    logout() {
      this.$patch({
        name: "",
        isAdmin: false,
      });
    },
    async login(username, password) {
      const userData = await apiLogin(username, password);
      this.$patch({
        name: username,
        ...userData,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
