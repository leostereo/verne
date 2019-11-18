<template>
<div class="context white--text">
  <div class="rounded-corners-gradient-borders justify-center">
    <div class="inner_circle">
      <v-progress-circular
        :indeterminate="indeterminate"
        :rotate="rotate"
        :size="size"
        :value="myvalue"
        :width="width"
        color="light-blue"
      >
        <div class="verne_text">
          <span class="display-1">{{real}}</span>
          <br>
          <span>{{unit}}</span>
        </div>
     </v-progress-circular>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      indeterminate: false,
      rotate: 90,
      size: 160,
      value: 0,
      valor: 20,
      width: 10,
    };
  },
  props: {
    real: {
      type: String,
      required: true,
      default: '0',
    },
    unit: {
      type: String,
      required: true,
    },
    myvalue: {
      type: Number,
      default: 0,
      required: true,
    },
  },
};
</script>

<style>
.inner_circle {
  margin-top:-9px;
  margin-left:-14px;
  display: block;
  width: 170px;
  z-index: 1;
  position:relative;
}
.rounded-corners-gradient-borders {
  text-align: center;
  width: 150px;
  height: 150px;
  border: double 4px transparent;
  border-radius: 110px;
  background-image: linear-gradient(#3c3e55, #3c3e55),
   radial-gradient(circle at top left,  #00d1fc,#8457ff);
  background-origin: border-box;
  background-clip: content-box, border-box;
}
.context {
  margin:0%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: #3c3e55;
}
</style>
