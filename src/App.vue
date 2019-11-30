<template>
  <v-app>
    <v-content class="back">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
<style>
.back {
  background-image: url("assets/images/fondo2.png");
  background-size: cover;
}
</style>

@todo
- Revisar comportamiento de los indicadores de velocidad e inclinación en el entrenamiento
