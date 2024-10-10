<template>

  <h1>待办事项应用</h1>

  <div class="todo-app">
    <p>组件A</p>

    <TODO_ADD @add-todo="addTodoItem" />

    <TODO_LIST :list="todoList" />


  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TODO_ADD from "./components/todo-add.vue"
import TODO_LIST from "./components/todo-list.vue";
import type { TodoItem } from './types';


const todoList = ref<TodoItem[]>([]);

function addTodoItem(newTodo: TodoItem) {
  todoList.value.push(newTodo);
}

</script>

<style>
.todo-app {
  border: 1px solid black;
  padding: 16px;
  color: black;
  margin-top: 20px;
}
</style>
