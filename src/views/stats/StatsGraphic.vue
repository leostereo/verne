<template>
  <highcharts v-if="render" class="chart" :options="chartOptions" />
</template>

<script>
import { Chart } from 'highcharts-vue';
import { mapState } from 'vuex';
import StatsGraphOptions from '../../constants/StatsGraphOptions';
import GraphService from '../../services/GraphService';

export default {
  beforeMount() {
    this.getStatsChartData();
  },
  beforeDestroy() {
    this.clearGraphSeries();
  },
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: StatsGraphOptions,
      render: false,
    };
  },
  computed: mapState({
    stats: state => state.treadmill.stats,
  }),
  methods: {
    getStatsChartData() {
      GraphService.getStatsChartData();
    },
    clearGraphSeries() {
      this.chartOptions.xAxis.categories = [];
      this.chartOptions.series[0].data = [];
      this.chartOptions.series[1].data = [];
    },
    createGraphSeries(serieObj) {
      serieObj[0].info.forEach(this.pushSpeed);
      serieObj[1].info.forEach(this.pushInclination);
    },
    pushSpeed(item) {
      this.chartOptions.xAxis.categories.push(item.x);
      this.chartOptions.series[0].data.push(Number(item.y));
    },
    pushInclination(item) {
      this.chartOptions.series[1].data.push(Number(item.y));
    },
  },
  watch: {
    stats(value) {
      this.createGraphSeries(value.charts);
      this.render = true;
    },
  },
};
</script>

<style scoped>
.chart {
  height: 580px;
}
</style>
