<script setup>
const propsFirma = defineProps({
  fullname: { type: String, default: "Nombre Completo" },
  cargo: { type: String, default: "Cargo" },
  phone: { type: String, default: "Celular" },
  email: { type: String, default: "Email" },
  direccion: { type: String, default: "Dirección" },
});

function getSede(cadenas) {
  const sede = cadenas.split("-")[1];
  return sede == undefined ? "" : sede.trim();
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-card variant="flat" :elevation="1">
          <v-card-item class="bg-primary text-white">
            <template> </template>
            <v-card-title>
              <v-icon>mdi-draw</v-icon>
              eFirma v1.0
            </v-card-title>
            <v-card-subtitle class="ml-10">Previsualización</v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <div class="my-1">
              <v-row>
                <v-col :cols="12">
                  <p>{{ propsFirma.fullname }}</p>
                  <p>{{ propsFirma.cargo }}</p>
                  <p>{{ propsFirma.phone }}</p>
                  <p>{{ propsFirma.email }}</p>
                  <p>{{ propsFirma.direccion }}</p>
                  <p>{{ getSede(propsFirma.direccion) }}</p>
                </v-col>
                <v-divider />
                <v-spacer />
                <v-img src="@/assets/logo_automotoresInka.png"></v-img>
                <!-- :src="
                    getSede(propsFirma.direccion) === 'Trujillo'
                      ? '@/assets/logo_inkalider.png'
                      : '@/assets/logo_automotoresinka.png'
                  " -->
              </v-row>
            </div>
          </v-card-text>
          <v-card-text>
            <pre>
              {{ propsFirma }}
            </pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
