<template>
  <v-navigation-drawer
    app
    permanent
    :class="{ leftMenuClosed: isLeftMenuClosed }"
    color="sidebarnavigation"
    class="leftMenu"
    :width="width"
    ref="leftMenu"
  >
    <!--
    <div class="leftMenuIcon" :class="{leftMenuIconClosed: isLeftMenuClosed}"  @click="changeLeftMenuStatus"/>
-->
    <v-list-item class="layerMenuTitle">
      <button
        class="layerMenuArr"
        :class="{ layerMenuArrClosed: isLayerMenuClosed }"
        @click="changeLayerMenuStatus"
      />

      <v-list-item-content class="pa-0">
        <v-list-item-title>
          <v-text class="layerMenuTitleFont"> Layer </v-text>
          <v-text class="layerMenuSubtitleFont"> visible setting </v-text>
        </v-list-item-title>
      </v-list-item-content>
      <button
        class="leftMenuIcon"
        :class="{ leftMenuIconClosed: isLeftMenuClosed }"
        @click="changeLeftMenuStatus"
      />
    </v-list-item>
    <v-divider />
    <v-list
      class="pa-0 layerMenu"
      dense
      nav
      :class="{ layerMenuListClosed: isLayerMenuClosed }"
    >
      <v-list-item
        v-for="(item, index) in layerInfos"
        :key="index"
        class="ml-2 ma-0 pa-0 layerMenuItem"
      >
        <v-checkbox
          class="ma-0 pa-0"
          :color="item.csscolor"
          v-model="item.checked"
        >
          <template v-slot:label>
            <v-text class="layerMenuItemFont"> Layer: {{ item.layer }} </v-text>
          </template>
        </v-checkbox>
      </v-list-item>
    </v-list>
    <div class="bottomBoarder" />
    <div
      class="menuSplitter"
      :class="{ leftMenuSplitterClosed: isLeftMenuClosed, splitterRresizeMode:isResizeMode }"
      :style="`right: 0px;`"
      @mousedown="startResizeMenu"
      @mousemove="resizeMenu"
      @mouseup="endResizeMenu"
    />
  </v-navigation-drawer>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import treeArr from "../../../assets/tree_arr.png";

export default {
  name: "leftMenu",
  data() {
    return {
      layerStatus: [],
      layerInfos: [
        { layer: 0, color: [0, 0, 0], checked: true, csscolor: "#1d88ec" },
        { layer: 1, color: [226, 82, 210], checked: true, csscolor: "#e252d2" },
        { layer: 2, color: [142, 183, 49], checked: true, csscolor: "#8eb731" },
        { layer: 3, color: [133, 35, 167], checked: true, csscolor: "#8523a7" },
        { layer: 4, color: [92, 146, 6], checked: true, csscolor: "#5c9206" },
        { layer: 5, color: [157, 91, 0], checked: true, csscolor: "#9d5b00" },
        { layer: 6, color: [51, 194, 64], checked: true, csscolor: "#33c240" },
        { layer: 7, color: [0, 57, 139], checked: true, csscolor: "#00398b" },
      ],
      treeArr,
      isLayerMenuClosed: false,
      isLeftMenuClosed: false,
      width: 256,
      width_saved: 10,
      isResizeMode: false,
      mousedownPosX: 0,
    };
  },
  computed: {
    ...mapGetters({
      meshDataInfos: "WS_MESH_DATA_INFOS",
    }),
  },
  methods: {
    onResize() {
      this.width = this.$refs.leftMenu.width;
    },
    changeLeftMenuStatus() {
      this.isLeftMenuClosed = !this.isLeftMenuClosed;
      console.log(this.$refs.leftMenu);
      console.log(this.$refs.leftMenu.getBoundingClientRect());
      /*
      if (this.isLeftMenuClosed) {
        this.isLeftMenuClosed = !this.isLeftMenuClosed;
        this.width = this.width_saved;
      } else {
        this.isLeftMenuClosed = !this.isLeftMenuClosed;
        this.width_saved = this.width;
        this.width = 10;
      }
      */
    },
    changeLayerMenuStatus() {
      this.isLayerMenuClosed = !this.isLayerMenuClosed;
    },
    startResizeMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isResizeMode = true;
      this.mousedownPosX = e.pageX;
      this.width_saved = this.width;
      console.log("start");
    },
    resizeMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.isResizeMode) {
        console.log(e.pageX);
        const deltaX = this.mousedownPosX - e.pageX;
        if((this.width_saved - deltaX) >= 20){
          this.width = this.width_saved - deltaX;
        }
      }
    },
    endResizeMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isResizeMode = false;
      console.log("end");
    },
    checkedUpdate(e) {
      console.log(this.layerStatus);
      console.log(e.target.id);
      console.log(e.target.checked);
      this.LayerShowUpdate({ layer: e.target.id, visible: e.target.checked });
    },
    ...mapMutations({
      setcallbacks: "WS_CALLBACKS_SET",
    }),
    ...mapActions({
      LayerShowUpdate: "WS_LAYER_STATUS_UPDATE",
    }),
    updateMeshDataInfos(data) {
      console.log(JSON.stringify(data[0]));
      this.setMeshDataInfos(data[0]);
    },
  },
  created() {},
  mounted() {
    this.setcallbacks(this.updateMeshDataInfos);
    this.connect();
  },
};
</script>

<style src="./leftMenu.css" scoped></style>
