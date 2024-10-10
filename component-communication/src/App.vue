<!-- App.vue -->
<template>

  <h1>待办事项应用</h1>

  <div class="todo-app">
    <p>组件A</p>

    <TODO_ADD @add-todo="addTodoItem" />

    <TODO_LIST :list="todoList" />

    <button @click="clearAll" style="width: 90px">清空全部</button>

  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TODO_ADD from "./components/todo-add.vue"
import TODO_LIST from "./components/todo-list.vue";
import type { TODO_List } from './types';


const todoList = ref<TODO_List[]>([]);

function addTodoItem(newTodo: TODO_List) {
  todoList.value.push(newTodo);
}

function clearAll() {
  todoList.value = []
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
