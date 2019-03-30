<template>
  <div class="container">
    <div class="card">
      <div class="card-header">音乐控制</div>
      <div class="card-body">
        <div class="btn-group">
          <button class="btn btn-primary">
            <i class="fas fa-volume-mute" @click="volume_mute"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fas fa-volume-down" @click="volume_down"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fas fa-volume-up" @click="volume_up"></i>
          </button>
        </div>
        <div class="btn-group">
          <button class="btn btn-primary">
            <i class="fas fa-stop" @click="stop"></i>
          </button>
          <button class="btn btn-primary" @click="prev">
            <i class="fas fa-fast-backward"></i>
          </button>
          <button class="btn btn-primary">
            <i class="fas fa-play" @click="play_pause"></i>
          </button>
          <!-- <button class="btn btn-primary">
        <i class="fas fa-pause" ></i>
          </button>-->
          <button class="btn btn-primary" @click="next">
            <i class="fas fa-fast-forward"></i>
          </button>
        </div>
      </div>
    </div>
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
    },
    volume_mute() {
      axios.get("/volume_mute");
    },
    volume_up() {
      axios.get("/volume_up");
    },
    volume_down() {
      axios.get("/volume_down");
    },
    stop() {
      axios.get("/stop");
    },
    play_pause() {
      axios.get("/play_pause");
    }
  }
};
</script>

