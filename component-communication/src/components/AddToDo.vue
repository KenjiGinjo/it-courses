<!-- AddToDo.vue -->
<template>
    <div class="add-todo">
      <input
        v-model="newTodo"
        type="text"
        placeholder="请输入新的待办事项"
        @keyup.enter="submitTodo"
      />
      <button @click="submitTodo">添加</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddToDo',
    data() {
      return {
        newTodo: '', // 存储用户输入的新待办事项
      };
    },
    methods: {
      submitTodo() {
        if (this.newTodo.trim() !== '') {
          // 通过 $emit 触发 'add-todo' 事件，传递新待办事项给父组件
          this.$emit('add-todo', this.newTodo.trim());
          this.newTodo = ''; // 清空输入框
        }
      },
    },
  };
  </script>
  
  <style>
  /* 可选的样式 */
  .add-todo {
    margin-bottom: 20px;
  }
  .add-todo input {
    padding: 5px;
    width: 200px;
  }
  .add-todo button {
    padding: 5px 10px;
  }
  </style>