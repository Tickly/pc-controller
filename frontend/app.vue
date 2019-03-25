<template>
    <div>
        <button @click="prev">上一首</button>
        <button @click="next">下一首</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    methods:{
        prev(){
            axios.get('/prev');
        },
        next(){
            axios.get('/next');
        },
    }
}
</script>
