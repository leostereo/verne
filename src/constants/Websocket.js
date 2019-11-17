const SOCKET = {
  URL: 'ws://localhost',
  URL1: 'ws://10.1.1.50',
  PORT: 8081,
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
  TRAIN_BY_DISTANCE: 'start_training_by_distance',
  TRAIN_BY_TIME: 'start_training_by_time',
  QUICK: 'start_quickstart_training',
  PROGRAM: 'start_training_by_id',
  VIRTUAL: 'start_virtual_training_by_id',
  STOP_STATUS_POLLING: 'stop_status_polling',
  INCLINE_SET_POINT: 'incline_set_point',
  SPEED_SET_POINT: 'speed_set_point',
  GET_INPROGRESS_CHART: 'get_inprogress_chart',
  GET_RESULT_SCREEN_INFO: 'get_result_screen_info',
  GET_ALL_TRAININGS: 'get_all_trainings',
  GET_TRAINING_DETAIL_BY_ID: 'get_training_detail_by_id',
  GET_ALL_VIRTUAL_TRAININGS: 'get_all_virtual_trainings',
  GET_VIRTUAL_TRAINING_DETAIL_BY_ID: 'get_virtual_training_detail_by_id',

};

export { SOCKET, MESSAGE_CODES, MESSAGE_ACTIONS };
