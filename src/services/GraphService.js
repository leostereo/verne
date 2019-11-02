import moment from 'moment';
import WebsocketService from './WebsocketService';
import { MESSAGE_CODES, MESSAGE_ACTIONS } from '../constants/Websocket';

class GraphService extends WebsocketService {
  constructor() {
    super();
    this.code = MESSAGE_CODES.INFO_VIEW;
  }

  createGraph(options, load) {
    this.graph = options;
    this.graph.chart.events.load = load;
    return this.graph;
  }

  createSerie(size, value) {
    this.data = [];
    const time = moment('00:00:00', 'HH:mm:ss');
    for (let i = -size; i < 0; i += 1) {
      const x = time.add(1, 'seconds').unix() * 1000;
      this.data.push({ x, y: value });
    }
    return this.data;
  }

  getLastPoints(array, size) {
    this.data = array;
    return this.data.slice(-size);
  }

  subscribeInProgresChartData() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.GET_INPROGRESS_CHART);
    this.sendMessage(message);
  }

  getStatsChartData() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.GET_RESULT_SCREEN_INFO);
    this.sendMessage(message);
  }
}

export default new GraphService();
