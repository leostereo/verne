const TRAINING_VIRTUAL_SPEED_GRAPH = {
  credits: {
    enabled: false,
  },
  title: {
    text: 'Velocidad por tiempo',
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
      text: 'Kms/h',
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
};

export default TRAINING_VIRTUAL_SPEED_GRAPH;