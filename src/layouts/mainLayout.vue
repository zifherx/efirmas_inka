<script setup>
import AppBar from "../components/AppBar.vue";
</script>

<template>
  <v-app>
    <!-- <v-layout class="rounded rounde-md"> -->
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
    <!-- </v-layout> -->
  </v-app>
</template>
