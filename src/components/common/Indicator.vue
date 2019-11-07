<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-col cols="12">
        <div class="container-rounded">
        {{ value }}
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" class="chip-title text-center" v-if="title">{{title}}</v-col>
    </v-row>
  </div>
</template>

<style>


.container-rounded {
  border-radius: 25px;
  border-width: 7px;
  border-style: solid;
  border-color: #3c3e55;
  background: linear-gradient(to right, rgba(132,87,255,1) 0%,
    rgba(108,108,254,1) 27%, rgba(48,164,253,1) 71%, rgba(0,210,252,1) 100%);
  width: 100px;
  height: 50px;
  padding-top:7px;
  text-align: center;
  color: #dbddf3;
  font-family: Open Sans, sans-serif;
}

</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      default: '0',
      required: true,
    },
  },
};
</script>
