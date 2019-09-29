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
      chartOptions: GraphService.createGraph(TrainingGraphOptions, this.getData),
    };
  },
  computed: mapState({
    isConnected: state => state.socket.isConnected,
    infoView: state => state.treadmill.info_view,
  }),
  mounted() {
    if (this.isConnected) {
      GraphService.subscribeInProgresChart();
    }
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
  watch: {
    isConnected(value) {
      if (value) {
        GraphService.subscribeInProgresChart();
      }
    },
    infoView(value) {
      console.log(value);
    },
  },
};
</script>

<style>
.chart {
  height: calc(100vh - 300px);
}
</style>
