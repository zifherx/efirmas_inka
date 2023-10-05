<script setup>
import { ref } from "vue";

// const logoNissan = ref("src/assets/logo_nissan_1.jpg");
// const logoNissan = ref("src/assets/logo_nissan_2.jpg");
const logoNissan = ref("src/assets/nissan_bg.png");
</script>

<template>
  <!-- class="bg-transparent" -->
  <v-app-bar class="bg-primary" :size="100" flat>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-toolbar-title>
      <div class="d-flex flex-row">
        <v-img
          class="ma-1"
          max-width="90"
          height="60"
          :src="logoNissan"
        ></v-img>
        <span class="my-auto">eFirmas Inka</span>
      </div>
    </v-toolbar-title>
  </v-app-bar>
</template>
