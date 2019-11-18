<template>
  <v-card class="card">
    <highcharts v-if="render" class="chart" :options="chartOptions" />
  </v-card>
</template>

<script>
import Vue from 'vue';
import { Chart } from 'highcharts-vue';
import { mapState } from 'vuex';

const TrainingProgramGraphic = Vue.extend({
  created() {
    this.createGraph();
  },
  beforeDestroy() {
    this.clearGraphSeries();
  },
  components: {
    highcharts: Chart,
  },
  data: () => ({
    chartOptions: {
      credits: {
        enabled: false,
      },
      title: {
        text: '',
        style: {
          color: 'white',
        },
      },
      chart: {
        type: 'spline',
        backgroundColor: '#3c3e55',
      },
      plotOptions: {
        series: {
          borderRadius: 10,
        },
      },
      xAxis: {
        title: {
          enabled: true,
          text: 'Tiempo (mins)',
          style: {
            color: 'white',
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
        categories: [],
        labels: {
          style: {
            color: 'white',
          },
        },
      },
      yAxis: {
        title: {
          enabled: true,
          text: 'Tiempo',
          style: {
            color: 'white',
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif',
          },
        },
        labels: {
          style: {
            color: 'white',
          },
        },
      },
      series: [
        {
          name: '',
          data: [],
        },
      ],
    },
    render: false,
  }),
  props: {
    source: {
      type: String,
      require: true,
    },
    options: {
      type: Object,
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
        .training_secuence[Number(this.source)].info.forEach(this.pushData);
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
});

export default TrainingProgramGraphic;
</script>

<style scoped>
.chart {
  height: 350px;
}
.card {
  background-color:transparent;
}
</style>
