<template>
  <div>
    <my-a />
    <!-- <button @click="prev">上一首</button>
    <button @click="next">下一首</button> -->
  </div>
</template>
<script>
import axios from 'axios'
import a from './a.vue'

export default {
  components: {
    myA: a,
  },
  methods: {
    prev() {
      axios.get('/prev');
    },
    next() {
      axios.get('/next');
    },
  }
}
</script>
