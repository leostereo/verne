import WebsocketService from './WebsocketService';
import { MESSAGE_CODES, MESSAGE_ACTIONS } from '../constants/Websocket';

class ProgramService extends WebsocketService {
  constructor() {
    super();
    this.code = MESSAGE_CODES.TRAINING_VIEW;
  }

  getProgramsData() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.GET_ALL_TRAININGS);
    this.sendMessage(message);
  }

  getProgramDetail(extra) {
    const message = this.createMessage(this.code,
      MESSAGE_ACTIONS.GET_TRAINING_DETAIL_BY_ID, extra);
    this.sendMessage(message);
  }

  getVirtualData() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.GET_ALL_VIRTUAL_TRAININGS);
    this.sendMessage(message);
  }

  getVirtualDetail(extra) {
    const message = this.createMessage(this.code,
      MESSAGE_ACTIONS.GET_VIRTUAL_TRAINING_DETAIL_BY_ID, extra);
    this.sendMessage(message);
  }
}

export default new ProgramService();
