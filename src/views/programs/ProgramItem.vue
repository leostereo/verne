<template>
<v-card class="verne_back ml-10">
  <v-card-title
    class="justify-center fill-height verne_text"
    @click="redirect('/training-program-detail',false,training_id)"
  >
    {{name}}
  </v-card-title>
  <divider></divider>
  <v-list-item-group>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/png/nivel.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          nivel: {{ level }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/png/tiempo.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          tiempo: {{ time }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <img style="height:30px" src="../../assets/png/creador.svg" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          Creador: {{ creator }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list-item-group>
  <v-divider></v-divider>
  <div class="but_frame">
    <button
      class="verne_degrade container-rounded"
      @click="redirect('/training',true,training_id)"
    >
      COMENZAR
    </button>
  </div>
</v-card>
</template>

<script>
import Divider from '../../components/common/Divider.vue';

export default {
  components: {
    Divider,
  },
  props: {
    training_id: {
      type: String,
      default: '0',
      required: true,
    },
    name: {
      type: String,
      default: '0',
      required: true,
    },
    time: {
      type: String,
      default: '0',
      required: true,
    },
    creator: {
      type: String,
      default: '0',
      required: true,
    },
    level: {
      type: String,
      default: '0',
      required: true,
    },
  },
  methods: {
    redirect(path, showCounter, id) {
      this.$emit('show-counter', { path, showCounter, id });
    },
  },
};
</script>

<style scoped>
.but_frame {
  margin-left:20px;
  margin-top:10px;
  margin-bottom:10px;
}
.container-rounded {
  width: 150px;
  height: 35px;
  padding-top:2px;
  margin-bottom:10px;
  text-align: center;
  color: #dbddf3;
  font-family: Open Sans, sans-serif;
}
</style>
