import WebsocketService from './WebsocketService';
import { MESSAGE_CODES, MESSAGE_ACTIONS } from '../constants/Websocket';

class GraphService extends WebsocketService {
  constructor() {
    super();
    this.code = MESSAGE_CODES.INFO_VIEW;
  }

  createGraph(options, load) {
    const graph = options;
    graph.series[0].data = this.createSerie(20, 0);
    graph.series[1].data = this.createSerie(20, 0);
    graph.chart.events.load = load;
    return graph;
  }

  createSerie(size, value) {
    this.data = [];
    const time = (new Date()).getTime();
    for (let i = -size; i <= 0; i += 1) {
      this.data.push({ x: time + i * 1000, y: value });
    }
    return this.data;
  }

  subscribeInProgresChart() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.GET_INPROGRESS_CHART);
    this.sendMessage(message);
  }
}

export default new GraphService();
