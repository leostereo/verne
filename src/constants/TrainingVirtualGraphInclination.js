const TRAINING_VIRTUAL_INCLINATION_GRAPH = {
  credits: {
    enabled: false,
  },
  title: {
    text: 'Inclinacion por tiempo',
    style: {
      color: 'white',
    },
  },
  chart: {
    type: 'spline',
    backgroundColor: '#3c3e55',
  },
  legend: {
    enabled: false,
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
      text: 'Grados',
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

export default TRAINING_VIRTUAL_INCLINATION_GRAPH;
