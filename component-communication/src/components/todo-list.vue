<template>
  <div class="todo-list">
    <p>组件C:</p>
    <p>待办事项列表：</p>
    <ul>
      <li v-for="(todo, index) in props.list" :key="todo.id">
        {{ index + 1 }}. {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { TODO_List } from '@/types';

const props = defineProps<{
  list: TODO_List[]
}>()


</script>

<style>
.todo-list {
  margin-top: 20px;
  border: 1px solid red;
  color: red;
  width: 100%;
  padding: 16px;
  min-height: 200px;
}

.todo-list ul {
  list-style-type: none;
  padding: 0;
}

.todo-list li {
  padding: 5px 0;
}
</style>