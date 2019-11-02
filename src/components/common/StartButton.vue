<template>
          <div class="align-self-center">
            <div class="button_container">
              <v-btn  class="align-self-center" outlined large fab @click="redirect(cards[0].route, true)">
                <img style="height:220px" class="ml-0" src="../../assets/png/comenzar.svg" />
              </v-btn>
              <div class="centered">{{ button_text }}</div>
            </div>
          </div>
</template>

<style>
.button_container{
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  props: {
    button_text: {
      type: String,
      required: false,
    },
    source: {
      type: String,
      default: '',
      required: true,
    },
  },
};
</script>
