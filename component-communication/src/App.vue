<!-- App.vue -->
<template>
  <div id="app">
    <h1>待办事项应用</h1>
    <AddToDo @add-todo="addTodoItem" />
    <ToDoList :todos="todoList" />
  </div>
</template>

<script>
import AddToDo from "./components/AddToDo.vue";
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "App",
  components: {
    AddToDo,
    ToDoList,
  },
  data() {
    return {
      todoList: [], // 待办事项列表
    };
  },
  methods: {
    addTodoItem(newTodo) {
      // 接收来自 AddToDo 组件的新待办事项，并添加到列表中
      this.todoList.push(newTodo);
    },
  },
};
</script>

<style>
/* 可选的样式 */
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}
</style>
