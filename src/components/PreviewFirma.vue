<script setup>
import { ref } from "vue";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { saveAs } from "file-saver";

// const logoNissan = ref("src/assets/logo_nissan_black.png");

const propsFirma = defineProps({
  fullname: { type: String, default: "Nombre Completo" },
  cargo: { type: String, default: "Cargo" },
  phone: { type: String, default: "Celular" },
  email: { type: String, default: "Email" },
  direccion: { type: String, default: "Dirección" },
});

// const logo_autoMotoresInka = ref("src/assets/logo_automotoresInka.png");
// const logo_inkalider = ref("src/assets/logo_inkalider.png");

function getSede(cadenas) {
  const sede = cadenas.split("-")[1];
  return sede == undefined ? "" : sede.trim();
}

function downloadFirma() {
  document.getElementById("mi-firma").style.backgroundColor = "#fff";
  toPng(document.getElementById("mi-firma")).then(function (dataUrl) {
    saveAs(
      dataUrl,
      `eFirma_${propsFirma.fullname}_${new Date().getTime()}.png`
    );
  });
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col :cols="12" :sm="12" :md="12" :lg="12">
        <v-card variant="flat" :elevation="1">
          <v-card-item class="bg-primary text-white">
            <div class="d-flex flex-row">
              <v-card-title>
                <v-icon>mdi-draw</v-icon>
                eFirma v1.0
                <v-card-subtitle class="ml-10">
                  Previsualización
                </v-card-subtitle>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-tooltip text="Descargar Firma">
                <template v-slot:activator="{ props }">
                  <v-btn
                    icon="mdi-download"
                    variant="elevated"
                    color="white"
                    size="x-small"
                    v-bind="props"
                    @click="downloadFirma()"
                  >
                  </v-btn>
                </template>
              </v-tooltip>
            </div>
          </v-card-item>

          <v-card-text id="mi-firma">
            <div class="mt-5">
              <v-row>
                <v-col :cols="12" :sm="12" :md="12" :lg="12">
                  <p class="font-text-semibold">
                    {{
                      propsFirma.fullname === ""
                        ? "Nombre Completo"
                        : propsFirma.fullname
                    }}
                  </p>
                  <p class="font-text-light mb-5">
                    {{ propsFirma.cargo === "" ? "Cargo" : propsFirma.cargo }}
                  </p>
                  <p class="font-text-light">
                    (+51)
                    {{ propsFirma.phone === "" ? "Celular" : propsFirma.phone }}
                  </p>
                  <p class="font-text-light">
                    {{
                      propsFirma.email === ""
                        ? "Correo electrónico"
                        : propsFirma.email
                    }}
                  </p>
                  <p class="font-text-light">
                    {{
                      propsFirma.direccion === ""
                        ? "Dirección"
                        : propsFirma.direccion
                    }}
                  </p>
                </v-col>
                <v-col v-show="false" :cols="12" :sm="2" :md="2" :lg="2" class="mx-auto my-auto">
                  <v-img
                    src="@/assets/logo-nissan-black.png"
                    lazy-src="@/assets/logo-nissan-black.png"
                    :width="100"
                  />
                  <!-- max-width="90"
                    height="60" -->
                </v-col>
                <v-divider />
                <v-col :cols="9"></v-col>
                <v-spacer />
                <v-col :cols="3" class="my-0">
                  <v-img
                    v-if="getSede(propsFirma.direccion) === 'Trujillo'"
                    class="align-self-end alineacion"
                    cover
                    :max-height="150"
                    :height="50"
                    src="@/assets/logo-inkalider.png"
                    lazy-src="@/assets/logo-inkalider.png"
                  ></v-img>
                  <v-img v-else
                    class="align-self-end alineacion"
                    :max-height="150"
                    :height="50"
                    src="@/assets/logo-automotoresInka.png"
                    lazy-src="@/assets/logo-automotoresInka.png"
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
  font-size: 20px;
}

.font-text-semibold {
  font-family: "Myriad Pro Semibold";
  font-size: 24px;
}

.alineacion {
  margin-top: -15px;
}

</style>
