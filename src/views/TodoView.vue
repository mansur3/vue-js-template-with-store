<script>
export default {
  data() {
    return {
      TodoList: [],
      todoItem: "",
      count: 0,
    };
  },
  methods: {
    handleChange(e) {
      const todo = e.target.value;
      this.todoItem = todo;
    },
    addTodo() {
      this.TodoList.push({ todo: this.todoItem, count: this.count });
      this.count++;
      this.todoItem = "";
    },
  },
  mounted() {
    console.log(`This is initial  state haha`);
  },
};
</script>
<template>
  <h1>Welcome to the TODO world.</h1>
  <div id="todo">
    <input
      @change="handleChange"
      type="text"
      placeholder="Please enter the todo item"
      :value="this.todoItem" />
    <button @click="addTodo">Add todo</button>
  </div>
  <div>
    <h2>Todo List</h2>
    <p v-if="this.TodoList.length == 0">List is empty!.</p>
    <ul v-if="this.TodoList.length">
      <li v-for="item of this.TodoList">
        {{ item.count }}
        - {{ item.todo }}
      </li>
    </ul>
  </div>

  <div></div>
</template>
<style></style>
