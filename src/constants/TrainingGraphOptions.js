import Highcharts from 'highcharts';

const TrainingGraphOptions = {
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
    type: 'datetime',
    tickPixelInterval: 150,
    title: {
      enabled: false,
      text: 'Tiempo',
    },
    labels: {
      rotation: 0,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
    dateTimeLabelFormats: {
      millisecond: '%H:%M:%S',
      second: '%H:%M:%S',
      minute: '%H:%M:%S',
      hour: '%H:%M:%S',
      day: '%H:%M:%S',
      week: '%H:%M:%S',
      month: '%H:%M:%S',
      year: '%H:%M:%S',
    },
  },
  plotOptions: {
    pie: {
      showInLegend: false,
    },
  },
  yAxis: [{
    min: 0,
    labels: {
      format: '{value} m/s',
      style: {
        color: Highcharts.getOptions().colors[1],
      },
    },
    title: {
      text: 'Velocidad',
      style: {
        color: Highcharts.getOptions().colors[1],
      },
    },
  },
  {
    title: {
      text: 'Inclinación',
      style: {
        color: Highcharts.getOptions().colors[0],
      },
    },
    labels: {
      format: '{value} °',
      style: {
        color: Highcharts.getOptions().colors[0],
      },
    },
    opposite: true,
  }],
  series: [{
    name: 'Velocidad',
    type: 'spline',
    yAxis: 0,
    zIndex: 1,
    showInLegend: false,
    color: Highcharts.getOptions().colors[1],
    data: [],
    dataLabels: {
      enabled: true,
      rotation: -90,
      color: '#FFFFFF',
      align: 'right',
      format: '{point.y:.0f}', // cero decimal
      y: 10, // 10 pixels down from the top
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif',
      },
    },
  },
  {
    name: 'Inclinación',
    type: 'column',
    yAxis: 1,
    color: Highcharts.getOptions().colors[0],
    data: [],
    showInLegend: false,
  }],
  credits: false,
};

export default TrainingGraphOptions;
