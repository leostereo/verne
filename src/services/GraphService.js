
const GraphService = {
  createGraph(options, load) {
    const graph = options;
    graph.series[0].data = this.createSerie(20, 0);
    graph.series[1].data = this.createSerie(20, 0);
    graph.chart.events.load = load;
    return graph;
  },
  createSerie(size, value) {
    const data = [];
    const time = (new Date()).getTime();
    for (let i = -size; i <= 0; i += 1) {
      data.push({ x: time + i * 1000, y: value });
    }
    return data;
  },
};

export default GraphService;
