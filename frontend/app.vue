<template>
  <div>
    <button>
      <i class="fas fa-volume-mute"></i>
    </button>
    <button>
      <i class="fas fa-volume-down"></i>
    </button>
    <button>
      <i class="fas fa-volume-up"></i>
    </button>
    <button>
      <i class="fas fa-stop"></i>
    </button>
    <button>
      <i class="fas fa-play"></i>
    </button>
    <button>
      <i class="fas fa-pause"></i>
    </button>
    <button @click="prev">
      <i class="fas fa-fast-backward"></i>
    </button>
    <button @click="next">
      <i class="fas fa-fast-forward"></i>
    </button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  methods: {
    prev() {
      axios.get("/prev");
    },
    next() {
      axios.get("/next");
    }
  }
};
</script>
<style lang="sass">

button{
    background-color:red;
}

</style>
