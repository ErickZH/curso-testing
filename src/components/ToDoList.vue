<template>
    <div>
        <Header/>
        <Task v-for="task in tasks" :key="task" :task="task" @delete="deleteTask(task)"/>
    </div>
</template>
<script>
import Task from './Task'
import Header from './Header'
export default {
    name: 'ToDoList',
    data() {
        return {
            tasks: []
        }
    },
    components: {
        Task,
        Header,
    },

    methods: {
        deteleTask(task) {
            console.log(task);
        }
    },
}
</script>