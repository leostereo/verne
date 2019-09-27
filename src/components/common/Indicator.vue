<template>
  <div>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12">
        <p class="indigo chip text-center">{{value}}</p>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" class="chip-title text-center" v-if="title">{{title}}</v-col>
    </v-row>
  </div>
</template>

<style>
.chip {
  border-radius: 20px;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  line-height: 1;
  margin-bottom: 0px !important;
}
.chip-title {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  color: indigo;
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
      type: Number,
      default: 0.0,
      required: true,
    },
  },
};
</script>
