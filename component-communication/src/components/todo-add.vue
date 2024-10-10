<template>
  <div class="todo-add">
    <p>组件B:</p>
    <div class="todo-add-main">
      <input v-model="newTodo" type="text" placeholder="请输入新的待办事项" @keyup.enter="submitTodo" />
      <button @click="submitTodo">添加</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { createId } from '@paralleldrive/cuid2'
import type { TODO_List } from '@/types';

const emits = defineEmits<{
  (e: "add-todo", newTodo: TODO_List): void;
}>();

const newTodo = ref<string>('');

function submitTodo() {
  if (newTodo.value.trim() !== '') {
    const id = createId();

    emits('add-todo', {
      id,
      text: newTodo.value.trim()
    });

    newTodo.value = '';
  }
}

</script>

<style>
.todo-add {
  border: 1px solid purple;
  padding: 16px;
  margin-bottom: 20px;
  color: purple;
  margin-top: 20px;
}

.todo-add-main {
  font-size: 12px;
  display: flex;
  margin-top: 12px;
}

.todo-add-main input {
  width: 100%;
}

.todo-add-main button {
  font-size: 12px;
  padding: 0 2px;
  flex-shrink: 0;
}
</style>