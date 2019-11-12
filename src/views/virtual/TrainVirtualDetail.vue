<template>
<div id="app">
  <video ref="myvideo"
    src="../../assets/videos/bata.mp4"
    width="400"></video>
    <hr>
    <button :disabled="isPlaying" @click="play">Play</button>
    <button :disabled="!isPlaying" @click="stop">Stop</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    play() {
      this.$refs.myvideo.play();
      this.isPlaying = true;
    },
    stop() {
      this.$refs.myvideo.pause();
      this.isPlaying = false;
    },
  },
};
</script>
