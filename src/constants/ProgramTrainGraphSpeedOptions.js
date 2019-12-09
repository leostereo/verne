const ProgramTrainGraphSpeedOptions = {
  title: {
    text: 'Velocidad por tiempo',
    style: {
      color: 'white',
    },
  },
  chart: {
    type: 'column',
    backgroundColor: '#3c3e55',
  },
  plotOptions: {
    series: {
      borderRadius: 4,
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
      text: 'Kms/h',
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

export default ProgramTrainGraphSpeedOptions;
