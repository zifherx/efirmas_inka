<script setup>
import { ref } from "vue";
import buildFirma from "@/components/BuildFirma.vue";
import previewFirma from "@/components/PreviewFirma.vue";

const oneWhite = ref({
  colaborador: "",
  rol: "",
  celular: "",
  correo: "",
  sede: "",
});

function defineColaborador(value) {
  oneWhite.value.colaborador = value;
}
function defineRol(value) {
  oneWhite.value.rol = value;
}
function defineCelular(value) {
  oneWhite.value.celular = value;
}
function defineCorreo(value) {
  oneWhite.value.correo = value;
}
function defineSede(value) {
  oneWhite.value.sede = value;
}
</script>

<template>
  <div>
    <v-row>
      <v-col :cols="12" :sm="12" :md="5" :lg="4">
        <buildFirma
          :fullname="oneWhite.colaborador"
          :cargo="oneWhite.rol"
          :phone="oneWhite.celular"
          :email="oneWhite.correo"
          :sede-seleccionada="oneWhite.sede"
          @define:fullname="defineColaborador"
          @define:cargo="defineRol"
          @define:phone="defineCelular"
          @define:email="defineCorreo"
          @define:sedeSeleccionada="defineSede"
        />
      </v-col>
      <v-col :cols="12" :sm="12" :md="7" :lg="8">
        <previewFirma
          :fullname="oneWhite.colaborador"
          :cargo="oneWhite.rol"
          :phone="oneWhite.celular"
          :email="oneWhite.correo"
          :direccion="oneWhite.sede"
        />
      </v-col>
    </v-row>
  </div>
</template>
