<template>
  <v-card class="card">
    <highcharts v-if="render"
    class="chart"
    :options="chartOptions"
  />  
  </v-card>  
</template>

<script>
import { Chart } from 'highcharts-vue';
import { mapState } from 'vuex';
//import ProgramTrainGraphOptions from '../../constants/ProgramTrainGraphOptions';
// import GraphService from '../../services/GraphService';

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
  data() {
    return {
      chartOptions: {
        title: {
          text: '',
            style: {
              color: 'white',
            },
        },
        chart: {
          type: 'line',
          backgroundColor: ' #3c3e55',

        },
        plotOptions: {
          series: {
            borderRadius: 10,
          },
        },
        xAxis: {
          categories: [],

        },
        yAxis: {
          title: {
            text: 'Velocidad',
            style: {
              color: 'white',
            },
          },
        },
        series: [
          {
            name: 'tiempo(mins)',
            style: {
              color: 'white',
            },
            data: [],
          },
        ],
      },
      render: false,
    };
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    yaxys: {
      type: String,
      require: true,
    },
    source: {
      type: String,
      require: true,
    },
  },
  computed: mapState({
    training_view: state => state.treadmill.training_view,
  }),
  methods: {
    createGraph() {
      this.chartOptions.title.text = this.title;
      this.chartOptions.yAxis.title.text = this.yaxys;
      this.training_view.training_element.training_secuence[this.source].info.forEach(this.pushData);
      this.render = true;
    },
    clearGraphSeries() {
      this.chartOptions.series[0].data = [];
    },
    pushData(item) {
      this.chartOptions.xAxis.categories.push(item.x);
      this.chartOptions.series[0].data.push(parseInt(item.y));
    },
    pushInclination(item) {
      this.chartOptions.series[1].data.push(parseInt(item.y));
    },
  },
};
</script>

<style scoped>
.chart {
  height: calc(100vh - 300px);
}
.card {
  background-color:transparent;
}
</style>
