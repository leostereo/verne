<template>
  <v-container fluid>
    <v-row align="center" class="full-height" justify="center">
      <iframe src='https://www.w3schools.com'>
        <p>Your browser does not support iframes.</p>
      </iframe>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
  }),
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.full-height {
  height: calc(100vh - 48px);
}

</style>
