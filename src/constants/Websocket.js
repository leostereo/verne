const SOCKET = {
  URL: 'ws://127.0.0.1',
  PORT: 8080,
  PATH: 'control',
  PROTOCOL: 'websocket',
  RECONNECTION_ATTEMPTS: 5,
  RECONNECTION_DELAY: 3000,
  MESSAGE_FORMAT: 'json',
  MUTATIONS: {
    SOCKET_ONMESSAGE: 'onMessage',
    SOCKET_ONOPEN: 'onOpen',
    SOCKET_ONCLOSE: 'onClose',
    SOCKET_ONERROR: 'onError',
    SOCKET_RECONNECT: 'onReconnect',
    SOCKET_RECONNECT_ERROR: 'onReconnectError',
  },
};

const MESSAGE_CODES = {
  CONTROL: 'control',
  INFO_VIEW: 'info_view',
  MAINTENANCE_VIEW: 'maintenance_view',
  TRAINING_VIEW: 'training_view',
  STATUS: 'status',
  VIEW: 'view',
};

const MESSAGE_ACTIONS = {
  SPEED_UP: 'speed_up',
  SPEED_DOWN: 'speed_down',
  START: 'start',
  PAUSE: 'pause',
  STOP: 'stop',
  EMERGENCY: 'emergency',
  INCLINE_UP: 'incline_up',
  INCLINE_DOWN: 'incline_down',
  START_STATUS_POLLING: 'start_status_polling',
  STOP_STATUS_POLLING: 'stop_status_polling',
  INCLINE_SET_POINT: 'incline_set_point',
  SPEED_SET_POINT: 'speed_set_point',
  GET_INPROGRESS_CHART: 'get_inprogress_chart',
};

export { SOCKET, MESSAGE_CODES, MESSAGE_ACTIONS };
