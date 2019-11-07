<template>
<div class="context white--text ">
  <div class="rounded-corners-gradient-borders justify-center">
    <div class="circ_text">
      <span class="display-1">{{value}}</span><br><span>{{unit}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    unit: {
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
.circ_text{
  padding-top: 30px;
  margin: auto;
}
.rounded-corners-gradient-borders {
  text-align: center;
  position: absolute;
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
