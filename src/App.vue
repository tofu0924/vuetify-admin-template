<template>
  <v-app>
    <v-system-bar
      color="primary"
      dark
      height="50px"
      align="center"
      app
    >
      <div>3D Rendering</div>
      <input
        v-model="windowHeight"
        class="width: 100px"
      >
      <v-spacer />
    </v-system-bar>

    <v-navigation-drawer
      :width="width"
      color="secondary"
      dark
      permanent
      app
    >
      <!-- v-slot:img = #img -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            3D Layer
          </v-list-item-title>
          <v-list-item-subtitle> visible setting </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item, index) in layerInfos"
          :key="index"
          class="pa-0 ma-0"
        >
          <v-checkbox
            v-model="item.check"
            :label="`Layer: ${item.layer}`"
            class="pa-0 ma-0 shrink-mr-2"
            :color="item.csscolor"
          />
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div
      class="splitter"
      :style="`left: ${width -15}px`"
    />
    <v-main>
      <v-container
        class="ma-0 pa-0"
        fluid
      >
        <v-row>
          <v-col
            cols="12"
          >
            <v-card
              class="ma-5 pa-0"
              flat
              outlined
              color="secondary"
              height="800px"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    width: 256,
    layerInfos: [
      { layer: 0, color: [0, 0, 0], check: true, csscolor: "#000000" },
      { layer: 1, color: [0, 0, 0], check: true, csscolor: "#fcfcfc" },
      { layer: 2, color: [0, 0, 0], check: true, csscolor: "#f0c001" },
      { layer: 3, color: [0, 0, 0], check: true, csscolor: "#00120f" },
      { layer: 4, color: [0, 0, 0], check: true, csscolor: "#f0fcd0" },
      { layer: 5, color: [0, 0, 0], check: true, csscolor: "#10f0f0" },
      { layer: 6, color: [0, 0, 0], check: true, csscolor: "#60e0w0" },
      { layer: 7, color: [0, 0, 0], check: true, csscolor: "#ffff14" },
      { layer: 8, color: [0, 0, 0], check: true, csscolor: "#bbf9df" },
      { layer: 9, color: [0, 0, 0], check: true, csscolor: "#7bc8f6" },
      { layer: 10, color: [0, 0, 0], check: true, csscolor: "#fc5a50" },
      { layer: 11, color: [0, 0, 0], check: true, csscolor: "#ff81c0" }
    ],
    right: null,
    gradient: "rgba(0,0,0,.7), rgba(0,0,0,.7)",
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", to: "/" },
      { title: "Grid System", icon: "mdi-image", to: "/grid-system" },
      { title: "Grid List Page", icon: "mdi-image", to: "/grid-list-page" },
      { title: "Break Points", icon: "mdi-image", to: "/break-points" },
      { title: "Typography", icon: "mdi-image", to: "/typography" },
      { title: "Tables", icon: "mdi-table-settings", to: "/tables" },
      { title: "Forms", icon: "mdi-form-select", to: "/forms" },
      { title: "Buttons", icon: "mdi-gesture-tap-button", to: "/buttons" },
      { title: "Icons", icon: "mdi-emoticon-excited-outline", to: "/icons" },
    ],
    layerId: 1,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  }),
  mounted() {
    window.addEventListener("resize", this.myEventHandler);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.windowHeight = window.innerHeight;
      this.windowHeight = window.innerWidth;
    }
  }
};
</script>

<style>
.v-input--selection-controls__ripple {
  height: 34px !important;
}

.splitter{
  position: absolute !important;
  height: 100px;
  z-index: 100000;
  width: 15px !important;
  background-color: red;
}

</style>
