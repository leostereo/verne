import WebsocketService from './WebsocketService';
import { MESSAGE_CODES, MESSAGE_ACTIONS } from '../constants/Websocket';

class AdminService extends WebsocketService {
  constructor() {
    super();
    this.code = MESSAGE_CODES.ADMIN;
  }
  connectWifi(params){
    const message = this.createMessage(this.code, MESSAGE_ACTIONS.SET_WIFI, params);
    this.sendMessage(message);
  }
  
}

export default new AdminService();
