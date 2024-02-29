<template>
  <div>
    <h1>Список задач</h1>
    <form @submit.prevent="createTask">
      <div class="text-field">
        <input type="text" v-model="newTask" placeholder="Введите новую задачу" />
      </div>
      <button type="submit" :disabled="!newTask.trim()">Добавить задачу</button>
    </form>
    <div class="task-list">
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <div class="task-card">
            <div class="card-content">
              <h3>{{ task }}</h3>
              <div class="card-actions">
                <button @click="editTask(index)">Редактировать</button>
                <button @click="deleteTask(index)">Удалить</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  import { useTaskStore } from '../stores/TaskStore';

    const store = useTaskStore();
    const newTask = ref('');
    const tasks = computed(() => store.tasks)

    const createTask = () => {
      store.addTask(newTask.value);
      newTask.value = '';
    };

    const editTask = (index) => {
      const editedTask = prompt('Введите отредактированную задачу', tasks.value[index]);
      if (editedTask) {
        store.editTask(index, editedTask);
      }
    };

    const deleteTask = (index) => {
      store.deleteTask(index);
    };

</script>

<style scoped>
  .task-list {
    max-width: 50em;
    margin: auto;
  }

  button {
    margin-left: 2em;
  }

  .task-card {
    padding: 10px;
    margin-bottom: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-actions button {
    margin-left: 8px;
  }

  .text-field {
    display: inline-block;
    position: relative;
  }

  .text-field input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    transition: border-color 0.3s;
  }

  .text-field input:focus {
    outline: none;
    border-color: #2196F3; /* Цвет при фокусе */
  }
  
</style>
