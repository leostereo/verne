const StatsGraphOptions = {
  chart: {
    zoomType: 'x',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    events: {},
    height: '60%',
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
    type: 'linear',
    tickPixelInterval: 150,
    autoRtationLimit: '',
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
    line: {
      marker: {
        enabled: false,
      },
    },
    pie: {
      showInLegend: true,
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
        color: 'orange',
      },
    },
    labels: {
      format: '{value} °',
      style: {
        color: 'orange',
      },
    },
    opposite: true,
  }],
  series: [{
    name: 'Velocidad',
    type: 'column',
    yAxis: 0,
    zIndex: 1,
    borderRadius: 4,
    showInLegend: false,
    data: [],
  },
  {
    name: 'Inclinación',
    type: 'line',
    yAxis: 1,
    zIndex: 2,
    color: 'orange',
    data: [],
    showInLegend: false,
  }],
  credits: false,
};

export default StatsGraphOptions;
