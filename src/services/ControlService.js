import WebsocketService from './WebsocketService';
import { MESSAGE_CODES, MESSAGE_ACTIONS } from '../constants/Websocket';

class ControlService extends WebsocketService {
  constructor() {
    super();
    this.code = MESSAGE_CODES.CONTROL;
  }

  startPolling() {
    this.play();
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.START_STATUS_POLLING);
    this.sendMessage(message);
  }

  stopPolling() {
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.STOP_STATUS_POLLING);
    this.sendMessage(message);
  }

  startTraining(extra) {
    let action = MESSAGE_ACTIONS.QUICK;
    let data = {};
    switch (extra.training_mode) {
      case 'time':
        action = MESSAGE_ACTIONS.TRAIN_BY_TIME;
        data = { ...extra, training_time: extra.training_value };
        break;
      case 'distance':
        action = MESSAGE_ACTIONS.TRAIN_BY_DISTANCE;
        data = { ...extra, training_distance: extra.training_value };
        break;
      case 'program':
        action = MESSAGE_ACTIONS.PROGRAM;
        data = { ...extra, training_id: extra.training_value };
        break;
      case 'virtual':
        action = MESSAGE_ACTIONS.VIRTUAL;
        data = { ...extra, training_id: extra.training_value };
        break;
      default:
        data = { ...extra, training_id: extra.training_id };
        break;
    }
    const message = this.createMessage(MESSAGE_CODES.TRAINING_VIEW, action, data);
    this.sendMessage(message);
  }

  startTrainingByTime(extra) {
    const message = this.createMessage(MESSAGE_CODES.TRAINING_VIEW,
      MESSAGE_ACTIONS.START_TRAINING_BY_TIME, { training_time: extra.training_value });
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

  SetPoint(variable, value) {
    let action;
    if (variable === 'speed') {
      action = MESSAGE_ACTIONS.SPEED_SET_POINT;
    }
    if (variable === 'inclination') {
      action = MESSAGE_ACTIONS.INCLINE_SET_POINT;
    }
    const message = this.createSetPointMessage(this.code, action, value);
    this.sendMessage(message);
  }
}

export default new ControlService();
