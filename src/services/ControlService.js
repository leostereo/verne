import WebsocketService from './WebsocketService';
import { MESSAGE_CODES, MESSAGE_ACTIONS } from '../constants/Websocket';

class ControlService extends WebsocketService {
  constructor() {
    super();
    this.code = MESSAGE_CODES.CONTROL;
  }

  startPolling() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.START_STATUS_POLLING);
    this.sendMessage(message);
    this.play();
  }

  stopPolling() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.STOP_STATUS_POLLING);
    this.sendMessage(message);
  }

  play() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.START);
    this.sendMessage(message);
  }

  pause() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.PAUSE);
    this.sendMessage(message);
  }

  stop() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.STOP);
    this.sendMessage(message);
    this.stopPolling();
  }

  increaseInclination() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.INCLINE_UP);
    this.sendMessage(message);
  }

  decreaseInclination() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.INCLINE_DOWN);
    this.sendMessage(message);
  }

  increaseSpeed() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.SPEED_UP);
    this.sendMessage(message);
  }

  decreaseSpeed() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.SPEED_DOWN);
    this.sendMessage(message);
  }
}

export default new ControlService();
