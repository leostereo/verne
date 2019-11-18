const ProgramTrainGraphInclinationOptions = {
  title: {
    text: 'Inclinacion por tiempo',
    style: {
      color: 'white',
    },
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
    labels: {
      style: {
        color: 'white',
      },
    },
  },
  yAxis: {
    title: {
      text: 'Grados',
      style: {
        color: 'white',
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
      name: 'Tiempo (mins)',
      data: [],
    },
  ],
  legend: {
    itemStyle: {
      color: 'white',
    },
  },
  credits: false,
};

export default ProgramTrainGraphInclinationOptions;
