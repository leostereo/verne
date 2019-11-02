<template>
  <highcharts
    class="chart"
    :options="chartOptions"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Chart } from 'highcharts-vue';
import GraphService from '../../services/GraphService';
import TrainingGraphOptions from '../../constants/TrainingGraphOptions';

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: GraphService.createGraph(TrainingGraphOptions, this.loadChartData),
      interval: null,
      maxPoints: 20,
    };
  },
  computed: mapState({
    isConnected: state => state.socket.isConnected,
    infoView: state => state.treadmill.info_view,
  }),
  mounted() {},
  beforeDestroy() {
    clearInterval(this.interval);
    this.clearGraphSeries();
  },
  methods: {
    clearGraphSeries() {
      this.chartOptions.series[0].data = [];
      this.chartOptions.series[1].data = [];
    },
    loadChartData(data) {
      if (!data.charts) return;
      const speed = this.chartOptions.series[0].data;
      const speedPoints = data.charts[0].info;
      this.addPoint(speed, speedPoints);

      const inclination = this.chartOptions.series[1].data;
      const inclinationPoints = data.charts[1].info;
      this.addPoint(inclination, inclinationPoints);
    },
    addPoint(array, data) {
      const points = GraphService.getLastPoints(data, this.maxPoints);
      points.forEach(({ x, y }) => {
        if (array.length > this.maxPoints) array.shift();
        const time = this.$moment(x, 'mm:ss').unix() * 1000;
        const point = { x: time, y: Number(y) };
        array.push(point);
      });
    },
    subscribeInProgresChartData() {
      GraphService.subscribeInProgresChartData();
    },
  },
  watch: {
    isConnected(value) {
      if (value) {
        this.subscribeInProgresChartData();
      }
    },
    infoView(value) {
      this.loadChartData(value);
    },
  },
};
</script>

<style>
.chart {
  height: calc(100vh - 450px);
}
</style>
