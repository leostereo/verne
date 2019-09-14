import Vue from 'vue';
import moment from 'moment';
import vuemoment from 'vue-moment';

moment.locale('es');

export default Vue.use(vuemoment, {
  moment,
});
