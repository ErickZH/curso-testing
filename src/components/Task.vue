<template>
    <div>
        <div>
            <span id="delete" @click="$emit('delete')">
                <slot></slot>
            </span>
        </div>
        {{ task }}
    </div>
</template>
<script>
export default {
    name: 'Task',
    props: {
        task: String
    }
}
</script>
