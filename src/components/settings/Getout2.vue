<template>
  <v-card class="height verne-card justify-center">
    <v-card-title class="justify-center verne-text  subtitle-1">
      SALIR DEL SISTEMA
    </v-card-title>
    <v-card-actions mx-10 class="justify-center align-center">
      <v-row fluid justify="center">
        <v-btn
          to="/global-settings"
          class="my-10 verne-text"
          @click="exit()"
          outlined
          color="indigo"
          ><div class="verne-text">
            {{ button_state }}
          </div>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

const {remote} = require("electron")

export default {
  name: "getOut",
  data: () => ({
    button_state : "SALIR"
  }),
  mounted() {
  },
  methods: {
    exit() {
      
      //  if (document.fullscreenElement) {
      //    this.button_state = "SALIR"
      //    document.exitFullscreen();
      //  } else {
      //    document.documentElement.requestFullscreen();
      //    this.button_state = "VOLVER"
      //  }

        
      if(remote.getCurrentWindow().isFullScreen())
      {
      
        this.button_state = "VOLVER"
        remote.getCurrentWindow().setFullScreen(false);
        
      
      }else {
        this.button_state = "SALIR"
        remote.getCurrentWindow().setFullScreen(true);
        

      }

    }
  }
};
</script>
<style lang="scss" scoped>
.dashboard-card {
  height: calc(100vh - 320px);
}
.height{
  height: 320px;
}
.verne-text {
  font-family: $verne_text_font-family;
  color: $verne_text-color;
}
</style>
