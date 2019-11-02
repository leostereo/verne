
const ProgramTrainGraphOptions = {
  title: {
    text: '',
  },
  chart: {
    type: 'line',
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
    },
  },
  series: [
    {
      name: 'tiempo(mins)',
      data: [],
    },
  ],
};

export default ProgramTrainGraphOptions;
