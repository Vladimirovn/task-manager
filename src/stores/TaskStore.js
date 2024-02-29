import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref(JSON.parse(sessionStorage.getItem('tasks')) || []);

    const saveTasksToSessionStorage = () => {
        sessionStorage.setItem('tasks', JSON.stringify(tasks.value));
    };

    const addTask = (newTask) => {
        tasks.value.push(newTask);
        saveTasksToSessionStorage();
    };

    const editTask = (index, task) => {
        tasks.value[index] = task;
        saveTasksToSessionStorage();
    };

    const deleteTask = (index) => {
        tasks.value.splice(index, 1);
        saveTasksToSessionStorage();
    };

    return {
        tasks,
        addTask,
        editTask,
        deleteTask,
    };
})