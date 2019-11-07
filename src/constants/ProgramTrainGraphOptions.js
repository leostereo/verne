const ProgramTrainGraphOptions = {
  title: {
    text: '',
  },
  chart: {
    type: 'line',
    backgroundColor: '#3c3e55',

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