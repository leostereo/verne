const StatsGraphOptions = {
  chart: {
    type: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    events: {},
  },
  title: {
    text: null,
  },
  tooltip: {
    enabled: false,
  },
  time: {
    useUTC: false,
  },
  xAxis: {
    type: '',
    tickPixelInterval: 150,
    autoRotationLimit: 40,
    title: {
      enabled: true,
      text: 'Tiempo',
      style: {
        color: 'white',
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
    categories: [],
    labels: {
      rotation: 0,
      style: {
        color: 'white',
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },

  },
  plotOptions: {
    pie: {
      showInLegend: false,
    },
  },
  yAxis: [{
    gridLineWidth: 0,
    min: 0,
    labels: {
      format: '{value} m/s',
      style: {
        color: 'white',
      },
    },

    title: {
      text: 'Velocidad',
      style: {
        color: 'white',
      },
    },
  },
  {
    gridLineWidth: 0,
    title: {
      text: 'Inclinación',
      style: {
        color: 'white',
      },
    },
    labels: {
      format: '{value} °',
      style: {
        color: 'white',
      },
    },
    opposite: true,
  }],
  series: [{
    name: 'Velocidad',
    type: 'line',
    yAxis: 0,
    zIndex: 1,
    showInLegend: false,
    color: 'red',
    data: [],
  },
  {
    name: 'Inclinación',
    type: 'line',
    yAxis: 1,
    color: 'blue',
    data: [],
    showInLegend: false,
  }],
  credits: false,
};

export default StatsGraphOptions;
