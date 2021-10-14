<template>
  <v-card class="dashboard-card verne-card justify-center">
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
            SALIR
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
  data: () => ({}),
  mounted() {
    let elem = document.documentElement;
    elem.requestFullscreen;
    console.log("uri " + document.documentURI);
  },
  methods: {
    exit() {
      console.log("uri " + document.documentURI);
      // if (document.fullscreenElement) {
      //   document.exitFullscreen();
      // } else {
      //   document.documentElement.requestFullscreen();
      // }

        
     if(remote.getCurrentWindow().isFullScreen())
     {
      
       remote.getCurrentWindow().setFullScreen(false);
      
     }else {
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
.verne-text {
  font-family: $verne_text_font-family;
  color: $verne_text-color;
}
</style>
