
const ProgramGraphicOptions = {
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
};

export default ProgramGraphicOptions;
