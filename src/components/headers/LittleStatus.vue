<template>
    <v-row class="verne-text">
      <v-col cols="3">
        <v-chip class=""
        color="#3c3e55"
        text-color="#dbddf3"
        pill
        >
          <v-avatar left height="62" class="mr-2">
            <img src="../../assets/icons/velocidad_sup.svg">
          </v-avatar>
          {{speed}}KM/s
        </v-chip>
         </v-col>
      <v-col cols="3">
       <v-chip class=""
        color="#3c3e55"
        text-color="#dbddf3"
        pill
        >
          <v-avatar left height="62" class="mr-2">
            <img src="../../assets/icons/inclinacion_sup.svg">
          </v-avatar>
          {{inclination}}º
        </v-chip>
      </v-col>

      <v-col cols="3">
       <v-chip
        color="#3c3e55"
        text-color="#dbddf3"
        pill
        >
          <v-avatar left  height="62" class="mr-2">
            <img src="../../assets/icons/distancia_sup.svg">
          </v-avatar>
          {{kms}}kms
        </v-chip>
      </v-col>
      <v-col cols="3">
       <v-chip class=""
        color="#3c3e55"
        text-color="#dbddf3"
        pill
        >
          <v-avatar left height="62" class="mr-2">
            <img src="../../assets/icons/tiempo_sup.svg">
          </v-avatar>
          {{training_time}}
        </v-chip>

      </v-col>
      </v-row>
</template>

<script>
import { mapState } from 'vuex';


export default {
  components: {
  },
  computed: mapState({
    speed: state => state.treadmill.status.speed,
    inclination: state => state.treadmill.status.inclination,
    kms: state => state.treadmill.status.kms,
    training_time: state => state.treadmill.status.training_time,
  }),
};
</script>
<style lang="scss" scoped>

.header{
background:transparent;
}

.circle {
  background: #3c3e55;
  border-radius: 45px;
  height: 60px;
  width: 60px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.data {
  padding-left: 20px;
  background: #3c3e55;
  margin-top: 20px;
  margin-left: -20px;
  border-bottom-right-radius: 35px;
  border-top-right-radius: 35px;
  height: 50px;
  width: calc(100% - 40px);
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  margin-top: 5px;
  margin-left: -5px;
  color: white;
}
.litle {
  height: 70px;
}
</style>
