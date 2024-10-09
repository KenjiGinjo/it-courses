<!-- ToDoList.vue -->
<template>
    <div class="todo-list">
      <h2>待办事项列表：</h2>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ index + 1 }}. {{ todo }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ToDoList',
    props: {
      todos: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style>
  /* 可选的样式 */
  .todo-list {
    margin-top: 20px;
  }
  .todo-list ul {
    list-style-type: none;
    padding: 0;
  }
  .todo-list li {
    padding: 5px 0;
  }
  </style>