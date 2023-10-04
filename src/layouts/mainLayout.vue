<script setup>
import AppBar from "../components/AppBar.vue";
</script>

<template>
  <v-app>
    <!-- <v-layout class="rounded rounde-md"> -->
    <AppBar />
    <v-main class="bg-grey-lighten-2">
      <router-view />
    </v-main>
    <!-- </v-layout> -->
  </v-app>
</template>
