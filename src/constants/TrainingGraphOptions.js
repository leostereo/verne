// import Highcharts from 'highcharts';

const TrainingGraphOptions = {
  chart: {
    type: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    events: {},
    height: '35%',
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
        color: 'white',
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
    title: {
      text: 'Inclinación',
      style: {
        // color: Highcharts.getOptions().colors[0],
        color: 'orange',
      },
    },
    labels: {
      format: '{value} °',
      style: {
        color: 'orange',
        // color: Highcharts.getOptions().colors[0],
      },
    },
    opposite: true,
  }],
  series: [{
    name: 'Velocidad',
    type: 'column',
    yAxis: 0,
    zIndex: 1,
    showInLegend: false,
    // color: Highcharts.getOptions().colors[1],
    borderRadius: 4,
    data: [],
    dataLabels: {
      enabled: false,
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
    type: 'spline',
    yAxis: 1,
    zIndex: 2,
    // color: Highcharts.getOptions().colors[0],
    color: 'orange',
    data: [],
    showInLegend: false,
  }],
  credits: false,
};

export default TrainingGraphOptions;
