<template>
  <highcharts
    class="chart"
    :options="chartOptions"
  />
</template>

<script>
import { Chart } from 'highcharts-vue';
import GraphService from '../../services/GraphService';
import TrainingGraphOptions from '../../constants/TrainingGraphOptions';

export default {
  components: {
    highcharts: Chart,
  },
  data() {
    return {
      chartOptions: GraphService.createGraph(TrainingGraphOptions, this.getData),
    };
  },
  methods: {
    getData() {
      const velocidad = this.chartOptions.series[0].data;
      const inclinacion = this.chartOptions.series[1].data;
      setInterval(() => {
        const x = (new Date()).getTime();
        const y = parseInt((Math.random() * 10).toFixed(0), 10);
        const z = parseInt((Math.random() * 10).toFixed(0), 10);
        velocidad.shift();
        velocidad.push([x, y]);
        inclinacion.shift();
        inclinacion.push([x, z]);
      }, 1000);
    },
  },
};
</script>

<style>
.chart {
  height: calc(100vh - 300px);
}
</style>
