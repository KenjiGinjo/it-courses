<template>
  <div class="todo-add">
    <p>组件B:</p>
    <div class="todo-add-main">
    </div>
  </div>
</template>

<script lang="ts" setup>

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