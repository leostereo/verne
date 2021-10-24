<template>
  <v-row justify="end" class="align-center">
    <div class="my-2">
      <v-btn icon small class="mx-3">
        <img style="height:20px" src="../../assets/icons/audifonos.svg" alt="">
      </v-btn>
      <v-btn text class="white--text">
        Volumen
      </v-btn>
    </div>
      <v-btn icon small class="mx-3" @click="setVolume('down')">
        <img style="height:30px" src="../../assets/icons/less_vol.svg" alt="">
      </v-btn>
      <v-btn icon small class="mx-3" @click="setVolume('up')">
        <img style="height:30px" src="../../assets/icons/more_vol.svg" alt="">
      </v-btn>
      <v-btn icon small class="mx-3" @click="setVolume('mute')">
        <img style="height:30px" src="../../assets/icons/silenciar.svg" alt="">
      </v-btn>
  </v-row>
</template>

<script>
import AdminService from "../../services/AdminService";

export default {
  name: "volumen",
   methods: {
    setVolume (type){
      AdminService.setVolume({type});
    }
  },
}
</script>

<style>

</style>