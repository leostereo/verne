<template>
  <v-card class="card">
    <highcharts v-if="render" class="chart" :options="chartOptions" />
  </v-card>
</template>

<script>
import { Chart } from 'highcharts-vue';
import { mapState } from 'vuex';

export default {
  mounted() {
    this.createGraph();
  },
  beforeMount() {
  },
  beforeDestroy() {
    this.clearGraphSeries();
  },
  components: {
    highcharts: Chart,
  },
  data: () => ({
    chartOptions: null,
    render: false,
  }),
  props: {
    options: {
      type: Object,
      require: true,
    },
    source: {
      type: Number,
      require: true,
    },
  },
  computed: mapState({
    training_view: state => state.treadmill.training_view,
  }),
  methods: {
    createGraph() {
      this.chartOptions = this.options;
      this.training_view.training_element
        .training_secuence[this.source].info.forEach(this.pushData);
      this.render = true;
    },
    clearGraphSeries() {
      this.chartOptions.series[0].data = [];
    },
    pushData(item) {
      this.chartOptions.xAxis.categories.push(item.x);
      this.chartOptions.series[0].data.push(Number(item.y));
    },
    pushInclination2(item) {
      this.chartOptions.series[1].data.push(Number(item.y));
    },
  },
};
</script>

<style scoped>
.card {
  background-color:transparent;
}
</style>
