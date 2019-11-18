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
- Integrar y ajustar estilos (Programa distancia, tiempo y detalle en entrenamientos programados)
- Implementación del componente quick start?
- Revisar error al clickear en botones del menú de entrenamiento
- Revisar error acumulativo en la pantalla de entrenamiento
- Revisar errores de consola en general
- Revisar verne.css y variables globales que queden definidas
- Revisar comportamiento de los indicadores de velocidad e inclinación en el entrenamiento
