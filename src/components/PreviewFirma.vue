<script setup>
import { ref } from "vue";

const propsFirma = defineProps({
  fullname: { type: String, default: "Nombre Completo" },
  cargo: { type: String, default: "Cargo" },
  phone: { type: String, default: "Celular" },
  email: { type: String, default: "Email" },
  direccion: { type: String, default: "Dirección" },
});

const logo_autoMotoresInka = ref("src/assets/logo_automotoresInka.png");

function getSede(cadenas) {
  const sede = cadenas.split("-")[1];
  return sede == undefined ? "" : sede.trim();
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-card variant="flat" class="bg-grey-lighten-2" :elevation="1">
          <v-card-item class="bg-primary text-white">
            <template> </template>
            <v-card-title>
              <v-icon>mdi-draw</v-icon>
              eFirma v1.0
            </v-card-title>
            <v-card-subtitle class="ml-10">Previsualización</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <div class="my-5">
              <v-row>
                <v-col :cols="12">
                  <p class="font-text-semibold">{{ propsFirma.fullname }}</p>
                  <p class="font-text-light mb-5">{{ propsFirma.cargo }}</p>
                  <p class="font-text-light">(+51) {{ propsFirma.phone }}</p>
                  <p class="font-text-light">{{ propsFirma.email }}</p>
                  <p class="font-text-light">{{ propsFirma.direccion }}</p>
                </v-col>
                <v-divider />
                <v-col :cols="9"></v-col>
                <v-spacer />
                <v-col :cols="3">
                  <v-img
                    class="align-self-end"
                    :max-width="180"
                    :width="160"
                    :src="
                      getSede(propsFirma.direccion) === 'Trujillo'
                        ? 'src/assets/logo_inkalider.png'
                        : 'src/assets/logo_automotoresinka.png'
                    "
                  ></v-img>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
@font-face {
  font-family: "Myriad Pro Light";
  src: url("../assets/Myriad-Pro-Light.otf");
}

@font-face {
  font-family: "Myriad Pro Semibold";
  src: url("../assets/Myriad-Pro-Semibold.otf");
}

.font-text-light {
  font-family: "Myriad Pro Light";
  font-size: 16px;
}

.font-text-semibold {
  font-family: "Myriad Pro Semibold";
  font-size: 20px;
}
</style>
