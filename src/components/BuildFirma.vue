<script setup>
import { ref, computed } from "vue";

// const sedeSeleccionada = ref("");
const listaSedes = ref([
  {
    name: "Chiclayo",
    sede: "Chiclayo (CC Boulevard)",
    direccion: "C.C. Boulevard: Av. Mariscal Nieto N°480- Chiclayo",
  },
  {
    name: "Chiclayo",
    sede: "Chiclayo (Principal)",
    direccion: "Av. Panamericana N° 4200 - Ex fundo iris - Chiclayo",
  },
  {
    name: "Lima",
    sede: "Lima (Surco)",
    direccion: "Av. Ayacucho N°126 – Surco - Surco",
  },
  {
    name: "Lima",
    sede: "Lima (Surquillo)",
    direccion: "Av. Angamos N°1669 - Surquillo",
  },
  {
    name: "Trujillo",
    sede: "Trujillo",
    direccion: "Av. Nicolás de Piérola N° 1475 - Trujillo",
  },
]);

const propsFirma = defineProps({
  fullname: String,
  cargo: String,
  phone: String,
  email: String,
  sedeSeleccionada: String,
});

const fullname = computed({
  get() {
    return propsFirma.fullname;
  },
  set(value) {
    emitValues("define:fullname", value);
  },
});

const cargo = computed({
  get() {
    return propsFirma.cargo;
  },
  set(value) {
    emitValues("define:cargo", value);
  },
});

const phone = computed({
  get() {
    return propsFirma.phone;
  },
  set(value) {
    emitValues("define:phone", value);
  },
});

const email = computed({
  get() {
    return propsFirma.email;
  },
  set(value) {
    emitValues("define:email", value);
  },
});

const sedeSeleccionada = computed({
  get() {
    return propsFirma.sedeSeleccionada;
  },
  set(value) {
    emitValues("define:sedeSeleccionada", value);
  },
});

const emitValues = defineEmits([
  "define:fullname",
  "define:cargo",
  "define:phone",
  "define:email",
  "define:sedeSeleccionada",
]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col :cols="12">
        <v-card
          max-width="700px"
          class="bg-grey-lighten-2"
          :elevation="1"
          variant="flat"
        >
          <v-card-item class="bg-primary">
            <v-card-title class="text-h6 text-uppercase">
              <v-icon
                icon="mdi-fire-circle"
                size="small"
                color="white"
                start
              ></v-icon>
              ¡Bienvenidos a la empresa!
            </v-card-title>
            <v-card-text
              class="mx-0 text-justify text-grey-lighten-1 text-caption"
            >
              <p>
                A continuación, por favor, ingresa tus datos corporativos para
                el llenado de tu firma digital.
              </p>
            </v-card-text>
          </v-card-item>

          <v-card-text>
            <div class="my-5">
              <v-row>
                <v-col :cols="12">
                  <v-form>
                    <v-row>
                      <v-col :cols="12">
                        <v-text-field
                          v-model="fullname"
                          prepend-inner-icon="mdi-account"
                          placeholder="Ingrese el Nombre Completo"
                          label="Nombre Completo"
                          required
                          hide-details
                          density="compact"
                          variant="outlined"
                          rounded
                          bg-color="white"
                        ></v-text-field>
                      </v-col>
                      <v-col :cols="12">
                        <v-text-field
                          v-model="email"
                          prepend-inner-icon="mdi-at"
                          type="email"
                          placeholder="Ingrese Email"
                          label="Email"
                          required
                          hide-details
                          density="compact"
                          variant="outlined"
                          rounded
                          bg-color="white"
                        ></v-text-field>
                      </v-col>
                      <v-col :cols="12">
                        <v-text-field
                          v-model="phone"
                          prepend-inner-icon="mdi-phone"
                          type="tel"
                          placeholder="Ingrese Celular"
                          label="Celular"
                          required
                          hide-details
                          density="compact"
                          variant="outlined"
                          rounded
                          bg-color="white"
                        ></v-text-field>
                      </v-col>
                      <v-col :cols="12">
                        <v-text-field
                          v-model="cargo"
                          prepend-inner-icon="mdi-barcode"
                          placeholder="Ingrese Cargo"
                          label="Cargo"
                          required
                          hide-details
                          density="compact"
                          variant="outlined"
                          rounded
                          bg-color="white"
                        ></v-text-field>
                      </v-col>
                      <v-col :cols="12">
                        <v-select
                          v-model="sedeSeleccionada"
                          :items="listaSedes"
                          item-title="sede"
                          item-value="direccion"
                          placeholder="Seleccione su sede"
                          prepend-inner-icon="mdi-map-marker"
                          label="Sede"
                          density="compact"
                          required
                          hide-details
                          variant="outlined"
                          rounded
                          bg-color="white"
                        >
                        </v-select>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
