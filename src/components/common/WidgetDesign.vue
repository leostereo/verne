<template>
  <div class="context">
    <div class="rounded-corners-gradient-borders">
      <div class="icon"><img src="../../assets/png/wifi.png" /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '0',
      required: true,
    },
  },
};
</script>

<style>
.rounded-corners-gradient-borders {
  position: absolute;
  margin-left: 11px;
  margin-top: 11px;
  width: 110px;
  height: 110px;
  border: double 4px transparent;
  border-radius: 110px;
  background-image: linear-gradient(#3c3e55, #3c3e55),
   radial-gradient(circle at top left,  #00d1fc,#8457ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.context {
  width: 140px;
  height: 140px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  background: #3c3e55;
}

.icon {
  margin-top: 30px;
}

</style>
