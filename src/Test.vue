<template>
    <div>
        <h3>There can only be 1 room element in our template. Thats why we have a div tag</h3>
        <h1>{{ h1_counter }}</h1>
        <div>{{ counter }}</div>
        <button @click="add">Add</button>
        <button @click="reset">Reset</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            h1_counter: 'Counter',
            counter: 0
        }
    },
    methods: {
        add(){
            this.counter++
        },
        reset(){
            this.counter = 0
        }
    }
}
</script>